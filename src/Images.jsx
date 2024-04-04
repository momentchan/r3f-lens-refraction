import { Image, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

export default function Images() {
    const { width, height } = useThree((state) => state.viewport)

    const data = useScroll()
    const group = useRef()

    useFrame(() => {
        group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
        group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
        group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
        group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
        group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
        group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
        group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
    })

    return <>
        <group ref={group}>
            <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="img1.jpg" />
            <Image position={[2, 0, 3]} scale={3} url="img6.jpg" />
            <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="trip2.jpg" />
            <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="img8.jpg" />
            <Image position={[0.75, -height, 10.5]} scale={1.5} url="trip4.jpg" />
            <Image position={[0, -height * 1.5, 7.5]} scale={[1.5, 3, 1]} url="img3.jpg" />
            <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 1.1, 1]} url="img7.jpg" />
        </group>
    </>
}