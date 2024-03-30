import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from './ProjectCard.module.scss'
import { Github } from "lucide-react";

export default function ProjectCard({project}) {
    const { name, description, gradient, image, url, gitUrl, target, width } = project;
    const projectCard = useRef(null);

    const options = {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: false,
    }
    useEffect( () => {
        VanillaTilt.init(projectCard.current, options)
    },[projectCard])

    const handleInnerLinkClick = (event) => {
        event.stopPropagation(); 
        window.open(gitUrl, "_blank");
    };

    return (
        <a href={url} target={target} ref={projectCard} className={`${styles.wrapper} link rounded-3xl bg-gray-700 transform-gpu ${width == 'full' && 'basis-full'}`}>
            <div 
                className={`h-[22rem] w-full bg-black ${styles.projectCard} relative rounded-3xl p-6 flex flex-col justify-between max-w-full`}
                style={{
                    background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`
                }}
            >
                <img src="/project-bg.svg" alt="project" loading="lazy" className="absolute w-full h-full top-0 left-0 object-cover opacity-30 rounded-3xl" />
                <span className={`${styles.projectImageWrapper} rounded-3xl`}>
                    <img src={image} alt="project" loading="lazy" className={ `${styles.projectImage} overflow-hidden` } />
                </span>
                <div
                    className="absolute top-0 left-0 w-full h-20 rounded-3xl"
                    style={{
                        background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
                    }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-full h-32 rounded-3xl"
                    style={{
                        background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
                    }}
                ></div>
                <h1
                    className="font-medium text-3xl sm:text-4xl lg:text-5xl z-10 pl-2 mt-1 transform-gpu"
                >
                    {name}
                </h1>
                <h2
                    className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
                >
                    {description}
                </h2>
                {gitUrl && 
                <button className={`${styles.github} block p-4 rounded-full absolute right-4 top-4`} onClick={handleInnerLinkClick}>
                    <Github size={24} />
                </button>
                }
            </div>
        </a>
    );
}