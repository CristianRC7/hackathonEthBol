import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaPaperPlane } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200" id='footer'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Redes sociales */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://www.facebook.com/profile.php?id=61563315706740" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-3 text-xl hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.instagram.com/localflowbo/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-3 text-xl hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.tiktok.com/@localflowbo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-3 text-xl hover:text-black transition-colors duration-300"
          >
            <FaTiktok />
          </a>
          <a 
            href="https://x.com/localflowbo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-3 text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Redes de los creadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { name: 'Andrés Cladera', linkedin: 'https://www.linkedin.com/in/accladera/' },
            { name: 'María Lourdes Vaca Pessoa', linkedin: 'https://www.linkedin.com/in/maria-lourdes-vaca-pessoa-10aa931b2/' },
            { name: 'Diego Guzmán', linkedin: 'https://www.linkedin.com/in/diego-guz/' },
            { name: 'Walter Ronny Ibañez Saucedo', linkedin: 'https://www.linkedin.com/in/walter-ronny-iba%C3%B1ez-saucedo-192a05255/' },
            { name: 'Cristian Ramírez', linkedin: 'https://www.linkedin.com/in/cristian-ramirez7/' },
          ].map((creator, index) => (
            <div key={index} className="text-center">
              <Link 
                to={creator.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-medium hover:text-violet-400 transition-colors duration-300 flex items-center justify-center"
              >
                {creator.name}
                <FaLinkedin className="ml-2 text-xl transition-transform duration-300 transform hover:scale-110" />
              </Link>
            </div>
          ))}
        </div>

        {/* Suscríbete */}
        <div className="text-center">
          <h6 className="text-lg font-medium mb-4">Suscríbete</h6>
          <p className="text-gray-400 mb-4">Recibe las últimas noticias y artículos directamente en tu bandeja de correo cada mes.</p>
          <form className="max-w-md mx-auto">
            <div className="relative">
              <input
                id="newsletter"
                type="email"
                className="form-input w-full px-4 py-3 text-gray-800 rounded-full"
                placeholder="Tu correo electrónico"
                required
              />
              <button type="submit" className="absolute inset-y-0 right-0 px-4 flex items-center bg-violet-600 hover:bg-violet-700 text-white rounded-full">
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
