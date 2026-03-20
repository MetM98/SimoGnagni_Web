import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Palmares from './components/Palmares';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-orange-500 selection:text-white">
            <Hero />
            <About />
            <Palmares />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
