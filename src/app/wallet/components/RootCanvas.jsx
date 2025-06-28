'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { Suspense } from 'react'
import * as THREE from 'three'

import CurrentScene from './CurrentScene'
import CameraRig from './CameraRig'

export default function RootCanvas() {
  return (
    <Canvas
      className="bg-gray-100 dark:bg-gray-900"
      camera={{
        position: [0, 0, -0.5],
        fov: 40,
        near: 0.0001,
        far: 10,
      }}>
      <Suspense fallback={null}>
        {process.env.NODE_ENV === 'development' && (
          <motion.primitive object={new THREE.AxesHelper(10)} />
        )}
        <motion.ambientLight intensity={1} />
        <CurrentScene />
        <Environment preset="sunset" />
        <CameraRig />
      </Suspense>
    </Canvas>
  )
}
