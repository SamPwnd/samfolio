import React from "react";
import { useRef, useEffect } from "react";
import styles from './Hero.module.scss'
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import Lottie from "react-lottie-player";
import Typed from 'typed.js';
import { Fade } from "react-awesome-reveal";
import laptopAnimation from "../../assets/laptopAnimation.json"
import { TYPED_STRINGS } from "../../utils/costants";

export default function Hero() {

    const typedEl = useRef(null);
    const targetSection = useRef(null);

    const typedOptions = {
        strings: TYPED_STRINGS,
        typeSpeed: 50,
        startDelay: 1500,
        backSpeed: 50,
        backDelay: 8000,
        loop: true,
    }

    useEffect(() => {
        const typed = new Typed(typedEl.current, typedOptions);

        return () => typed.destroy()
    },[typedEl, targetSection])

    return (
        <section id="home" className="min-h-screen flex">
            <div className="section-container w-full flex flex-col justify-center relative">
                <div className="flex flex-col items-start mb-16 md:mb-0 md:mt-0 mt-40">
                    <Fade duration={550} damping={0.35} cascade triggerOnce>
                        <h5 className="font-mono text-cyan-light font-medium mb-3">Ciao, mi chiamo</h5>
                        <h1 className={`${styles.heroName} mb-4 font-semibold text-6xl text-white`}>
                            <span className={`${styles.highlight} me-3`}>
                                Samuele
                            </span>
                            <span>
                                Minissale
                            </span>   
                        </h1>
                        <p className="font-mono text-3xl leading-relaxed text-zinc-400">
                            <span ref={typedEl} >
                            </span>
                        </p>
                        <div>
                            <Socials />
                        </div>
                        
                        <div>
                            <Button href='#contact' type='primary'>
                                Contattami
                            </Button>
                        </div>
                    </Fade>
                </div>
                <Fade duration={550} damping={0.35} triggerOnce>
                    <div className="absolute invisible xl:top-1/2 top-2/3 bottom-0 translate-y-[-50%] translate-x-[0] w-5/12 lg:visible lg:right-12 2xl:right-16">
                        <Lottie 
                            animationData={laptopAnimation} 
                            loop 
                            play
                        />
                    </div>
                </Fade>
            </div>
        </section>
    );
}