import { useEffect, useRef } from "react";
import { SKILLS } from "../../utils/costants";
import { gsap, Linear } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Skills() {
    const targetSection = useRef(null);

    useEffect( () => {
        if (!targetSection.current) return;
        
        const timeline = gsap.timeline({
            defaults: { ease: Linear.easeNone, duration: 0.5 }
        })
        timeline.to(
            targetSection.current.querySelectorAll('.seq'), {
                opacity: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: targetSection.current.querySelector(".skills-wrapper"),
                    start: "100px bottom",
                    end: "center 60%",
                    //markers: true,
                    scrub: 0
                }
        })
    }, [targetSection]);

    return (
        <section id="skills" className="w-full relative transform-gpu" ref={targetSection}>
            <div className="section-container py-16 flex flex-col justify-center">
                <img className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block" src="/circles-pattern.svg" alt="circles pattern" loading="lazy" />
                <div className="flex flex-col skills-wrapper">
                    <div className="flex flex-col">
                        <h4 className="tracking-widest font-sans text-gray-100 mb-2 text-base seq">
                            SKILLS
                        </h4>
                        <h1 className="text-6xl font-sans font-medium text-gradient mb-2 seq">
                            Le mie Skills
                        </h1>
                        <h2 className="text-[1.7rem] font-sans font-medium md:max-w-2xl w-full seq">
                            Mi impegno a creare un'esperienza utente esteticamente gradevole utilizzando un'architettura frontend moderna.
                        </h2>
                    </div>
                    <div className="mt-10">
                        <h3 className="uppercase tracking-widest font-sans text-gray-100 mb-2 text-base seq">
                            Linguaggi e strumenti
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 seq transform-gpu">
                            {
                                SKILLS.languagesAndTools.map((skill) => (
                                    <img
                                        key={skill}
                                        src={`/skills/${skill}.svg`}
                                        alt={skill}
                                        width={60}
                                        height={60}
                                        loading="lazy"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="uppercase tracking-widest font-sans text-gray-100 mb-2 text-base seq">
                            Librerie e frameworks
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 seq transform-gpu">
                            {
                                SKILLS.librariesAndFrameworks.map((skill) => (
                                    <img
                                        key={skill}
                                        src={`/skills/${skill}.svg`}
                                        alt={skill}
                                        width={60}
                                        height={60}
                                        loading="lazy"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="uppercase tracking-widest font-sans text-gray-100 mb-2 text-base seq">
                            Altro
                        </h3>
                        <div className="flex flex-wrap items-center gap-6 seq transform-gpu">
                            {
                                SKILLS.other.map((skill) => (
                                    <img
                                        key={skill}
                                        src={`/skills/${skill}.svg`}
                                        alt={skill}
                                        width={60}
                                        height={60}
                                        loading="lazy"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}