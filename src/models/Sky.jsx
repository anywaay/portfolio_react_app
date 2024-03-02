import { useGLTF } from '@react-three/drei'
import React from 'react'
import skyScene from "../assets/3d/sky.glb";
import {useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Declaration } from 'postcss';

const Sky = ({isRotating}) => {

    const sky = useGLTF(skyScene)
    const skyRef = useRef();
  useFrame((_, delta)=>{
    if(isRotating){
      skyRef.current.rotation.y += 0.12 * delta;
    }else{

    }
  })
  return (
    <mesh ref = {skyRef} >
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky