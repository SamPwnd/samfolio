import React from "react";
import styles from './DolciDelizie.module.scss'
import { TabTitle } from "../utils/generalFunctions";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { DOLCI_DELIZIE_IMAGES } from "../utils/costants";


export default function DolciDelizie() {
    TabTitle('Samfolio - DolciDelizie');

    const [index, setIndex] = useState(-1);
    
    return (
        <section className="section-container mt-40">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="pr-0 md:pr-4">
                    <h1 className="text-6xl font-semibold">Dolci Delizie</h1>
                    <h2 className="text-cyan-light font-medium font-mono">Un e-commerce di dolci, responsive e dallo stile accattivante come i prodotti al suo interno.</h2>
                    <p className="font-medium mt-9 text-2xl">Rappresenta un'esperienza di shopping online impeccabile, costruita utilizzando la potenza e la flessibilità di WordPress e WooCommerce. Con un focus sulla qualità, sull'estetica e sull'usabilità. Il tema usato è 100% personalizzato e sviluppato da zero.</p>
                    
                    <picture className="w-full mt-6 md:hidden">
                        <source srcSet="/projects/dolci-delizie/dolci-delizie-top.webp" type="image/webp"/>
                        <img className="rounded-2xl" src="/projects/dolci-delizie/dolci-delizie-top.png" loading="lazy"  alt="screenshot-top" />
                    </picture>

                    <div className="text-lg font-medium mt-10">
                        <h3 className="text-5xl font-sans font-medium text-gradient">Principali tecnologie utilizzate</h3>
                        <p className="mb-2 mt-2"><span className="font-bold font-mono text-cyan-100">Wordpress:</span> ho scelto WordPress come piattaforma principale per la sua versatilità, facilità d'uso e robustezza</p>   
                        <p className="mb-2"><span className="font-bold font-mono text-cyan-100">WooCommerce:</span> plugin per il commercio elettronico, ho sfruttato le sue potenti funzionalità per la gestione degli ordini, dei pagamenti, delle spedizioni e altro ancora</p>
                        <p className="mb-2"><span className="font-bold font-mono text-cyan-100">Advanced Custom Field</span></p>   
                        <p className="mb-2"><span className="font-bold font-mono text-cyan-100">Tema Personalizzato:</span> per garantire un'esperienza unica e personalizzata, ho sviluppato un tema personalizzato specificamente progettato per l'e-commerce Dolci Delizie. Questo ci ha permesso di integrare le funzionalità desiderate, di adattare il design alle nostre esigenze e di offrire un ambiente visivamente accattivante ai clienti</p>   
                    </div>
                    <div className="flex gap-3 items-center">
                        <img
                            src={`/skills/wordpress.svg`}
                            alt="wordpress"
                            width={60}
                            height={60}
                            loading="lazy"
                        />
                        <img
                            src={`/skills/woo.svg`}
                            alt="woo"
                            width={60}
                            height={60}
                            loading="lazy"
                        />
                        <img
                            src={`/skills/acf.webp`}
                            alt="acf"
                            width={53}
                            height={53}
                            loading="lazy"
                        />
                    </div>

                    <div className="text-lg font-medium mt-10">
                        <h3 className="text-5xl font-sans font-medium text-gradient">Funzionalità varie</h3>
                        <ul className={`font-mono text-cyan-100 mt-2 ${styles.list}`}>
                            <li className="font-medium mb-1">Blog</li>
                            <li className="font-medium mb-1">Catalogo di Prodotti</li>
                            <li className="font-medium mb-1">Carrello e Checkout Semplici</li>
                            <li className="font-medium mb-1">Gestione degli Ordini</li>
                            <li className="font-medium mb-1">Sistema di Recensioni e Valutazioni</li>
                            <li className="font-medium mb-1">Promozioni e Sconti</li>
                            <li className="font-medium mb-1">Gestione dei Clienti e degli Account</li>
                            <li className="font-medium mb-1">Personalizzazione del Prodotto</li>
                            <li className="font-medium mb-1">Gestione del Magazzino</li>
                            <li className="font-medium mb-1">Dashboard di Amministrazione</li>
                            <li className="font-medium mb-1">Raccomandazioni di Prodotti</li>
                            <li className="font-medium">Compatibilità con Dispositivi Mobili</li>
                        </ul>
                    </div>
                    
                </div>
                <div>
                    <picture>
                        <source srcSet="/projects/dolci-delizie/capture-dolci-delizie.webp" type="image/webp"/>
                        <img src="/projects/dolci-delizie/capture-dolci-delizie.png"  className="rounded-2xl max-w-sm hidden md:block" alt="screenshot" loading="lazy"/>
                    </picture>
                </div>
            </div>

            <div className="mt-12">
                <h3 className="text-5xl font-sans font-medium text-gradient mb-3">Screenshots</h3>

                <PhotoAlbum 
                    layout="columns" 
                    photos={DOLCI_DELIZIE_IMAGES}  
                    onClick={({ index }) => setIndex(index)} 
                    columns={(containerWidth) => {
                        if (containerWidth < 600) return 2;
                        if (containerWidth < 1200) return 3;
                        return 4;
                    }}
                />

                <Lightbox
                    slides={DOLCI_DELIZIE_IMAGES}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Zoom]}
                /> 
            </div>
            
        </section>
    )
}