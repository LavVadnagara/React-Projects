import { useState, useEffect } from "react";

export const NavBar = () => {

   const [activeLink, setActiveLink] = useState('hero');
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      }

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, [])

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   } 

   return (
      <>
         <header className="header">
            <span className="logo">Lav Vadnagara | Web Developer</span>
            <nav className={scrolled ? "scrolled" : ""}>
               <ul className="nav-list">
                  <li className="nav-item">
                     <a className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') } href="#hero">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme') } href="#about">About Me</a>
                  </li>
                  <li className="nav-item">
                     <a className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills') } href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                     <a className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects') } href="#projects">Projects</a>
                  </li>
                  <li className="nav-item">
                     <a className={activeLink === 'contactme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contactme') } href="#contact">Contact Me</a>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   )
}