import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
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
    <motion.group ref={group} {...otherProps} dispose={null}>
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
          onTap={props.onTapSlider}
        />
        {children}
      </motion.mesh>
    </motion.group>
  )
}

useGLTF.preload('/card-holder-slider.glb')
