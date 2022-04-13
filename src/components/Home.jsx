import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  return (
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
                        delaySpeed={1000}>
                    </Typewriter>
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
  )
}

export default Home