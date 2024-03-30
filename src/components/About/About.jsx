import React from "react";
import { useEffect, useRef } from "react";
import {gsap, Linear} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function About({clientHeight}) {

    const quoteRef = useRef(null);
    const targetSection = useRef(null);

    useEffect( () => {
        const timeline = gsap.timeline({
            defaults: { ease: Linear.easeNone, duration: 0.6 }
        })

        timeline
            .fromTo(
                quoteRef.current.querySelector('.about-upper'),
                { opacity: 0.2 },
                { opacity: 1 }
            )
            .to(
                quoteRef.current.querySelector('.about-upper'),{
                opacity: 0.2,
                delay: 0.5
            })
            .fromTo(
                quoteRef.current.querySelector(".about-lower"),
                { opacity: 0.2 },
                { opacity: 1 },
                "<"
            )
            .to(quoteRef.current.querySelector(".about-lower"), {
                opacity: 0.2,
                delay: 1,
            });
        
        ScrollTrigger.create({
            trigger: targetSection.current,
            start: 'center 80%',
            end: 'center top',
            scrub: 0,
            animation: timeline,
        })
    }, [quoteRef, targetSection])

    return (
        <section className="w-full relative mt-24 mb-44 transform-gpu" ref={targetSection}>
            <div
                className={`${clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"} section-container`}
            >
                <h1 className="font-sans font-medium text-4xl md:text-6xl lg:text-[4rem] text-center" ref={quoteRef}>
                    <span className="about-upper leading-tight">
                        Sono uno sviluppatore appassionato che, con impegno, crea applicazioni di qualità.{' '}
                    </span>
                    <span className="about-lower leading-tight">
                        Do uguale importanza sia all'aspetto estetico sia alle performance.
                    </span>
                    
                </h1>

            </div>
        </section>
    )
}