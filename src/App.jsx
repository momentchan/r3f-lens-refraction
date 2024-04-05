import { Preload, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Utilities from "./r3f-gist/utility/Utilities";
import Typography from "./Typography";
import Images from "./Images";
import Lens from "./Lens";

export default function App() {
    return <>
        <Canvas
            shadows
            camera={{ fov: 15, position: [0, 0, 20] }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <ScrollControls damping={0.2} pages={3} distance={0.5}>
                <Lens>
                    <Scroll>
                        {/* Canvas contents in here will scroll along */}
                        <Typography />
                        <Images />
                    </Scroll>

                    <Scroll html>
                        {/* DOM contents in here will scroll along */}
                        <div style={{ transform: 'translate3d(65vw, 192vh, 0)' }}>
                            PMNDRS Pendant lamp
                            <br />
                            bronze, 38 cm
                            <br />
                            CHF 59.95
                            <br />
                        </div>
                    </Scroll>

                    {/** This is a helper that pre-emptively makes threejs aware of all geometries, textures etc
                         By default threejs will only process objects if they are "seen" by the camera leading 
                         to jank as you scroll down. With <Preload> that's solved.  */}
                    <Preload />
                </Lens>
            </ScrollControls>
            <Utilities />
        </Canvas>
    </>
}