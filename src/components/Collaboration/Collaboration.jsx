import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Collaboration.module.scss"

export default function Collaboration({ clientHeight}) {
    const quoteRef = useRef(null);
    const targetSection = useRef(null);

    useEffect(() => {
        const smallScreen = document.body.clientWidth < 767;

        const timeline = gsap.timeline({
          defaults: { ease: Linear.easeNone, duration: 0.1 },
        });

        timeline
            .to(quoteRef.current, { opacity: 1, duration: 2 })
            .to(quoteRef.current.querySelector(`#collab-text-target`), {
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

        const slidingTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

        slidingTl
            .to(targetSection.current.querySelector(".ui-left"), {
                xPercent: smallScreen ? -500 : -150,
            })
            .fromTo(
                targetSection.current.querySelector(".ui-right"),
                { xPercent: smallScreen ? -500 : -150 },
                { xPercent: 0 },
                "<"
            );

        ScrollTrigger.create({
            trigger: targetSection.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
            animation: slidingTl,
        });
    }, [quoteRef, targetSection]);
    
    return (
        <section className="w-full relative my-40 overflow-hidden" ref={targetSection}>
            <div className={`${clientHeight > 650 ? "py-36" : "py-48"} section-container flex flex-col overflow-visible`}>
                <p className="opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap transform-gpu ui-left">
                    {Array(5)
                        .fill(
                        " Frontend Developement Problem Solving Web Apps  "
                        )
                    }{" "}
                </p>

                <h1
                    ref={quoteRef}
                    className="mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
                >
                    Pronto per lavorare{" "}
                    <span id="collab-text-target" className={`${styles.textStrong} font-semibold`}>Insieme</span>?
                </h1>

                <p className="mt-7 md:mt-9 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap transform-gpu ui-right">
                    {Array(5)
                        .fill(
                        " React JavaScript CSS Html Wordpress Git "
                        )
                    }{" "}
                </p>
            </div>
        </section>
    );
}