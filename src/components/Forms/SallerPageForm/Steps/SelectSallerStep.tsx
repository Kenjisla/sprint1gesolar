import { ChangeEvent } from "react";
import { BsFillPersonFill } from "react-icons/bs";

interface SelectSallerStepProps {
    saller: string;
    onChangeRadioValue: (event: ChangeEvent<HTMLInputElement>) => void;
    onButtonClick: () => void;
}

export function SelectSallerStep({ saller, onChangeRadioValue, onButtonClick }: SelectSallerStepProps) {
    const sallers = [
        { id: 'eliano-radio', name: 'saller', label: 'Eliano Santana', value: 'Eliano'},
        { id: 'tiago-radio', name: 'saller', label: 'Tiago Amorim', value: 'Tiago'},
        { id: 'ivan-radio', name: 'saller', label: 'Ivan', value: 'Ivan'},
        { id: 'lucas-radio', name: 'saller', label: 'Lucas Guedes', value: 'Lucas'},
        { id: 'larrisa-radio', name: 'saller', label: 'Larissa', value: 'Larissa'},
    ]
    
    const sallerHasBeenSelected = saller === '';

    return (
        <div className="flex flex-col gap-6">
            <fieldset className="flex flex-col gap-4">
                <div className="max-w-2xl flex flex-col gap-3 py-3 border-b border-neutral-600">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center bg-neutral-700 p-3 rounded-full text-sun-500">
                            <BsFillPersonFill size={20} />
                        </span>

                        <legend className="text-2xl font-bold text-neutral-200 tracking-tight sm:text-3xl lg:text-4xl">Selecione o vendedor</legend>
                    </div>

                    <p className="text-base font-medium text-neutral-400 tracking-tight max-w-2xl sm:text-lg">
                        Selecione o vendedor no qual os leads criados serão atribuido
                    </p>
                </div>
                
                <div className="flex flex-col gap-4 px-3 py-2">
                    {sallers.map(saller => (
                        <div key={saller.id} className="flex items-center">
                            <input
                                type="radio"
                                id={saller.id}
                                name={saller.name}
                                value={saller.value}
                                onChange={event => onChangeRadioValue(event)}
                                className="focus:ring-sun-500 h-5 w-5 text-sun-500 border-neutral-500"
                            />
                            <label htmlFor={saller.id} className="ml-3 block text-base font-medium text-neutral-500">
                                {saller.label}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>

            <div className="flex px-3 py-2">
                <button
                    type="button"
                    disabled={sallerHasBeenSelected}
                    onClick={onButtonClick}
                    className="inline-flex items-center justify-center px-7 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-neutral-50 bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-700 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-amber-500 transition-colors"
                >
                    Proximo
                </button>
            </div>
        </div>
    )
}