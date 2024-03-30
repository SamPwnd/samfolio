import React from "react";
import { SOCIAL_LINKS } from "../../utils/costants";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Socials() {

    function selectIcon(name){
        switch (name) {
            case 'mail':
                return <Mail />
            case 'linkedin':
                return <Linkedin />
            case 'github':
                return <Github />
            case 'instagram':
                return <Instagram />
            default:
                break;
        }
    }
    
    return (
        <div className="flex py-8 gap-6">
            {
                SOCIAL_LINKS &&
                SOCIAL_LINKS.map(({ name, url }) => (
                    <a
                        href={url}
                        key={name}
                        className="link hover:text-cyan-light"
                        rel="noreferrer"
                        target="_blank"
                        aria-label={name}
                    >
                   
                    {selectIcon(name)}
                  </a>
                ))
            }
        </div>
    );
}