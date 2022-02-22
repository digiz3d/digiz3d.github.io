import { useEffect, useState } from 'react'
import Card from './Card'
import CardHolderSlider from './CardHolderSlider'

export default function CurrentScene(props) {
  const [scene, setScene] = useState('initial')

  return (
    <CardHolderSlider
      rotation={[Math.PI / 2, 0, 0]}
      transition={{ duration: scene === 'initial' ? 2 : 0.5 }}
      initial={{ scale: 0, rotateZ: Math.PI, rotateX: Math.PI / 3 }}
      animate={{
        scale: 1,
        rotateZ: ['initial', 'closed'].includes(scene) ? -1 : 0,
        rotateX: Math.PI / 2,
      }}
      onTapSlider={() => setScene((s) => (s !== 'opened' ? 'opened' : 'closed'))}>
      <Card
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
        onPointerOver={(e) => {
          e.stopPropagation()
          console.log('ok 1')
        }}
        transition={{ duration: 0.5 }}
        animate={scene === 'opened' ? { x: 0.05 } : { x: 0 }}
      />
      <Card
        rotation={[0, 0, 0]}
        position={[0, -0.002, 0]}
        onPointerOver={(e) => {
          e.stopPropagation()
          console.log('ok 1')
        }}
        transition={{ duration: 0.5 }}
        animate={scene === 'opened' ? { x: 0.1 } : { x: 0 }}
      />
    </CardHolderSlider>
  )
}
