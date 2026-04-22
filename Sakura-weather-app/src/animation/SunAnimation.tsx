import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import type { ISourceOptions } from "@tsparticles/engine";

export default function MySunAnimation({ type }: { type: "sun" | "rain" | "snow" | "night" }) {
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
            number: { value: 40 },
            shape: {
                type: "image",
                options: {
                    image: {
                        src: "https://illustcenter.com/wp-content/uploads/2025/01/rdesign_18609.png",
                        width: 150,
                        height: 150,
                    },
                },
            },
            color: { value: "#ffb7c5" }, // Ніжно-рожевий колір
            move: {
                enable: true,
                speed: 1.2,
                direction: "bottom",
                random: true,
                straight: false,
                outModes: "out",
            },
            rotate: {
                value: { min: 0, max: 360 },
                direction: "random",
                animation: {
                    enable: true,
                    speed: 5,
                },
            },
            opacity: { value: 0.8, random: true },
            size: { value: { min: 8, max: 16 }, random: true },
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
    }), [type]);


    if (type === "sun") {
        return (
            <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-100">
                <Particles
                    id="tsparticles"
                    options={options}
                    className="absolute inset-0 z-0"
                />
                <div className="relative z-10 flex items-center justify-center h-full text-4xl font-bold text-white">
                    {type === "sun"}
                </div>
            </div>
        );
    }

    return null;
}