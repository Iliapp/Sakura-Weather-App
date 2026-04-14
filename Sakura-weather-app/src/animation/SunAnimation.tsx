import Particles from "@tsparticles/react";
import { useMemo, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

export default function MySunAnimation({ type }: { type: string }) {

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const options = useMemo(() => ({
        particles: {
            number: { value: 80 },
            move: {
                enable: true,
                speed: 2,
                direction: "bottom"
            },
            shape: {
                type: "circle"
            }
        }
    }), [type]);

    return (
        <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-100">

            <Particles
                init={particlesInit}
                options={options as any}
                className="absolute inset-0 z-0"
            />

            <div className="relative z-10 flex items-center justify-center h-full text-4xl font-bold text-white">
                🌸 {type}
            </div>

        </div>
    );
}