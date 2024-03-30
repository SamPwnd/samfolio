import React from "react";
import { useEffect, useRef } from "react";
import {gsap, Linear} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "./about-single.scss"

export default function AboutSingle({clientHeight}) {
    const quoteRef = useRef(null);
    const targetSection = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
          defaults: { ease: Linear.easeNone, duration: 0.1 },
        });

        timeline
            .to(quoteRef.current, { opacity: 1, duration: 2 })
            .to(quoteRef.current.querySelector(".about-single"), {
                backgroundPositionX: "100%",
                duration: 1,
        });

        ScrollTrigger.create({
            trigger: targetSection.current,
            start: "center bottom",
            end: "center center",
            scrub: 0,
            animation: timeline,
        });
    }, [quoteRef, targetSection]);

    return (
        <section className="w-full relative" ref={targetSection}>
            <div
                className={`${clientHeight > 650 ? "py-72" : "py-60"} section-container`}
            >
                <h1 ref={quoteRef} className="about-single-wrapper font-medium font-sans text-[2.70rem] md:text-6xl lg:text-[4rem] text-center">
                    Sono organizzato e metodico con un occhio per i <span className="about-single font-bold">dettagli</span>.
                </h1>
            </div>
        </section>
    )
}