import React from 'react'

const Header = () => {
  return (
    <header className="text-white body-font  bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "  target="_blank">
                <img className='w-14' src="https://i.ibb.co/kDfRT5b/logo-small-1.png"  />
                <span className="ml-3 text-xl text-white">EsahMrk</span>
              </a>
              <nav id='menu' className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                <a className="mr-5 ml-10 hover:text-gray-900">Inicio</a>
                <a  href='#planes' className="mr-5 ml-10 hover:text-gray-900">Planes</a>
                <a href='#Nuestro' className="mr-5 ml-10 hover:text-gray-900">Nosotros</a>
                <a className="mr-5 ml-10 hover:text-gray-900">Soporte</a>
                <button className="inline-flex items-center text-pink-700 bg-gray-200 border-0 py-2 px-4 focus:outline-none hover:bg-gray-300 rounded-full text-base mt-4 md:mt-0">Cotizar
                <svg  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              </nav>
            </div>
        </header>
  )
}

export default Header
