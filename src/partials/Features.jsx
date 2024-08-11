import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import Imagen1 from '../images/Hanako_Kun.jpg';
import FeaturesElement from '../images/features-element.png';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section id="features" className="relative">

      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explora nuestras soluciones</h1>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Potente suite de herramientas</h3>
                <p className="text-xl text-gray-600">Nuestro bot basado en blockchain simplifica las operaciones de comercio electrónico, ofreciendo una plataforma segura, eficiente, y altamente adaptable para la gestión empresarial y la atención al cliente.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">ChatBot</div>
                    <div className="text-gray-600">Interactúa con un bot inteligente que mejora la atención al cliente y optimiza las ventas.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-6 h-6 fill-current transform transition-transform duration-300 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3c-4.971 0-9 3.806-9 8.5 0 2.485 1.17 4.707 3 6.193v4.307c0 .38.219.725.564.894.133.064.273.093.414.093.215 0 .43-.069.607-.206L11 20.19c.325.052.656.08.999.08 4.971 0 9-3.806 9-8.5S16.971 3 12 3zm0 13a1 1 0 110-2 1 1 0 010 2zm3-3a1 1 0 110-2 1 1 0 010 2zm-6 0a1 1 0 110-2 1 1 0 010 2z"/>
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Conexión con la billetera</div>
                    <div className="text-gray-600">Disfruta de una integración segura con tu billetera digital para transacciones rápidas y sin problemas.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-6 h-6 fill-current transform transition-transform duration-300 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 8H4a2 2 0 00-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm-6 6a2 2 0 110-4 2 2 0 010 4zm5-6h-1v-1.5C18 4.57 16.43 3 14.5 3h-5C7.57 3 6 4.57 6 6.5V8H5a2 2 0 00-2 2v1h18v-1a2 2 0 00-2-2zM8 8V6.5C8 5.67 8.67 5 9.5 5h5c.83 0 1.5.67 1.5 1.5V8H8z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={Imagen1} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={FeaturesBg} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
