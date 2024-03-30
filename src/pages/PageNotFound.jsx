import React from "react";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../utils/generalFunctions";

export default function PageNotFound() {

    TabTitle('Samfolio - Errore 404');
    let navigate = useNavigate();

    return (
        <section className="section-container text-center h-screen flex flex-col justify-center">
            <h1 className="text-7xl font-semibold">Pagina non trovata!</h1>
            <h2 className="font-mono text-gradient">ERRORE 404</h2>

            <img src="/robot.svg" alt="robot 404" loading="lazy" className="max-w-64 block ms-auto me-auto mt-5 mb-5"/>
            <div className="mt-5">
                <Button onClick={() => navigate('/')} type='primary'>
                    Torna alla Home
                </Button>  
            </div>
        </section>
    );
}