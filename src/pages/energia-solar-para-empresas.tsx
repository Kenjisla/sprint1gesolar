import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import { WhatsappButton } from "../components/WhatsappButton";

import { HeroSection } from "../components/HeroSection";
import { HiTrendingUp } from "react-icons/hi";

export default function Calculadora() {

    return (
        <>
            <HeroSection 
                title="Energia solar para empresas"
                subtitle="lorem ipsum dolor sit amet, consectetur adip"
                isExternalLink
                buttonLabel="Fale conosco"
                buttonLink="#"
                imgSrc="company-hero-image.jpeg"
            />

            <div className="w-full min-h-[600px] h-full max-w-[1450px] mx-auto flex items-center flex-col">
                <Title>O que mais vale a pena?</Title>
                <Subtitle>valora asjsam ajsajdmas </Subtitle>
                <div className="w-full h-full px-6 py-16 flex flex-col items-start gap-6 xl:items-center xl:justify-center xl:flex-row ">
                    <div className="w-full">
                        <div className="w-full max-w-[650px] h-[250px] bg-teal-500"/>

                        <span>antes - 950$</span>
                        <strong>depois - 75$</strong>
                    </div>

                    <div className="w-full">
                        <div className="w-full max-w-[650px] h-[250px] bg-teal-500"/>


                        <span>antes - 950$</span>
                        <strong>depois - 75$</strong>
                    </div>

                    <div className="w-full">
                        <div className="w-full max-w-[650px] h-[250px] bg-teal-500"/>


                        <span>antes - 950$</span>
                        <strong>depois - 75$</strong>
                    </div>
                </div>
            </div>

            <div className="w-full h-full max-w-[1450px] mx-auto flex items-center">
                <div className="w-full h-full flex flex-col gap-16 py-12 px-6 xl:flex-row">
                    <div className="flex flex-col gap-16">
                        <div className=" h-full flex flex-col gap-4 xl:items-center xl:justify-center ">
                            <Title>Quando eu devo fazer a manutenção?</Title>

                            <Subtitle>
                                A partir de 6 meses ja é recomendado fazer algum tipo de limpeza ou manutenção.
                                Benefícios ao realizar a manutenção do sistema:
                            </Subtitle>
                        </div>
                    </div>

                    <div className="flex items-center justify-center overflow-hidden rounded-md">
                        <img
                            className="w-full h-[400px] lg:h-[580px] object-cover"
                            src="/servicing.jpg" 
                            alt="" 
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-full max-w-[1450px] mx-auto flex items-center">
                <div className="w-full h-full flex flex-col gap-16 py-24 px-6">
                    <div className=" bg-neutral-800 px-8 py-12 rounded-md shadow-lg">
                        <div className="flex items-center gap-16">
                            <HiTrendingUp size={58} fontWeight="bold" color="f9a826"/>

                            <div className="flex flex-col gap-4">

                                <Title>Quando eu devo fazer a manutenção?</Title>

                                <Subtitle>
                                    A partir de 6 meses ja é recomendado fazer algum tipo de limpeza ou manutenção.
                                    Benefícios ao realizar a manutenção do sistema:
                                </Subtitle>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full max-w-[1450px] mx-auto px-6 py-8 flex items-center justify-center">
                <div className="w-[500px] h-[250px] bg-teal-500">
                    form
                </div>
            </div>
        </>
    )
}