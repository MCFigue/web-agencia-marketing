
import './App.css';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


function App() {
 

  return (
    <>
        <header className="text-white body-font  bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 " href="https://tailblocks.cc" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-pink-700 p-2 bg-white rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              <span className="ml-3 text-xl text-white">EsahMrk</span>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                <a className="mr-5 ml-10 hover:text-gray-900">Inicio</a>
                <a className="mr-5 ml-10 hover:text-gray-900">Planes</a>
                <a className="mr-5 ml-10 hover:text-gray-900">Nosotros</a>
                <a className="mr-5 ml-10 hover:text-gray-900">Soporte</a>
              </nav>
              <button className="inline-flex items-center text-pink-700 bg-gray-200 border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded-full text-base mt-4 md:mt-0">Cotizar
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
        </header>
        <section className="text-white body-font bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400">
          <div className="container mx-auto flex  md:flex-row flex-col items-center pt-20 ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white"> Marketing  
              <Typewriter
                  words={[' Business', ' Digital', ' Social', ' de Contenido']
                  }
                  loop={15}
                  cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
                  
                  
                  ></Typewriter>
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed mt-12">Consigue aumentar tus clientes de una manera <br></br>efectiva, sin elevados costos de inversión.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-transparent border-solid border py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded-full  text-lg">Planes</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 rounded-full text-lg">Cotizar</button>
              </div>
            </div>
            <div className="">
          
           <img className='w-24 ml-24 absolute elements ' src="https://c.tenor.com/6R6CUEXJGkAAAAAi/favorite-instagram.gif" />
            
            
          

              <img className="" alt="hero" src="https://i.ibb.co/h2z72dZ/business-finance-and-employment-female-successful-entrepreneurs-concept-cheerful-successful-business.png" />

             
            </div>
          </div>
        </section>
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-pink-700 tracking-widest font-medium title-font mb-1">NUESTRO COMPROMISO CONTIGO</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Solo EsahMark te ofrece: </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Compromiso</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Nuestros servicios ofrecen el trato especial encargado por cada mienbro de nuestro equipo.
                    </p>
                    <a className="mt-3 text-pink-700 inline-flex items-center">Ver más
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Trabajo Profesional </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">Nuestros servicios ofrecen el trato especial encargado por cada mienbro de nuestro equipo.</p>
                    <a className="mt-3 text-pink-700 inline-flex items-center">Ver más
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Adaptable </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">Nuestros servicios ofrecen el trato especial encargado por cada mienbro de nuestro equipo..</p>
                    <a className="mt-3 text-pink-700 inline-flex items-center">Ver más
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>    
        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
          
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-pink-700 tracking-widest font-medium title-font mb-1">#ADAPTABLE</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Nuestros Planes</h1>
            </div>
            <div className="lg:w-1/4 mt-48 hidden lg:block">
              <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">Creación de Redes Sociales</p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Plan y Estrategia para redes sociales</p>
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Diseño de Contenidos post o stories</p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Carnadas de Venta</p>
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Textos publicitarios</p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Programación de contenido</p>
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Automatización de mensajes y comentarios</p>
                <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Resportes</p>
                <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Soporte 24/7 </p>
              </div>
            </div>
            <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
              <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest">BÁSICO</h3>
                  <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$19
                    <span className="text-gray-600 text-base ml-1">/mes</span>
                  </h2>
                  <span className="text-sm text-gray-600">Cobrando $200 por año</span>
                </div>
                <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Incluido </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Incluye Visualización</p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                  <button className="flex items-center mt-auto text-white bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pínk-700   rounded-full">Comprar
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">Contenido puede variar de cuerdo a la necesidad, previamente asesorado.</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-pink-700 relative">
                <span className="bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest">PRO</h3>
                  <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$38
                    <span className="text-gray-600 text-base ml-1">/mes</span>
                  </h2>
                  <span className="text-sm text-gray-600">Cobrando $456 por año</span>
                </div>
                <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Incluido </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">Incluye Visualización</p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <div className="p-6 text-center border-t border-gray-300">
                  <button className="flex items-center mt-auto text-white bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-700 rounded-full">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">Contenido puede variar de cuerdo a la necesidad, previamente asesorado.</p>
                </div>
              </div>
              <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest">BUSINESS</h3>
                  <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$54
                    <span className="text-gray-600 text-base ml-1">/mes</span>
                  </h2>
                  <span className="text-sm text-gray-600">Cobrando $648 por año</span>
                </div>
                <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Incluido </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">Incluye Visualización</p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </p>
                <div className="p-6 text-center border-t border-gray-300">
                  <button className="flex items-center mt-auto text-white bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-700 rounded-full">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">Contenido puede variar de cuerdo a la necesidad, previamente asesorado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>  
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="Incluye Visualización" className="object-cover object-center h-full w-full" src="https://dummyimage.com/600x600/edf2f7/a5afbd" />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                  <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          </div>
        </section>
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                    <p className="text-gray-500">UI Designer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                    <p className="text-gray-500">CTO</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                    <p className="text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                    <p className="text-gray-500">DevOps</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                    <p className="text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                    <p className="text-gray-500">UX Researcher</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                    <p className="text-gray-500">QA Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                    <p className="text-gray-500">System</p>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98/edf2f7/a5afbd" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                    <p className="text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section>
        <section className="text-gray-700 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
          



          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
              <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section>
        <footer className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
              <div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
                <input className="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Placeholder" type="text" />
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                  <br className="lg:block hidden"/>waistcoat green juice 
                </p>
              </div>
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <a className="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailwind Blocks —
                <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
              </p>
              <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
            </div>
          </div>
        </footer>
    </>
  );
}

export default App;
