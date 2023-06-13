import React from "react";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { SRGBColorSpace } from "three";
import { OrbitControls } from "@react-three/drei";


function MyMesh(props) {
    let targetObj = "/"+props.path +".gltf"
    const gltf = useLoader(GLTFLoader, targetObj);
    
    

    // const colorMap = useLoader(TextureLoader, "/envfico.gltf", (loader) => {
    //     loader.encoding = SRGBColorSpace;
    // })

    // gltf.scene.traverse((child) => {
    //     if(child.isMesh){
    //         child.material.map = colorMap;
    //     }
    // })

    return (
        < >

               
                <primitive   legacy={true} object={gltf.scene} position={[0, 0, 0]} />
      

        </>
    );

}

export default MyMesh;
