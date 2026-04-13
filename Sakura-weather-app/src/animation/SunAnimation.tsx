import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
// import type { Engine } from "tsparticles-engine";
import { useMemo } from "react";
import type { ISourceOptions } from "tsparticles-engine";

export function MySunAnimation({ type }: { type: string }) {

    // const particlesInit = useCallback(async (engine: Engine) => {
    //     await loadFull(engine);
    // }, []);

    const getOptions = (type: string): ISourceOptions => {
        if (type === "rain") {
            return {
                particles: {
                    number: {
                        value: 100
                    },
                    move: {
                        enable: true,
                        speed: 10,
                        direction: "bottom"
                    },
                    shape: {
                        type: "image",
                        options: {
                            image: {
                                src: "https://particles.js.org/images/flower.svg",
                                width: 32,
                                height: 32
                            }
                        }
                    }
                }
            };
        }

        return {
            particles: {
                number: {value: 0}
            }
        };
    };


    const options = useMemo(() => getOptions(type), [type]);

    return <Particles options={options} />;
}