import React from 'react'

const Solicitar = () => {
  return (
    <section className="text-white body-font bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400">
          <div className="container mx-auto flex  md:flex-row flex-col items-center pt-20 ">
            
            <div className="">
          
           
            
            
          

              <img className="w-96 mt-10" alt="hero" src="https://i.ibb.co/7b5fKFq/enthusiastic-young-asian-woman-looking-excited-at-camera-holding-money-dollars-in-hand-standing-over.png" />

             
            </div>
            <div  className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full   md:mt-0 relative z-10">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Reserva tú Asesoria</h2>
              <p className="leading-relaxed mb-5 text-gray-600">Consulta sobre nuestros planes personalizados</p>
              <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-pink-700 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
              <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-pink-700 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
              <button className="text-white bg-gradient-to-r from-pink-700 via-pink-500 to-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded-full text-lg">Enviar</button>
              <p className="text-xs text-gray-500 mt-3">Sus datos son almacenados por seguridad.</p>
            </div>
            </div>
          </div>
        </section>
  )
}

export default Solicitar