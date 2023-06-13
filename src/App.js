import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import Box from './Box';
import MyMesh from './MyMesh';
import { render } from '@testing-library/react';

function App() {
  let [targetItem, setTargetItem] = useState("envfico");

  function Scene() {
    
    const {
      camera,
      gl: { domElement },

    } = useThree();

    camera.position.set(5, 10, 20);

    return (
      <>

        <ambientLight />
        <pointLight position={[3, 2, 4]}  ></pointLight>
        {/* <Box position={[0, 0, 0]}></Box> */}
        <Suspense  fallback={null}>
          <MyMesh   path={targetItem}></MyMesh>
        </Suspense>
        <OrbitControls args={[camera, domElement]} ></OrbitControls>
      </>

    );
  }




  function changeItem(itemName) {
    setTargetItem("itemName")


  }


  return (
    <>

      <div>
        <span> <button onClick={() => changeItem("envfico")} > oggetto 1</button> </span>
        <span> <button onClick={() => changeItem("mesh")}> oggetto 2</button> </span>
        <span> <button> oggetto 3</button> </span>

      </div>


      <Canvas legacy={true}>
        <Scene ></Scene>
      </Canvas>
    </>


  );
}





export default App;
