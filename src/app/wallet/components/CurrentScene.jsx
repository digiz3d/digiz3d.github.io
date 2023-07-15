'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

import Card from './Card'
import CardHolderSlider from './CardHolderSlider'
import { cardHolderOpenedAtom, sceneInitializedAtom } from './state'

const cards = [{ id: 'ID' }, { id: 'skills' }, { id: 'exp' }]

export default function CurrentScene(props) {
  const [sceneInitialized, setSceneInitialized] = useAtom(sceneInitializedAtom)
  const [cardHolderOpened, setCardHolderOpened] = useAtom(cardHolderOpenedAtom)

  useEffect(() => {
    setTimeout(() => {
      setSceneInitialized(true)
    }, 2000)
  }, [setSceneInitialized])

  return (
    <CardHolderSlider
      rotation={[Math.PI / 2, 0, 0]}
      transition={{ duration: sceneInitialized ? 0.3 : 2 }}
      initial={{ scale: 0, rotateZ: Math.PI, rotateX: Math.PI / 3 }}
      animate={{
        scale: 1,
        rotateZ: cardHolderOpened ? 0 : -1,
        rotateX: Math.PI / 2,
      }}
      onTapSlider={() => setCardHolderOpened((x) => !x)}>
      {cards.map((card, i) => (
        <Card
          key={card.id}
          position={[0, 0.002 - 0.002 * i, 0]}
          onPointerOver={(e) => e.stopPropagation()}
          transition={{ duration: 0.5 }}
          animate={{ x: cardHolderOpened ? 0.025 * i + 0.03 : 0 }}
          borderText={card.id}
        />
      ))}
    </CardHolderSlider>
  )
}
