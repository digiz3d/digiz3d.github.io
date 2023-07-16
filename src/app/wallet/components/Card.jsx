'use client'

import { motion } from 'framer-motion-3d'
import { useGLTF, Text } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { extend } from '@react-three/fiber'

import fonts from './fonts'

const opts = {
  fontSize: 0.02,
  color: 'red',
  maxWidth: 300,
  lineHeight: 1,
  letterSpacing: 0,
  textAlign: 'justify',
}

export default function Card({ label, ...props }) {
  const [hover, setHover] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  const group = useRef()
  const { nodes, materials } = useGLTF('/card.glb')
  return (
    <motion.group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHover(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHover(false)
      }}>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_1.geometry}
        material={materials.front}>
        <Text
          font={fonts['Roboto Slab']}
          anchorX="center"
          anchorY="middle"
          fontSize={0.02}
          position={[0.073, 0.002, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          color="#000000">
          {label}
        </Text>
      </motion.mesh>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_2.geometry}
        material={materials.side}
      />
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Card_3.geometry}
        material={materials.back}
      />
    </motion.group>
  )
}

useGLTF.preload('/card.glb')
