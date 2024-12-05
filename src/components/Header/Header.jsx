import React from "react";
import { NavLink } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Header() {

    return (
        <header className="fixed top-0 z-10 py-4 w-full bg-gradient-to-b from-teal-1 to-transparent"> 
            <div className="section-container flex flex-wrap flex-col md:flex-row items-start md:items-center">
                <NavLink to="/#home" className="link">
                    <img src="./logo.svg" width="56" alt="Samuele Minissale" loading="lazy" />
                </NavLink>
                <nav className="font-mono text-white text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 items-center hidden md:flex">
                    <NavLink to="/#projects" className="link mr-5 hover:text-cyan-light">
                        Progetti
                    </NavLink>
                    <NavLink to="/#skills" className="link mr-5 hover:text-cyan-light">
                        Skills
                    </NavLink>
                    <NavLink to="/#footer" className="link mr-5 hover:text-cyan-light">
                        Contattami
                    </NavLink>
                </nav>
                <a
                    href="https://drive.google.com/file/d/1-CapKbqO1jHumnnvh_tah9VK-Y7uXCpz/view?usp=drive_link"
                    target="_blank"
                    className="link font-mono hover:text-cyan-light hidden md:flex items-center gap-2">
                        CV
                        <FileText size={22}/>
                </a>
            </div>
        </header>        
    );
}