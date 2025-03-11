/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from './Loader';

type GLTFResult = {
  scene: THREE.Scene;
  nodes: Record<string, THREE.Object3D>;
  materials: Record<string, THREE.Material>;
};

const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf') as unknown as GLTFResult;

  return (
    <primitive
      object={scene}
      scale={[2.5, 2.5, 2.5]} // Zamiast scale={2.5}, przekazujemy tablicę
      position={[0, 0, 0]} // Zamiast position-y
      rotation={[0, 0, 0]} // Zamiast rotation-y
    />
  );
};

function EarthCanvas() {
  return (
    <Canvas
      shadows
      framework="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;
