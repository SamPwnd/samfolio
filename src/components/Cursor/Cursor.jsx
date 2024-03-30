import { useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    try {
      document.createEvent('TouchEvent');
      setIsDesktop(false);
    } catch (e) {
      setIsDesktop(true);
    }
  },[])

  useEffect(() => {
    const setInitialPosition = () => {
      // Calcola la posizione iniziale (esempio: centro della finestra)
      const initialX = window.innerWidth / 2;
      const initialY = window.innerHeight / 2;
  
      // Imposta la posizione iniziale di cursore e follower
      gsap.set(cursor.current, { x: initialX, y: initialY });
      gsap.set(follower.current, { x: initialX, y: initialY });
    };
  
    // Imposta la posizione iniziale di cursore e follower
    setInitialPosition();
    
    const moveCircle = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: Linear.easeNone,
      });
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: Linear.easeNone,
      });
    };

    const hover = () => {
      gsap.to(cursor.current, {
        scale: 0.5,
        duration: 0.3,
      });
      gsap.to(follower.current, {
        scale: 3,
        duration: 0.3,
      });
    };

    const unHover = () => {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
      });
      gsap.to(follower.current, {
        scale: 1,
        duration: 0.3,
      });
    };

    if (isDesktop && document.body.clientWidth > 767) {
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      document.addEventListener("mousemove", moveCircle);

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });
    } else {
      follower.current.classList.add("hidden");
      cursor.current.classList.add("hidden");
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", unHover);
      });
    };
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`${styles.cursor} fixed hidden w-4 h-4 select-none pointer-events-none`}
      />
      <div
        ref={follower}
        className={`${styles.cursorFollower} fixed hidden w-10 h-10 select-none pointer-events-none`}
      />
    </>
  );
};

export default Cursor;
