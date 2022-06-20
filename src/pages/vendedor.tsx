import { BsFillPersonFill } from "react-icons/bs";

export default function Vendedor() {
    return (
        <div className="w-full h-full min-h-[calc(100vh-92px)] max-w-[1450px] px-6 mx-auto flex items-center justify-center">
            <form 
                className="w-full max-w-5xl flex flex-col py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800"
            >
                <div className="flex flex-col gap-6">
                    <fieldset className="flex flex-col gap-4">
                        <div className="max-w-xl flex flex-col gap-3 py-3 border-b border-neutral-600">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center bg-neutral-700 p-3 rounded-full text-sun-500">
                                    <BsFillPersonFill size={20} />
                                </span>

                                <legend className="text-xl font-bold text-neutral-200 tracking-tight sm:text-3xl lg:text-4xl">Selecione o vendedor</legend>
                            </div>

                            <p className="text-base font-medium text-neutral-400 tracking-tight max-w-2xl sm:text-lg">
                                Selecione o vendedor no qual os leads criados serão atribuido
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-4 px-3 py-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="focus:ring-sun-500 h-5 w-5 text-sun-500 border-neutral-500"
                                />
                                <label className="ml-3 block text-base font-medium text-neutral-500">
                                    Eliano Santana
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="focus:ring-sun-500 h-5 w-5 text-sun-500 border-neutral-500"
                                />
                                <label className="ml-3 block text-base font-medium text-neutral-500">
                                    Tiago Amorim
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="focus:ring-sun-500 h-5 w-5 text-sun-500 border-neutral-500"
                                />
                                <label className="ml-3 block text-base font-medium text-neutral-500">
                                    Eliano Santana
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="focus:ring-sun-500 h-5 w-5 text-sun-500 border-neutral-500"
                                />
                                <label className="ml-3 block text-base font-medium text-neutral-500">
                                    Eliano Santana
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="flex px-3 py-2">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-7 py-2  border border-transparent shadow-sm text-sm font-medium rounded-md text-neutral-50 bg-sun-500 hover:bg-amber-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-700 focus:ring-amber-500 transition-colors"
                        >
                            Proximo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}