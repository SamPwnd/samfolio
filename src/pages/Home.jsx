import React from "react";
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import AboutSingle from '../components/AboutSingle/AboutSingle'
import Collaboration from '../components/Collaboration/Collaboration'
import { TabTitle } from "../utils/generalFunctions";

export default function Home() {
    TabTitle('Samfolio - Portfolio')
    return (
        <>
            <Hero />
            <About clientHeight={window.innerHeight}/>
            <Skills />
            <AboutSingle clientHeight={window.innerHeight} />
            <Projects />
            <Collaboration clientHeight={window.innerHeight} />
        </>
    )
}