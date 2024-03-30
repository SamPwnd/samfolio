import { useState, useEffect } from "react";
import { elastic as Menu } from "react-burger-menu";
import { FileText, MenuIcon } from "lucide-react";
import { X } from "lucide-react";

export default function Burger({pageWrapId, outerContainerId}) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <Menu 
            isOpen={menuOpen}
            onStateChange={(state) => handleStateChange(state)}
            right 
            pageWrapId={pageWrapId} 
            outerContainerId={outerContainerId} 
            className="font-mono" 
            burgerButtonClassName="block md:hidden"
            customBurgerIcon={ <MenuIcon /> }
            customCrossIcon={ <X /> }
        >
            <a onClick={() => closeMenu()} href="#skills" className="link mr-5 hover:text-cyan-light">
                Skills
            </a>
            <a onClick={() => closeMenu()} href="#projects" className="link mr-5 hover:text-cyan-light">
                Progetti
            </a>
            <a
                href="https://drive.google.com/file/d/1-CapKbqO1jHumnnvh_tah9VK-Y7uXCpz/view?usp=drive_link"
                target="_blank"
                onClick={() => closeMenu()}
                className="link hover:text-cyan-light">
                    <div className="flex items-center gap-2">
                        <span>CV</span>
                        <FileText size={26}/> 
                    </div>
                    
            </a>
        </Menu>
    )
}