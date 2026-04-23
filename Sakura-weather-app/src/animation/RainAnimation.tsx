import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function MyRainAnimation() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        const initEngine = async () => {
            try {
                await initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                });
                console.log("✅ tsParticles ready");
                setInit(true);
            } catch (error) {
                console.error("❌ tsParticles init error:", error);
                setInit(true);
            }
        };
        initEngine();
    }, []);

    const options: ISourceOptions = useMemo(() => ({
        particles: {
            number: { value: 200 },
            shape: {
                type: "image",
                options: {
                    image: {
                        src: "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f4a7.svg",
                        width: 12,
                        height: 24,
                    },
                },
            },
            color: { value: "#a0c4ff" },
            move: {
                enable: true,
                speed: 8,
                direction: "bottom",
                random: false,
                straight: true,
                outModes: "out",
            },
            opacity: { value: 0.6, random: true },
            size: { value: { min: 3, max: 8 }, random: true },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 20,
                    duration: 2,
                    opacity: 0.8,
                },
            },
        },
    }), []);

    if(!init) return null;



    return (
        <div className="w-full h-screen fixed inset-0 bg-gradient-to-b from-gray-600 to-gray-900 z-0">

            {/*<img*/}
            {/*    src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2600.svg"*/}
            {/*    alt="sun"*/}
            {/*    className="absolute inset-0 w-full h-full object-contain z-0"*/}
            {/*/>*/}


            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0 z-10"
            />
            </div>
    );
}