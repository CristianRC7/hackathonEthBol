import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/localflow.png';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    setNavOpen(false);
    
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
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
    }
  };

  return (
    <header className="fixed w-full z-30 bg-violet-800 text-white h-20 flex items-center justify-between px-5">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/" className="block">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl p-2 md:hidden"
          onClick={toggleNav}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav
          ref={navRef}
          className={`fixed top-0 left-0 w-full h-full bg-violet-800 flex flex-col items-center justify-center gap-6 transform ${
            navOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-500 ease-in-out md:relative md:translate-y-0 md:flex-row md:flex md:h-auto md:bg-transparent md:gap-8`}
        >
          {/* Links */}
          <Link
            to="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl md:text-base hover:text-black hover:bg-white rounded-md px-4 py-2 transition-colors duration-300"
          >
            INICIO
          </Link>

          <Link
            to="#features"
            onClick={(e) => handleNavClick(e, 'features')}
            className="text-xl md:text-base hover:text-black hover:bg-white rounded-md px-4 py-2 transition-colors duration-300"
          >
            SOLUCIONES
          </Link>

          <Link
            to="#featuresblocks"
            onClick={(e) => handleNavClick(e, 'featuresblocks')}
            className="text-xl md:text-base hover:text-black hover:bg-white rounded-md px-4 py-2 transition-colors duration-300"
          >
            FUNCIONAMIENTO
          </Link>
          <Link
            to="#carousel"
            onClick={(e) => handleNavClick(e, 'carousel')}
            className="text-xl md:text-base hover:text-black hover:bg-white rounded-md px-4 py-2 transition-colors duration-300"
          >
            IMAGENES
          </Link>
          <Link
            to="#contactanos"
            onClick={(e) => handleNavClick(e, 'contactanos')}
            className="text-xl md:text-base hover:text-black hover:bg-white rounded-md px-4 py-2 transition-colors duration-300"
          >
            CONTÁCTANOS
          </Link>
          {/* Close Button for Mobile Menu */}
          {navOpen && (
            <button
              className="absolute top-4 right-4 text-2xl text-white"
              onClick={toggleNav}
            >
              <FaTimes />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
