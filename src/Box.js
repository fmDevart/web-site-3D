import React from "react";
import { useState,  useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

import{ a, useSpring} from '@react-spring/three';



function Box(props) {


    let [hovered, setHover] = useState(false);
    let [active, setActive] = useState(false);

    const mesh = useRef();

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));


    return (

        <a.mesh {...props}
            ref={mesh}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}
            onClick = {e => setActive(!active)}
            scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
        >
            <boxBufferGeometry position = {props.position} attach="geometry" args={[1.5, 1.5, 1.5]} ></boxBufferGeometry>
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'red'} ></meshStandardMaterial>
        </a.mesh>

    );

}

export default Box;
