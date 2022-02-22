import { motion } from 'framer-motion-3d'
import { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import CurrentScene from './CurrentScene'
import { Environment } from '@react-three/drei'

export default function WalletScene() {
  return (
    <Canvas
      camera={{
        position: [0.3, 0, 0.5],
        fov: 40,
        near: 0.0001,
        far: 10,
      }}>
      <Suspense fallback={null}>
        {process.env.NODE_ENV === 'development' && (
          <motion.primitive object={new THREE.AxesHelper(10)} />
        )}
        <motion.ambientLight intensity={0.5} />
        <motion.pointLight position={[2, 2, 2]} intensity={2} />
        <motion.pointLight position={[2, 2, -2]} intensity={2} />

        <CurrentScene />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  )
}
