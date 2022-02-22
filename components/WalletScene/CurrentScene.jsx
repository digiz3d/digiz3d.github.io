import { useEffect, useState } from 'react'
import Card from './Card'
import CardHolderSlider from './CardHolderSlider'

const cards = [{ id: 'ID' }, { id: 'talents' }, { id: 'exp' }]

export default function CurrentScene(props) {
  const [scene, setScene] = useState('initial')

  return (
    <CardHolderSlider
      rotation={[Math.PI / 2, 0, 0]}
      transition={{ duration: scene === 'initial' ? 2 : 0.3 }}
      initial={{ scale: 0, rotateZ: Math.PI, rotateX: Math.PI / 3 }}
      animate={{
        scale: 1,
        rotateZ: ['initial', 'closed'].includes(scene) ? -1 : 0,
        rotateX: Math.PI / 2,
      }}
      onTapSlider={() => setScene((s) => (s !== 'opened' ? 'opened' : 'closed'))}>
      {cards.map((card, i) => (
        <Card
          key={card.id}
          position={[0, 0.002 - 0.002 * i, 0]}
          onPointerOver={(e) => e.stopPropagation()}
          transition={{ duration: 0.5 }}
          animate={{ x: scene === 'opened' ? 0.025 * i + 0.03 : 0 }}
          borderText={card.id}
        />
      ))}
    </CardHolderSlider>
  )
}
