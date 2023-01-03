import { useEffect, useRef, useState } from 'react'
import { useGLTF, Text } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

export default function CardHolderSlider(props) {
  const [hover, set] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'default'
  }, [hover])

  const group = useRef()
  const { nodes, materials } = useGLTF('/card-holder-slider.glb')
  const { children, ...otherProps } = props
  return (
    <motion.group
      ref={group}
      {...otherProps}
      dispose={null}
      onPointerOver={(e) => e.stopPropagation()}>
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Holder.geometry}
        material={materials.Metallic}>
        <motion.mesh
          castShadow
          receiveShadow
          geometry={nodes.Slider.geometry}
          material={materials.BlackPlastic}
          position={[-0.1, 0, -0.03]}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          onTap={props.onTapSlider}
        />
        <Text
          position={[0, 0.01, 0.0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.02}
          material={materials.BlackPlastic}>
          Open me
        </Text>
        {children}
      </motion.mesh>
    </motion.group>
  )
}

useGLTF.preload('/card-holder-slider.glb')
