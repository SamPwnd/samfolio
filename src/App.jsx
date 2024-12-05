import {React, useState, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Header from './components/Header/Header'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Contact from './components/Contact/Contact'
import Cursor from './components/Cursor/Cursor'
import Footer from './components/Footer/Footer'
import Burger from './components/Burger/Burger'
import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor'
import Home from './pages/Home'
import DolciDelizie from './pages/DolciDelizie'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {           // Disabilita right-click
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [ ])

  //const [clientHeight, setClientHeight] = useState(0)

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div id="outer-container">
        <Burger pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          <div
            role="img"
            className="text-gray-400 opacity-5 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 sm:top-96 xs:top-[30rem]"
          >
            DEV
          </div>
          <ProgressBar />
          <Cursor/>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dolci-delizie' element={<DolciDelizie />} />
            <Route path="*" element={<PageNotFound />}/>
          </Routes>

          {/* <Contact /> Commentato perché al momento non funziona l'API della mail. Di conseguenza rimossa classe del bg e pulsante nel footer. Nav contattami e pulsante Hero ora portano al footer */}
          <Footer />
        </main>
      </div>
    </BrowserRouter>
    
    
  )
}

export default App
