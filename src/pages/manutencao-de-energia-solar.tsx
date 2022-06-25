import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "../components/Button";
import { MaintenancePageForm } from "../components/Forms/MaintenancePageForm";
import { HeroSection } from "../components/HeroSection";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";

export default function Servicing() {

    return (
        <>
            <HeroSection
                title="Melhor eficiencia e limpeza maxima"
                subtitle="Fazemos a manutenção das suas placas, pra voce ter sempre a 
                melhor peformace e estética do seu sistema"
                buttonLabel="Eu quero"
                imgSrc="/manutencao-hero-image.jpg"
            />
            
            <div className="w-full h-full max-w-[1450px] min-h-screen mx-auto flex items-center">
                <div className="w-full h-full flex flex-col-reverse gap-16 py-24 px-6 xl:flex-row">
                    <div className="flex items-center justify-center">
                        <img
                            className="w-full h-[400px] lg:h-[580px] object-cover"
                            src="/servicing.jpg" 
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

                    <div className="relative w-full h-[60vh] flex items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src="/before-after.jpg" 
                            alt="" 
                        />
                    </div>
                </div>
            </div>
            

            <div className="w-full h-full max-w-[1450px] mx-auto flex items-center justify-center px-6 py-24">
                <div className="w-full h-full py-16 px-6 rounded-3xl bg-sun-500 md:px-12 lg:px-20">
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

                        <MaintenancePageForm />
                    </div>
                </div>
            </div>
        </>
    )
}