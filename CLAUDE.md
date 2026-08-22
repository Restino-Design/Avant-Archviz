# Avant-Archviz (Golfin Swans) — Project Context

Auto-loaded by Claude Code at the start of any session opened in this
folder. This project is embedded live as an interactive iframe inside the
"Golfin Swans" project card on a separate portfolio site — see that
project's own `CLAUDE.md` (repo `Restino-Design/restinocore-portfolio-pro`)
for the full picture of how the two connect.

## What this is

- **Repo:** `Restino-Design/Avant-Archviz` (public), default branch is
  **`rarch`**, not `main`.
- **Live site:** https://avant-archviz.vercel.app — auto-deploys on push to
  `rarch` via Vercel's GitHub integration.
- **Stack:** Vite + React 19 + `@react-three/fiber` + `@react-three/drei` +
  `@react-three/postprocessing`. A single-scene apartment archviz walkthrough
  (couch, chairs, table, lamp, curtains, TV, doors, window — all
  `useGLTF`+`useTexture` components in `src/App.tsx`).

## What was fixed in this session (commit `8b8493f`)

The scene wasn't opening / was crashing the tab on mobile. Root cause:
~15 materials, mostly 2K–4K PBR textures per channel, decoded into GPU
memory all at once — a multi-GB footprint way past typical mobile WebGL
budgets, which is what was actually killing the context (not a code bug —
the scene ran fine on desktop).

Fix:
- `public/textures-mobile/` — a 1024px mirror of every texture the scene
  actually uses (generated with ffmpeg), auto-selected on mobile via a
  `useResponsiveTexture()` wrapper around `useTexture()` in `App.tsx`. Cuts
  decoded VRAM per texture ~4x (2K sources) to ~16x (4K sources).
- Mobile also gets `dpr={1}` (desktop keeps `[1,2]`), `<Stage shadows={false}>`,
  and skips the Bloom/`<EffectComposer>` pass entirely.
- `webglcontextlost` handler on the canvas → shows a plain "reload" screen
  on GPU failure instead of a frozen/crashed tab.

**Not verified on a real physical phone** — automated browser tooling can't
reproduce actual mobile GPU memory limits, so if you're picking this back
up, the first thing to do is ask whoever's testing to confirm on a real
device.

## Known follow-ups not yet done

- `public/objs/lamp.glb` and `lamplight.glb` (27MB each) embed their own
  images internally that GLTFLoader parses/uploads before the component
  overrides the materials right after — wasted bandwidth and a transient
  GPU memory spike. Fixing this needs a GLB-editing tool (e.g.
  `gltf-transform`) to strip the embedded images; not attempted.
- `public/textures/curtain1/`, `curtain2/`, `tv2/` are dead weight, not
  referenced by any component in `App.tsx` — safe to delete.
- `useGLTF.preload("/Golfin_Swans.glb")` at the bottom of `App.tsx`
  references a file that doesn't exist in `public/` — every load request
  quietly 404s to the SPA fallback (`index.html`) and GLTFLoader fails to
  parse it. Harmless (nothing else depends on it) but should probably just
  be deleted.

## Local dev

```
npm install
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build — this must pass before any push
```

No Node.js was on PATH in the environment this session ran in — it was
installed fresh to `C:\Users\Santos Tech\AppData\Local\node-tool\node-v22.14.0-win-x64\`
(direct zip download from nodejs.org; `winget` hung indefinitely trying to
sync sources, same issue hit installing `gh` and `ffmpeg` for the sibling
portfolio project — direct downloads worked instantly both times).

Texture regeneration for `public/textures-mobile/` (if source textures ever
change) was done with a plain ffmpeg loop, roughly:

```bash
FF=/path/to/ffmpeg.exe
for folder in <list of texture dirs actually used in App.tsx>; do
  mkdir -p "public/textures-mobile/$folder"
  for f in "public/textures/$folder"/*; do
    "$FF" -y -i "$f" -vf "scale=1024:1024" -q:v 3 -compression_level 9 \
      "public/textures-mobile/$folder/$(basename "$f")"
  done
done
```

Only the folders actually referenced by a `useTexture()`/`useResponsiveTexture()`
call in `App.tsx` need this — grep for `"/textures/` to get the exact list;
several folders in `public/textures/` (see dead-weight note above) aren't
used by anything.
