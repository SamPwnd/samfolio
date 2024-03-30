import { useRef, useEffect } from "react";
import styles from "./ProgressBar.module.scss"

export default function ProgressBar() {
    const progress = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const totalScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = totalScroll / windowHeight;
            progress.current ? (progress.current.style.transform = `scaleX(${scrolled})`) : "";
        })
    },[progress])

    return (
        <div className={`${styles.progressTrack} w-full fixed top-0`}>
            <div ref={progress} className={`${styles.progressBar}`}></div>
        </div>
    )
}