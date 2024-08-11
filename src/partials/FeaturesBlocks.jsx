import React from 'react';
import { FaDownload, FaCog, FaServer, FaExchangeAlt, FaShieldAlt, FaRegHandshake } from 'react-icons/fa';

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600">Fácil, Seguro y Descentralizado</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaDownload className="w-16 h-16 text-violet-400 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Descarga la Aplicación:</h4>
              <p className="text-gray-600 text-center">Obtén nuestra aplicación de escritorio y configúrala en tu máquina.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaCog className="w-16 h-16 text-violet-400 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Configura tus Flujos:</h4>
              <p className="text-gray-600 text-center">Centraliza todos tus canales de comunicación y define flujos de chatbots.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaServer className="w-16 h-16 text-violet-400 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Activa tu Infraestructura:</h4>
              <p className="text-gray-600 text-center">Mantén la aplicación encendida y contribuye al ecosistema descentralizado.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaExchangeAlt className="w-16 h-16 text-violet-400 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Oferta y Demanda:</h4>
              <p className="text-gray-600 text-center">Alquila infraestructura en el mercado, asegurando acceso continuo a recursos.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaShieldAlt className="w-16 h-16 text-violet-400 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Seguridad Blockchain:</h4>
              <p className="text-gray-600 text-center">Realiza transacciones seguras con nuestra solución basada en blockchain.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FaRegHandshake className="w-16 h-16 text-violet-400 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Transacciones sin Fricciones:</h4>
              <p className="text-gray-600 text-center">Los smart contracts se encargan de automatizar y asegurar todos los acuerdos entre los usuarios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
