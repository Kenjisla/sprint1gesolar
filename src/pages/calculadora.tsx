import Image from "next/image";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";

import { CalculatorPageForm } from "../components/Forms/CalculatorPageForm";

export default function Calculadora() {

    return (
        <div className="flex flex-col xl:flex-row">
            <div className="relative">
                <img
                    className="w-full h-[50vh] xl:w-[calc(100vw-500px)] xl:h-[calc(100vh-92px)] object-cover"
                    src="/calculadora-hero-image.png" 
                    alt="Imagem de uma casa com energia solar"
                />

                <div className="absolute w-full h-full inset-0 z-0 bg-gradient-to-b from-neutral-900/25 to-neutral-900 xl:bg-gradient-to-r from-neutral-900/25 to-neutral-900"/>
            
                <div className="absolute w-full h-full inset-0 z-1 flex items-center justify-center">
                    <p className="max-w-lg px-6 text-xl text-neutral-200 font-medium text-start md:text-2xl xl:text-center">
                        Venha fazer parte da gereção de energia solar e economize 
                        mais de 80% na sua conta de luz
                    </p>
                </div>
            </div>

            <div className="w-full h-full px-6 py-12 flex flex-col items-center justify-center gap-12 md:gap-16 xl:py-0 xl:min-h-[calc(100vh-92px)] bg-neutral-900">
                <div className="h-full mx-auto flex flex-col items-start justify-center gap-1 xl:gap-2 sm:items-center sm:text-center">
                    <Title>Calcule seu sistema</Title>

                    <Subtitle>
                        Insira alguns dos seus dados abaixo e faça a simulação online do seu sistema
                    </Subtitle>
                </div>

                <CalculatorPageForm />
            </div>
        </div>
    )
}