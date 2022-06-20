import { useState } from "react";

import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "../components/Button";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";

export default function Servicing() {
    const [slideValue, setSlideValue] = useState(50)

    function slideImageComparasion(e: any) {
        const imageOnTop = document?.getElementById("image_on_top");
        
        if (imageOnTop != null) {
            imageOnTop.style.clipPath = `polygon(0 0, ${e.target.value}% 0, ${e.target.value}% 100%, 0 100%)`
        }
            
        setSlideValue(e.target.value)
    }

    return (
        <>
            <div className="relative w-full h-full max-w-[1450px] min-h-[calc(100vh-92px)] mx-auto flex gap-16">
                <div className="absolute inset-0 w-full px-6 pb-24 flex items-end justify-start bg-gradient-to-b from-transparent to-neutral-900/90 xl:relative xl:w-1/2 xl:items-center xl:justify-center xl:pb-0">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-bold text-neutral-200 tracking-tight leading-10 md:text-5xl">
                                Melhor eficiencia e limpeza maxima
                            </h1>

                            <h2 className="text-md font-medium text-neutral-300 tracking-tight max-w-2xl xl:text-neutral-400">
                                Fazemos a manutenção das suas placas, pra voce ter sempre a 
                                melhor peformace e estética do seu sistema
                            </h2>
                        </div>

                        <div>
                            <Button>Eu quero</Button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full min-h-[calc(100vh-92px)] flex items-center justify-center">
                    <img
                        className="w-[100%] h-[calc(100vh-92px)] object-cover xl:h-full"
                        src="/manutencao-hero-page.png" 
                        alt="" 
                    />
                </div>
            </div>
            
            <div className="w-full h-full max-w-[1450px] min-h-screen mx-auto flex items-center">
                <div className="w-full h-full flex flex-col-reverse gap-16 py-24 px-6 xl:flex-row">
                    <div className="flex items-center justify-center">
                        <img
                            className="w-full h-[400px] lg:h-[580px] bg-blue-500 object-cover"
                            src="/servicing.png" 
                            alt="" 
                        />
                    </div>

                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <Title>Devo fazer manutenção?</Title>

                            <Subtitle>A partir de 6 meses ja é recomendado fazer algum tipo de limpeza ou manutenção,
                                Veja alguns benefícios a seguir ao fazer realizar manutenção
                            </Subtitle>
                        </div>

                        <ul className="flex flex-col gap-8 md:gap-6">
                            <li className="flex items-center  gap-4 bg-neutral-800 p-4 rounded-lg text-neutral-500 font-medium">
                                <span className="text-sun-500">
                                    <BsCheck2Circle size={24}/>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>

                            <li className="flex items-center  gap-4 bg-neutral-800 p-4 rounded-lg text-neutral-500 font-medium">
                                <span className="text-sun-500">
                                    <BsCheck2Circle size={24}/>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>

                            <li className="flex items-center  gap-4 bg-neutral-800 p-4 rounded-lg text-neutral-500 font-medium">
                                <span className="text-sun-500">
                                    <BsCheck2Circle size={24}/>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>

                            <li className="flex items-center  gap-4 bg-neutral-800 p-4 rounded-lg text-neutral-500 font-medium">
                                <span className="text-sun-500">
                                    <BsCheck2Circle size={24}/>
                                </span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-full max-w-[1450px] min-h-screen mx-auto">
                <div className="w-full h-full py-24 px-6 flex flex-col gap-16">
                    <div className="w-full flex flex-col gap-4 md:text-center md:items-center md:justify-center">
                        <Title>Veja a diferença de um dos nossos projetos após a manutenção</Title>
                        <Subtitle>Arraste a bolinha laranja e veja o antes e o depois</Subtitle>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="relative w-full h-[60vh] flex items-center justify-center px-6">
                            <img
                                className="absolute w-full h-full object-cover"
                                src="/image1-slider-comparasion.png" 
                                alt="" 
                            />

                            <img
                                className="absolute w-full h-full object-cover clip"
                                src="/image2-slider-comparasion.png" 
                                alt=""
                                id="image_on_top"
                            />

                            <input
                                id="slider-comparasion"
                                type="range" 
                                className="relative w-full h-2 outline-none rounded-lg appearance-none cursor-pointer bg-transparent"
                                onInput={e => slideImageComparasion(e)}
                                min="0" 
                                max="100" 
                                value={slideValue}
                            />
                        </div>

                        <div className="flex justify-between text-neutral-200 font-medium text-md">
                            <span>Antes</span>
                            <span>Depois</span>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="w-full h-full max-w-[1450px] min-h-screen mx-auto flex items-center justify-center px-6">
                <div className="w-full h-full py-16 px-6 rounded-3xl bg-sun-500 md:px-12 lg:px-28">
                    <div className="w-full h-full flex flex-col gap-16">
                        <div className="text-2xl font-bold text-neutral-200 tracking-tight max-w-2xl md:text-3xl md:leading-tight">
                            <h1>
                                Ficou interessado?
                            </h1>
                            <h1>
                                coloque seu email abaixo 
                                que entraremos em contato ou clique no botão do whatsapp
                            </h1>
                        </div>

                        <form className="flex flex-col gap-8">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5 md:flex-row">

                                    <div className="w-full flex flex-col gap-1">
                                        <label className="block text-md font-semibold text-neutral-100 ml-1">Email</label>
                                        <input
                                            placeholder="jonhdoe@example.com"
                                            className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                                        />
                                    </div>

                                    <div className="w-full flex flex-col gap-1">
                                        <label className="block text-md font-semibold text-neutral-100 ml-1">Telefone</label>
                                        <input
                                            placeholder="jonhdoe@example.com"
                                            className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                                        />
                                    </div>

                                </div>

                                <div className="w-full flex flex-col gap-1">
                                    <label className="block text-md font-semibold text-neutral-100 ml-1">CEP</label>
                                    <input
                                        placeholder="jonhdoe@example.com"
                                        className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-1">
                                    <label className="block text-md font-semibold text-neutral-100 ml-1">label</label>
                                    <input
                                        placeholder="jonhdoe@example.com"
                                        className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full h-full flex items-end justify-end">
                                <button className="bg-neutral-300 px-8 py-2 rounded-md text-neutral-600 font-medium hover:bg-neutral-400 transition-all duration-300">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}