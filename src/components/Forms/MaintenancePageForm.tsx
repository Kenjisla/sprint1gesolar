export function MaintenancePageForm() {
    return (
        <form className="flex flex-col gap-8 items-end xl:flex-row">
            <div className="w-full grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-6 md:grid-row-auto lg:grid-cols-12">
                <div className="w-full flex flex-col gap-1 col-span-full md:col-span-4">
                    <label className="block text-md font-semibold text-neutral-100 ml-1">Email</label>
                    <input
                        placeholder="jonhdoe@example.com"
                        className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                    />
                </div>

                <div className="w-full flex flex-col gap-1 col-span-full md:col-span-2 lg:col-span-3">
                    <label className="block text-md font-semibold text-neutral-100 ml-1">Telefone</label>
                    <input
                        placeholder="(00) 00000-0000)"
                        className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                    />
                </div>


                <div className="w-full flex flex-col gap-1 col-span-full md:col-span-3 lg:col-span-2">
                    <label className="block text-md font-semibold text-neutral-100 ml-1">CEP</label>
                    <input
                        placeholder="00000-000"
                        className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                    />
                </div>

                <div className="w-full flex flex-col gap-1 col-span-full md:col-span-3 lg:col-span-3">
                    <label className="block text-md font-semibold text-neutral-100 ml-1">Quantidade de placas</label>
                    <input
                        placeholder="15 placas"
                        className="mt-1 relative w-full bg-neutral-200 text-neutral-600 font-normal rounded-md shadow-sm px-6 py-3 text-left cursor-default sm:text-sm hover:bg-neutral-300 transition-all duration-500"
                    />
                </div>
            </div>

            <div className="flex items-end justify-end">
                <button className="bg-neutral-300 px-8 py-2 rounded-md text-neutral-600 font-medium hover:bg-neutral-400 transition-all duration-300">
                    Enviar
                </button>
            </div>
        </form>
    );
}