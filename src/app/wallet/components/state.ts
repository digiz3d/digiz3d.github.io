import { atom } from 'jotai'

export const currentStepAtom = atom<SceneStep>('initial')
export const activeCardIdAtom = atom<SceneObject | null>(null)

const stepsNames = ['initial', 'closed', 'opened', 'card'] as const
type SceneStep = (typeof stepsNames)[number]

export const cards = [
  { id: 'cardId', label: 'ID' },
  { id: 'cardSkills', label: 'Skills' },
  { id: 'cardExp', label: 'XP' },
] as const

const objectsNames = ['cardHolder', ...cards.map((x) => x.id)] as const
type SceneObject = (typeof objectsNames)[number]

function getCardPosition(index: number) {
  return 0.025 * index + 0.03
}

export const steps = {
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
    cardId: { scale: 1, x: getCardPosition(0) },
    cardSkills: { scale: 1, x: getCardPosition(1) },
    cardExp: { scale: 1, x: getCardPosition(2) },
  },
  card: {
    cardHolder: {
      scale: 0.9,
      rotateX: Math.PI / 1.5,
      rotateY: Math.PI * 0.4,
      rotateZ: Math.PI * 0.9,
      y: 0.05,
    },
    cardId: (isActive: boolean) => ({ scale: 1, x: isActive ? 1 : getCardPosition(0) }),
    cardSkills: (isActive: boolean) => ({ scale: 1, x: isActive ? 1 : getCardPosition(1) }),
    cardExp: (isActive: boolean) => ({ scale: 1, x: isActive ? 1 : getCardPosition(2) }),
  },
} as const
