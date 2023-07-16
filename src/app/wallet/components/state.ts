import { atom } from 'jotai'

export const currentStepAtom = atom<SceneStep>('initial')
export const activeCardIdAtom = atom<SceneObject | null>(null)

import { AnimationProps } from 'framer-motion'

const stepsNames = ['initial', 'closed', 'opened', 'card'] as const
type SceneStep = (typeof stepsNames)[number]

export const cards = [
  { id: 'cardId', label: 'ID' },
  { id: 'cardSkills', label: 'Skills' },
  { id: 'cardExp', label: 'XP' },
] as const

const objectsNames = ['cardHolder', ...cards.map((x) => x.id)] as const
type SceneObject = (typeof objectsNames)[number]

export const steps: Record<
  SceneStep,
  Record<
    SceneObject,
    AnimationProps['animate'] | ((isActive: boolean) => AnimationProps['animate'])
  >
> = {
  initial: {
    cardHolder: { scale: 0, rotateX: Math.PI / 3, rotateZ: Math.PI },
    cardId: { scale: 0 },
    cardSkills: { scale: 0 },
    cardExp: { scale: 0 },
  },
  closed: {
    cardHolder: { scale: 1, rotateX: Math.PI / 2, rotateY: Math.PI * -0.1, rotateZ: Math.PI * 0.9 },
    cardId: { scale: 1 },
    cardSkills: { scale: 1 },
    cardExp: { scale: 1 },
  },
  opened: {
    cardHolder: {
      scale: 0.9,
      rotateX: Math.PI / 1.5,
      rotateY: Math.PI * 0.4,
      rotateZ: Math.PI * 0.9,
      y: 0.05,
    },
    cardId: { scale: 1, x: 0.025 * 0 + 0.03 },
    cardSkills: { scale: 1, x: 0.025 * 1 + 0.03 },
    cardExp: { scale: 1, x: 0.025 * 2 + 0.03 },
  },
  card: {
    cardHolder: {
      scale: 0.9,
      rotateX: Math.PI / 1.5,
      rotateY: Math.PI * 0.4,
      rotateZ: Math.PI * 0.9,
      y: 0.05,
    },
    cardId: (isActive) => ({ scale: 1, x: isActive ? 1 : 0.025 * 0 + 0.03 }),
    cardSkills: (isActive) => ({ scale: 1, x: isActive ? 1 : 0.025 * 1 + 0.03 }),
    cardExp: (isActive) => ({ scale: 1, x: isActive ? 1 : 0.025 * 2 + 0.03 }),
  },
} as const
