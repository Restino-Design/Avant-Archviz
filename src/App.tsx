import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Stage, useTexture } from "@react-three/drei"


import { Suspense } from "react"

    function BackgroundModel(props: any) {
      const { scene } = useGLTF("/objs/background.glb")
      
      const textures = useTexture({
        map: "/textures/background_wit/standardSurface2_baseColor.png",
        normalMap: "/textures/background_wit/standardSurface2_normal.png",
        aoMap: "/textures/background_wit/standardSurface2_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.receiveShadow = true;
          obj.castShadow = true;
          
          // Remova o polygonOffset se for o mesh principal
          obj.material.polygonOffset = false;
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function FCover(props: any) {
      const { scene } = useGLTF("/objs/roof.glb")
      
      const textures = useTexture({
        map: "/textures/background/roof_baseColor.png",
        normalMap: "/textures/background/roof_normal.png",
        aoMap: "/textures/background/roof_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

        function RoofModel(props: any) {
      const { scene } = useGLTF("/objs/r2.glb")
      
      const textures = useTexture({
        map: "/textures/background/roof_baseColor.png",
        normalMap: "/textures/background/roof_normal.png",
        aoMap: "/textures/background/roof_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Cover(props: any) {
      const { scene } = useGLTF("/objs/protocover.glb")
      
      const textures = useTexture({
        map: "/textures/background/roof_baseColor.png",
        normalMap: "/textures/background/roof_normal.png",
        aoMap: "/textures/background/roof_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function CouchModel(props: any) {
      const { scene } = useGLTF("/objs/couch.glb")
      
      const textures = useTexture({
        map: "/textures/couch1/sofa_03_diff_4k.jpg",
        normalMap: "/textures/couch1/sofa_03_nor_gl_4k.png",
        roughnessMap: "/textures/couch1/sofa_03_rough_4k.jpg",
        alphaMap: "/textures/couch1/sofa_03_opacity_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          if (textures.alphaMap) {
            obj.material.alphaMap = textures.alphaMap
            obj.material.transparent = false
          }

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Pillow(props: any) {
      const { scene } = useGLTF("/objs/pillow.glb")
      
      const textures = useTexture({
        map: "/textures/pillow2/pasted__standardSurface2_baseColor.png",
        normalMap: "/textures/pillow2/pasted__standardSurface2_normal.png",
        aoMap: "/textures/pillow2/pasted__standardSurface2_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Furniture(props: any) {
      const { scene } = useGLTF("/objs/furniture.glb")
      
      const textures = useTexture({
        map: "/textures/furniture1/modern_wooden_cabinet_diff_4k.jpg",
        normalMap: "/textures/furniture1/modern_wooden_cabinet_nor_gl_4k.png",
        roughnessMap: "/textures/furniture1/modern_wooden_cabinet_rough_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Lamp(props: any) {
      const { scene } = useGLTF("/objs/lamp.glb")
      
      const textures = useTexture({
        map: "/textures/lamp1/standardSurface1_baseColor.png",
        normalMap: "/textures/lamp1/standardSurface1_normal.png",
        aoMap: "/textures/lamp1/standardSurface1_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          
          obj.material.transparent = true;
          obj.material.opacity = 1;
          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function LampLight(props: any) {
      const { scene } = useGLTF("/objs/lamplight.glb")
      
      const textures = useTexture({
        map: "/textures/lamplight/modern_ceiling_globe_baseColor.png",
        normalMap: "/textures/lamplight/modern_ceiling_globe_normal.png",
        aoMap: "/textures/lamplight/modern_ceiling_globe_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1

          // Se o nome do objeto no Blender for "Lampada" ou "Bulb"
        // Ou aplique a todos se o modelo for apenas a lâmpada em si
          obj.material.emissive = new THREE.Color("#fffae0") // Cor quente
          obj.material.emissiveIntensity = 2 // Intensidade do brilho

          obj.material.needsUpdate = true
        }
      })

      return (
      <group>
        <primitive object={scene} {...props} />
        {/* Luz real que afeta o resto da sala */}
        <pointLight position={[0, 0, 0]} intensity={1.5} distance={10} decay={2} castShadow />
      </group>
    )
    }

    function TV(props: any) {
      const { scene } = useGLTF("/objs/tv.glb")
      
      const textures = useTexture({
        map: "/textures/tv1/Television_01_diff_4k.jpg",
        normalMap: "/textures/tv1/Television_01_nor_gl_4k.png",
        roughnessMap: "/textures/tv1/Television_01_roughness_4k.jpg",
        alphaMap: "/textures/tv1/Television_01_metallic_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          if (textures.alphaMap) {
            obj.material.alphaMap = textures.alphaMap
            obj.material.transparent = false
          }

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Curtain(props: any) {
      const { scene } = useGLTF("/objs/curtain.glb")
      
      const textures = useTexture({
        map: "/textures/curtain3/standardSurface1_baseColor.png",
        normalMap: "/textures/curtain3/standardSurface1_normal.png",
        aoMap: "/textures/curtain3/standardSurface1_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Stick(props: any) {
      const { scene } = useGLTF("/objs/curtain_stick.glb")
      
      const textures = useTexture({
        map: "/textures/curtain_stick/standardSurface1_baseColor.png",
        normalMap: "/textures/curtain_stick/standardSurface1_normal.png",
        aoMap: "/textures/curtain_stick/standardSurface1_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function MDoor(props: any) {
      const { scene } = useGLTF("/objs/door.glb")

      const textures = useTexture({
        map: "/textures/door3/standardSurface1_baseColor.png",
        normalMap: "/textures/door3/standardSurface1_normal.png",
        aoMap: "/textures/door3/standardSurface1_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          
          obj.material.transparent = true;
          obj.material.opacity = 1;
          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function KDoor(props: any) {
      const { scene } = useGLTF("/objs/doork.glb")

      const textures = useTexture({
        map: "/textures/doork2/standardSurface1_baseColor.png",
        normalMap: "/textures/doork2/standardSurface1_normal.png",
        aoMap: "/textures/doork2/standardSurface1_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          

          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Window(props: any) {
      const { scene } = useGLTF("/objs/window.glb")

      const textures = useTexture({
        map: "/textures/window/openPBR_shader1_baseColor.png",
        normalMap: "/textures/window/openPBR_shader1_normal.png",
        aoMap: "/textures/window/openPBR_shader1_occlusionRoughnessMetallic.png",
      })

      textures.map.flipY = false
      textures.normalMap.flipY = false

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          
          obj.material.polygonOffset = true
          obj.material.polygonOffsetFactor = 1
          obj.material.polygonOffsetUnits = 1
          
          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Chair1(props: any) {
      const { scene } = useGLTF("/objs/chair1.glb")

      const textures = useTexture({
        map: "/textures/chairs1/dining_chair_02_diff_4k.jpg",
        normalMap: "/textures/chairs1/dining_chair_02_nor_gl_4k.png",
        roughnessMap: "/textures/chairs1/dining_chair_02_rough_4k.jpg",
        alphaMap: "/textures/chairs1/dining_chair_02_metal_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          if (textures.alphaMap) {
            obj.material.alphaMap = textures.alphaMap
            obj.material.transparent = false
          }

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Chair2(props: any) {
      const { scene } = useGLTF("/objs/chair2.glb")

        const textures = useTexture({
        map: "/textures/chairs1/dining_chair_02_diff_4k.jpg",
        normalMap: "/textures/chairs1/dining_chair_02_nor_gl_4k.png",
        roughnessMap: "/textures/chairs1/dining_chair_02_rough_4k.jpg",
        alphaMap: "/textures/chairs1/dining_chair_02_metal_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          if (textures.alphaMap) {
            obj.material.alphaMap = textures.alphaMap
            obj.material.transparent = false
          }

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Chair3(props: any) {
      const { scene } = useGLTF("/objs/chair3.glb")

      const textures = useTexture({
        map: "/textures/chairs1/dining_chair_02_diff_4k.jpg",
        normalMap: "/textures/chairs1/dining_chair_02_nor_gl_4k.png",
        roughnessMap: "/textures/chairs1/dining_chair_02_rough_4k.jpg",
        alphaMap: "/textures/chairs1/dining_chair_02_metal_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          if (textures.alphaMap) {
            obj.material.alphaMap = textures.alphaMap
            obj.material.transparent = false
          }

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Chair4(props: any) {
      const { scene } = useGLTF("/objs/chair4.glb")

      const textures = useTexture({
        map: "/textures/chairs1/dining_chair_02_diff_4k.jpg",
        normalMap: "/textures/chairs1/dining_chair_02_nor_gl_4k.png",
        roughnessMap: "/textures/chairs1/dining_chair_02_rough_4k.jpg",
        alphaMap: "/textures/chairs1/dining_chair_02_metal_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          if (textures.alphaMap) {
            obj.material.alphaMap = textures.alphaMap
            obj.material.transparent = false
          }

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }

    function Table(props: any) {
      const { scene } = useGLTF("/objs/table.glb")

      const textures = useTexture({
        map: "/textures/table1/modern_coffee_table_01_diff_4k.jpg",
        normalMap: "/textures/table1/modern_coffee_table_01_nor_gl_4k.png",
        roughnessMap: "/textures/table1/modern_coffee_table_01_rough_4k.png",
      })

      Object.values(textures).forEach((tex) => {
        tex.flipY = false
      })

      scene.traverse((obj: any) => {
        if (obj.isMesh) {

          obj.material.map = textures.map
          obj.material.normalMap = textures.normalMap
          obj.material.roughnessMap = textures.roughnessMap

          obj.material.needsUpdate = true
        }
      })

      return <primitive object={scene} {...props} />
    }



function App() {

  return (

    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>

      <Canvas flat camera={{ position: [0, 2, 5], fov: 45 }}>

        <Suspense fallback={null}>
          <Stage environment="apartment" intensity={0.6}>
            
            <EffectComposer>
              <Bloom 
                luminanceThreshold={1} // Só brilha o que for MUITO claro (emissive > 1)
                mipmapBlur 
                intensity={0.5} 
                radius={0.4} 
              />
              <ToneMapping adaptive />
            </EffectComposer>
            <BackgroundModel scale={1} />
            <RoofModel scale={1} />
            <Cover scale={1} />
            <FCover scale={1} />
            <CouchModel scale={1} />
            <Pillow scale={1} />
            <Furniture scale={1} />
            <Lamp scale={1} />
            <LampLight scale={1} />
            <TV scale={1} />
            <Curtain scale={1} />
            <Stick scale={1} />
            <MDoor scale={1} />
            <KDoor scale={1} />
            <Window scale={1} />
            <Chair1 scale={1} />
            <Chair2 scale={1} />
            <Chair3 scale={1} />
            <Chair4 scale={1} />
            <Table scale={1} />
          </Stage>
          <OrbitControls makeDefault /> 
        </Suspense>
      </Canvas>

    </div>

)

}

useGLTF.preload("/Golfin_Swans.glb")
export default App