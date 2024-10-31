import { HiOutlineRocketLaunch, HiRocketLaunch } from "react-icons/hi2";
import { HeroSection } from "../components/HeroSection";
import { MdLightMode } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { useState } from "react";
import Carousel from "../components/Carousel";

export default function Condominios() {
    return (
        <>
            <HeroSection 
                title="Energia Solar: Sustentabilidade em Condomínios"
                subtitle="Transforme a luz do sol em economia e bem-estar para todos!"
                buttonLink="/#calculator"
                buttonLabel="Fale com um atendente"
                imgSrc="/painelcondominio.png"
        />

        <div className="fixed bottom-4 right-4">
    <button type="button" className="flex items-center justify-center gap-3 px-4 py-2 max-w-[225px] bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:max-w-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200">
        <span className="flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="33" width="33" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
        </span>
        <span>Orçamento via whatsapp</span>
    </button> 
</div>

    <div className="text-neutral-200 bg-[#1e1e1e]">
        <div className="grid z-10 h-full min-h-[865px] w-full max-w-[1450px] mx-auto px-6 py-24">
            <div className="w-full grid grid-cols-1 grid-rows-1 gap-auto items-center lg:grid-cols-2">
                <div className="mb-4 mx-auto px-4 lg:mx-0 order-first lg:order-last">
                    <div className="max-w-xl pb-14">
                    <strong className="flex justify-center items-center py-4 text-sun-500 text-4xl leading-4 font-black tracking-widest uppercase mb-6">
                        <span className="text-sun-500">Ge</span>
                        <span className="text-[#000000]">Solar</span>
                    </strong>

                        <div className="flex flex-col justify-center items-center text-center mb-6">
                            <h1 className="py-2 mb-2 text-3xl leading-tight sm:text-2xl font-semibold text-neutral-600">
                                Energia fotovoltaica
                            </h1>
                            <p className="max-w-md mb-9 text-lg leading-6 text-neutral-500">
                                Lorem Ipsumis simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsumis simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since t
                            </p>
                        </div>
                    </div>
                </div>
            <div>
                <div className="max-w-xl h-full flex mx-auto lg:mx-0">
                    <img className="w-full mb-10" src="./gesolarcondo.jpg"/>
                </div>
            </div>
                </div>
            </div>
        </div>

    <div className="bg-neutral-900 h-full min-h-[75vh] w-full flex items-center justify-center flex-col py-24 px-6">
        <div className="w-full max-w-[1450px]">
            <h1 className="text-[#feae02] mb-24 text-2xl leading-tight font-semibold md:text-center md:mb-28">Compromisso com os nossos clientes
            </h1>
                <div className="grid grid-col-1 grid-rows-auto gap-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
                <div className="flex items-start justify-start flex-col">
                <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
                <div>
                    <span className="flex text-sun-500 justify-center items center text-6xl">
                    <HiOutlineRocketLaunch />
                    </span>
                </div>
                <div className="flex flex-col gap-4 justify-center items center text-center">
                    <strong className="block text-2xl text-sun-500 font-black">Nossa missão
                    </strong>
                    <p className="text-base font-semibold text-neutral-300">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                </div>
                </div>
                <div className="flex items-start justify-start flex-col">
                <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
                <div>
                    <span className="flex text-sun-500 justify-center items center text-6xl">
                    <HiOutlineLightBulb />
                    </span>
                </div>
                <div className="flex flex-col gap-4 justify-center items center text-center">
                    <strong className="block text-2xl text-sun-500 font-semibold ">Nossa visão
                    </strong>
                    <p className="text-base font-semibold text-neutral-300">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                </div>
                </div>
                <div className="flex items-start justify-start flex-col">
                <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
                <div>
                    <span className="flex text-sun-500 justify-center items center text-6xl">
                    <FaRegHandshake />
                    </span>
                </div>
                    <div className="flex flex-col gap-4 justify-center items center text-center">
                        <strong className="block text-2xl text-sun-500 font-semibold">Nossos valores
                        </strong>
                    <p className="text-base font-semibold text-neutral-300">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                </div>
                </div>
                </div>
        </div>
    </div>

    <div className="bg-neutral-900 h-full min-h-[75vh] w-full flex items-center justify-center flex-col py-24 px-6">
        <div className="w-full max-w-[1450px]">
            <h1 className="text-sun-500 mb-24 text-2xl leading-tight font-black md:text-center md:mb-28">
                Depoimentos
            </h1>

            <div className="flex items-center justify-center w-full flex-row gap-8 flex-wrap">
                <div className="w-full max-w-[620px] h-72 bg-gray-300 flex justify-center items center">
                    {/* <img src="" alt="" className="object-cover w-full h-full" /> */}
                </div>
                <div className="w-full max-w-[620px] h-72 bg-gray-300 flex justify-center items center">
                    {/* <img src="" alt="" className="object-cover w-full h-full" /> */}
                </div>
                <div className="w-full max-w-[620px] h-72 bg-gray-300 flex justify-center items center">
                    {/* <img src="" alt="" className="object-cover w-full h-full" /> */}
                </div>
                <div className="w-full max-w-[620px] h-72 bg-gray-300 flex justify-center items center">
                    {/* <img src="" alt="" className="object-cover w-full h-full" /> */}
                </div>
            </div>
        </div>
    </div>
    
    <section className="flex flex-col items-center bg-color-[1e1a1a]">
      <div className="w-full max-w-[880px] h-72 flex justify-center items center">
        <img
          src="/energiasolar2.jfif" 
          alt=""
          className="w-full h-full object-cover "
        />
      </div>
      <h2 className="text-3xl font-bold text-sun-500 py-10">
        Como Funciona
      </h2>
    </section>
    <div className="flex items-center justify-center w-full h-full bg-neutral-800 p-8 rounded-2xl">
          <li className="w-full max-w-[620px] h-72 flex items-center justify-center">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>
              colocar texto
          </li>
      </div>
      <div className="flex items-center justify-center w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>
              Colocar texto
          </li>
      </div>
      <div className="flex items-center justify-center w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>
              colocar texto
          </li>
      </div>
      <div className="flex items-center justify-center w-90 h-90 bg-neutral-800 p-8 rounded-2xl mx-auto">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>
              Colocar texto
          </li>
      </div>

                
</>
    );
}