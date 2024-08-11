import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/localflow.jpg';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  }, [navOpen]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    setNavOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top && 'bg-[rgb(70,25,147)] bg-opacity-90 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="block" aria-label="LocallyFlow">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Mobile Menu Button */}
          <button className="text-2xl md:hidden p-2" onClick={toggleNav}>
            {navOpen ? <FaTimes className="text-white" /> : <FaBars className="text-black" />}
          </button>

          {/* Navigation */}
          <nav
            className={`fixed top-0 left-0 w-full h-full bg-[rgb(70,25,147)] flex flex-col items-center justify-center gap-6 transform transition-transform duration-500 ease-in-out ${
              navOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } md:flex md:flex-row md:relative md:translate-y-0 md:opacity-100 md:h-auto md:bg-transparent md:gap-8`}
          >
            {/* Close Button for Mobile Menu */}
            {navOpen && (
              <button 
                className="absolute top-4 right-4 text-2xl text-white"
                onClick={toggleNav}
              >
                <FaTimes />
              </button>
            )}

            <Link
              to="#herohome"
              onClick={(e) => handleNavClick(e, 'herohome')}
              className={`text-xl md:text-base ${top ? 'text-black' : 'text-white'} hover:text-white hover:bg-black rounded-md px-4 py-2 transition-colors duration-300`}
            >
              INICIO
            </Link>
            <Link
              to="#galeria"
              onClick={(e) => handleNavClick(e, 'galeria')}
              className={`text-xl md:text-base ${top ? 'text-black' : 'text-white'} hover:text-white hover:bg-black rounded-md px-4 py-2 transition-colors duration-300`}
            >
              GALERÍA
            </Link>
            <Link
              to="#companies"
              onClick={(e) => handleNavClick(e, 'companies')}
              className={`text-xl md:text-base ${top ? 'text-black' : 'text-white'} hover:text-white hover:bg-black rounded-md px-4 py-2 transition-colors duration-300`}
            >
              EMPRESAS
            </Link>
            <Link
              to="#contactanos"
              onClick={(e) => handleNavClick(e, 'contactanos')}
              className={`text-xl md:text-base ${top ? 'text-black' : 'text-white'} hover:text-white hover:bg-black rounded-md px-4 py-2 transition-colors duration-300`}
            >
              CONTÁCTANOS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
