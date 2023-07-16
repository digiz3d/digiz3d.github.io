import { useFrame } from '@react-three/fiber'

export default function CameraRig() {
  useFrame((state, delta) => {
    const horizontalCenter = state.viewport.width / 2
    const verticalCenter = state.viewport.height / 2
    state.camera.position.x = (state.pointer.x * 3 - horizontalCenter) / 100
    state.camera.position.y = (state.pointer.y * 3 - verticalCenter) / 100
    state.camera.lookAt(0, 0, 0)
  })
}
