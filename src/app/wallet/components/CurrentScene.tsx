'use client'

import { useAtom } from 'jotai'

import Card from './Card'
import CardHolderSlider from './CardHolderSlider'
import { activeCardIdAtom, cards, currentStepAtom, steps } from './state'
import React, { useEffect } from 'react'
import { AnimatePresence } from 'motion/react'

export default function CurrentScene() {
  const [step, setStep] = useAtom(currentStepAtom)
  const [activeCardId, setActiveCardId] = useAtom(activeCardIdAtom)
  const animateProps = steps[step]
  console.log('animateProps', animateProps.cardHolder)
  const activeCardLabel = cards.find((card) => card.id === activeCardId)?.label

  useEffect(() => {
    if (step === 'initial') setStep('closed')
  }, [])

  return (
    <>
      <CardHolderSlider
        rotation={[Math.PI / 2, 0, 0]}
        transition={{ duration: 0.5 }}
        initial={steps.initial.cardHolder}
        animate={animateProps.cardHolder}
        onTapSlider={() => {
          if (step === 'closed') setStep('opened')
          if (step === 'opened') setStep('closed')
        }}>
        {cards.map((card, i) => {
          const cardAnimateProp = animateProps[card.id]
          return (
            <Card
              key={card.id}
              position={[0, 0.002 - 0.002 * i, 0]}
              onPointerOver={(e: Event) => e.stopPropagation()}
              transition={{ duration: 0.5 }}
              animate={
                typeof cardAnimateProp === 'function'
                  ? cardAnimateProp(card.id === activeCardId)
                  : cardAnimateProp
              }
              label={card.label}
              onClick={(e: Event) => {
                e.stopPropagation()
                if (step !== 'opened') return
                setActiveCardId(null)
                setActiveCardId(card.id)
                setStep('card')
              }}
            />
          )
        })}
      </CardHolderSlider>
      <AnimatePresence>
        {activeCardId && (
          <Card
            transition={{ duration: 0.5 }}
            initial={{ y: -1, z: 0 }}
            animate={{ y: 0, z: -0.2 }}
            exit={{ y: -1, z: 0 }}
            rotation={[Math.PI * 1.5, Math.PI / 2, 0]}
            scale={1}
            onPointerOver={(e: Event) => e.stopPropagation()}
            label={activeCardLabel || 'oopsie'}
            onClick={(e: Event) => {
              e.stopPropagation()
              if (step !== 'card') return
              setActiveCardId(null)
              setStep('opened')
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
