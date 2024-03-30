import { useEffect, useRef } from "react";
import { PROJECTS } from "../../utils/costants";
import { gsap, Linear } from "gsap";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
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
                    trigger: targetSection.current.querySelector(".projects-wrapper"),
                    start: "top bottom",
                    end: "top 40%",
                    //markers: true,
                    scrub: 0
                }
        })
    }, [targetSection]);

    return (
        <section id="projects" className="w-full relative" ref={targetSection}>
            <img className="absolute hidden right-0 bottom-3/4 w-1/4 max-w-2xl md:block" src="/dots-pattern.svg" alt="dots pattern" loading="lazy" />
            <div className="section-container py-16 flex flex-col justify-center">
                <div className="flex flex-col projects-wrapper">
                    <div className="flex flex-col">
                        <h4 className="uppercase tracking-widest font-sans text-gray-100 mb-2 text-base seq">
                            Progetti
                        </h4>
                        <h1 className="text-6xl font-sans font-medium text-gradient mb-2 seq">
                            I miei Progetti
                        </h1>
                        <h2 className="text-[1.7rem] font-sans font-medium md:max-w-xl w-full seq">
                            Alcune delle mie creazioni, realizzate con passione, creatività...  e qualche mal di testa.
                        </h2>
                    </div>
                    <div className="mt-10 flex gap-4 flex-wrap w-full seq">
                        {PROJECTS.map((project) => (
                            <ProjectCard 
                                key={project.name}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}