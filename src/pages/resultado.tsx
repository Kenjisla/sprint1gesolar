import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCalculator } from "../hooks/useCalculator";

export default function Resultado() {
    const { calculatorResult } = useCalculator();

    if (calculatorResult === null) {
        return (
            <div className="w-full h-[80vh] flex items-center justify-center flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <span className="text-neutral-700 text-center text-2xl leading-tight font-semibold">
                        Não temos seus dados sobre sua conta de luz <span className="ml-2">:(</span>
                    </span>

                    <img
                        className="w-full max-h-72 opacity-50"
                        src="/not-found-calculator-data.svg" 
                        alt="" 
                    />
                </div>

                <Link href="/calculadora-de-energia-solar">
                    <a
                        className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-9 py-[6px] rounded-md shadow-sm text-base font-medium text-neutral-50 bg-sun-500 border border-sun-500/75 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200'
                    >
                        Simular meu sistema
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <>
            <div className="w-full bg-fixed bg-result_hero_image bg-no-repeat bg-center bg-cover h-[40vh]" />
                <div className="w-full max-w-[1450px] mx-auto py-24 px-6 flex flex-col gap-24">
                <div className="flex flex-col gap-5 max-w-3xl">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-neutral-200 text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl">
                            Bem vindo a geração de energia solar,
                        </h1>
                        <span className="text-sun-500 text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl">
                            {calculatorResult?.name}
                        </span>
                    </div>
                    
                    <p className="text-sm text-neutral-400 sm:text-base">
                        Abaixo estão os valores iniciais do seu sistema, 
                        agora é só aguardar o contato da nossa equipe que te apresentará um projeto detalhado.
                    </p>
                </div>

                <div className="flex flex-col gap-28">
                    <div className="grid grid-cols-1 grid-rows-auto gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
                        {calculatorResult.cardsData?.map(data => (
                            <div key={data.text} className="bg-neutral-800 w-full sm:max-w-[350px] h-60 px-8 flex flex-col justify-center gap-12 rounded-xl">
                                <span className="bg-neutral-700 text-sun-500 w-14 h-14 flex items-center justify-center rounded-full text-xl">
                                    {data.icon}
                                </span>
    
                                <div className="flex flex-col gap-1">
                                    <strong className="text-neutral-200 font-semibold text-xl">
                                        {data.text}
                                    </strong>
                                    <span className="text-lg text-sun-500 font-medium">
                                        {data.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col items-start justify-center gap-4 md:items-center md:flex-row">
                        <Link href="/">
                            <a
                                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-9 py-[6px] rounded-md shadow-sm text-base font-medium text-neutral-200  border border-neutral-700 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200'
                            >
                                Volar a pagina principal
                            </a>
                        </Link>

                        <Link href="/calculadora-de-energia-solar">
                            <a
                                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-9 py-[6px] rounded-md shadow-sm text-base font-medium text-neutral-50 bg-sun-500 border border-sun-500/75 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200'
                            >
                                Refazer calculo
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}