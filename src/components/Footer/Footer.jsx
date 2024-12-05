import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Howl } from "howler";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import Lottie from "react-lottie-player";
import planeAnimation from "../../assets/paperPlane.json";
import styles from "./Footer.module.scss";


export default function Footer() {

    const paperplane = useRef(null)
    const [planeSounds, setPlaneSounds] = useState(['/sounds/wind-1.mp3', '/sounds/wind-2.mp3'])
    
    useEffect(() => {
        const handleAnimationIteration = () => {
            const planeTopStart = Math.random() * 250 - 30;
            const planeTopEnd = Math.random() * 250 - 30;
            paperplane.current.style.setProperty('--plane-top-start', planeTopStart + 'px');
            paperplane.current.style.setProperty('--plane-top-end', planeTopEnd + 'px');
        };

        if (paperplane.current) {
            // Aggiungi un gestore per l'evento di iterazione dell'animazione
            paperplane.current.addEventListener('animationiteration', handleAnimationIteration);
        }

        // Rimuovi il gestore dell'evento quando il componente si smonta
        return () => {
            if (paperplane.current) {
                paperplane.current.removeEventListener('animationiteration', handleAnimationIteration);
            }
        };
    }, []);

    const planeClickSound = new Howl({
        src: planeSounds,
        rate: 1,
        volume: 0.5,
        onplay: () => {
            setPlaneSounds(prevSounds => [...prevSounds].reverse());
        }
    })

    function handlePlaneClick() {
        planeClickSound.play();
    }


    return (
        <footer className="w-full  relative overflow-hidden" id="footer"> {/* Tolta temporaneamente la classe bg-teal-2 per avere un background coerente mentre Contact è nascosto */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#22d3ee" fillOpacity="1" d="M0,160L80,165.3C160,171,320,181,480,160C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="bg-gradient-to-b from-cyan-light to-sky-600 mt-[-1px] pb-20 pt-20 sm:pt-7 md:pt-0 relative">
                <div className={`${styles.plane}`} ref={paperplane} onClick={handlePlaneClick}>
                    <Lottie 
                        animationData={planeAnimation}
                        loop
                        play
                    />
                </div>
                <div className="section-container pt-4 flex flex-col items-center">
                    <Fade>
                        <h1 className="font-medium text-3xl md:text-5xl text-center">
                            Sentiti libero di contattarmi come vuoi.
                        </h1>
                        <Socials />
                        {/* <Button href='#contact' type='secondary'> Rimosso per lo stesso motivo sopra, Contact non funziona
                            Scrivimi
                        </Button> */}
                    </Fade>
                </div>
            </div>
            <p className="bg-teal-1 w-full font-mono text-center text-sm sm:text-base font-medium tracking-wide py-2">
                Sviluppato da <span className="text-gradient font-extrabold">Samuele Minissale</span>
            </p>
        </footer>
    )
}