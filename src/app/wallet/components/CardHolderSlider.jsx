'use client'

import { useEffect, useState } from 'react'
import { useGLTF, Text } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

import fonts from './fonts'

export default function CardHolderSlider(props) {
  const [hover, set] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  const { nodes, materials } = useGLTF('/card-holder-slider.glb')
  const { children, ...otherProps } = props

  return (
    <motion.group {...otherProps} dispose={null} onPointerOver={(e) => e.stopPropagation()}>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Holder.geometry}
        material={materials.Metallic}
        onClick={(e) => e.stopPropagation()}>
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Slider.geometry}
          material={materials.BlackPlastic}
          position={[-0.1, 0, -0.03]}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          onClick={props.onTapSlider}
        />
        <Text
          position={[0, 0.007, 0.0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.02}
          color="#000000"
          font={fonts['Roboto Slab']}>
          Open me
        </Text>
        {children}
      </motion.mesh>
    </motion.group>
  )
}

useGLTF.preload('/card-holder-slider.glb')
