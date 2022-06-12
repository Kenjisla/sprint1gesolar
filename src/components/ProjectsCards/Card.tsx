import { WorkSummary } from ".";

interface CardProps {
    image: {
        src: string;
        alt: string;
    }
    values: WorkSummary;
}

export function Card({image, values}: CardProps) {
    return (
        <div className="w-full max-w-[600px] h-[500px] bg-neutral-900 rounded-md">
            <div className="flex flex-col h-full">
            <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-[300px] object-cover rounded-t-md"
            />

            <div className="h-full flex flex-col justify-center gap-3 px-4 lg:px-6">
                <h1 className="font-semibold text-lg text-neutral-100 tracking-wide">{values.typeOfWork}</h1>

                <ul className="flex flex-col gap-[0.15rem]">
                <li className="text-neutral-500 font-medium text-sm">
                    Economia anual: <span className="ml-2 tracking-normal text-sun-500">{values.annualSavings}</span>
                </li>
                <li className="text-neutral-500 font-medium text-sm">
                    O investimento retorna em: <span className="ml-2 tracking-normal text-sun-500">{values.paybackTime}</span>
                </li>
                <li className="mt-1 gap-1 flex flex-col text-neutral-500 font-medium text-sm sm:flex-row sm:gap-3">Conta de luz:
                    <div className="flex itemx-center gap-3">
                    <span>Antes: <span className="text-sun-500">{values.generalSavings.before}</span></span>
                    <span>Hoje: <span className="text-sun-500">{values.generalSavings.after}</span></span>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    )
}