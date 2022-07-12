import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import { WhatsappButton } from "../components/WhatsappButton";

import { CalculatorPageForm } from "../components/Forms/CalculatorPageForm";

export default function Calculadora() {

    return (
        <div className="w-full h-full flex flex-col xl:flex-row xl:max-h-100vh">
            <div className="relative">
                <img
                    className="w-full h-[50vh] xl:w-[calc(100vw-500px)] xl:h-[calc(100vh-92px)] object-cover"
                    src="/calculadora-hero-image.png" 
                    alt="Imagem de uma casa com energia solar"
                />

                <div className="absolute w-full h-full inset-0 z-0 bg-gradient-to-b xl:bg-gradient-to-r from-neutral-900/25 to-neutral-900"/>
            
                <div className="absolute w-full h-full inset-0 z-1 flex items-center justify-center">
                    <p className="max-w-lg px-6 text-xl text-neutral-200 font-semibold text-start md:text-2xl xl:text-center">
                        Inicie agora o projeto para ter a energia solar e economizar até 95% na sua conta de luz.
                    </p>
                </div>
            </div>

            <div className="w-full h-full px-6 py-12 flex flex-col items-center justify-center gap-12 md:gap-16 xl:py-0 xl:min-h-[calc(100vh-92px)] bg-neutral-900">
                <div className="h-full mx-auto flex flex-col items-start justify-center gap-1 xl:gap-2 sm:items-center sm:text-center">
                    <Title>Calcule seu sistema</Title>

                    <Subtitle>
                        Insira os dados abaixo e faça a simulação online do seu sistema
                    </Subtitle>
                </div>

                <CalculatorPageForm />
            </div>

            <WhatsappButton />
        </div>
    )
}