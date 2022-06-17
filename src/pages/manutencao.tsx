import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "../components/Button";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";

export default function Servicing() {
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
        </>
    )
}