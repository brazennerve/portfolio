import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';
import { portfolioData } from './data/portfolioData';
import Academics from './components/Academics';
import Extras from './components/Extras';

const App: React.FC = () => {
    const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Academics', 'Extras', 'Contact'];
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = ['home', ...navLinks.map(l => l.toLowerCase())];
            const fromTop = window.scrollY + 150;

            let currentActive = '#home';
            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (section && section.offsetTop <= fromTop) {
                    currentActive = `#${id}`;
                }
            }

            // Special case for reaching the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                currentActive = '#contact';
            }

            setActiveLink(currentActive);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.pushState(null, '', href);
            setActiveLink(href); // Immediate feedback on click
        }
    };

    return (
        <div className="bg-slate-900 text-slate-300 selection:bg-cyan-300 selection:text-cyan-900">
            <nav className="fixed top-0 left-0 right-0 bg-slate-900/50 backdrop-blur-md p-4 z-30 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className={`text-2xl font-bold transition-colors ${activeLink === '#home' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}>
                        {portfolioData.name}
                    </a>
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map(link => {
                            const href = `#${link.toLowerCase()}`;
                            return (
                                <a 
                                    key={link} 
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={`transition-all duration-300 font-medium px-3 py-1 rounded-md ${activeLink === href ? 'text-cyan-400 bg-slate-800' : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'}`}
                                >
                                    {link}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
            <main>
                <Header />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Academics />
                <Extras />
                <Contact />
            </main>
            <Footer />
            <AIChatWidget />
        </div>
    );
};

export default App;