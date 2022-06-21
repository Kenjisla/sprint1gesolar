import { BsClipboardPlus, BsFillPersonFill } from "react-icons/bs";
import { MdClose } from 'react-icons/md'
import { Input } from "../../components/Input";

interface CreateLeadStepProps {
    saller: string;
}

export function CreateLeadStep({ saller }: CreateLeadStepProps) {
    return (
        <div className="flex flex-col gap-11 max-h-[550px] overflow-y-scroll">
            <fieldset className="flex flex-col">
                <div className="max-w-2xl flex flex-col gap-3 py-3 border-b border-neutral-600">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center bg-neutral-700 p-3 rounded-full text-sun-500">
                            <BsClipboardPlus size={20}/>
                        </span>

                        <legend className="text-2xl font-bold text-neutral-200 tracking-tight sm:text-3xl lg:text-4xl">Criar Lead</legend>
                    </div>

                    <p className="text-base font-medium text-neutral-400 tracking-tight max-w-2xl sm:text-lg">
                        Selecione o vendedor no qual os leads criados serão atribuido
                    </p>
                </div>

                <div className="w-full max-w-2xl flex flex-col gap-6 py-6 px-1 border-b border-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                    <div className="flex flex-col gap-3">
                        <strong className="text-neutral-200 font-bold -tracking-normal">Vendedor</strong>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center bg-neutral-700 p-2 rounded-full justify-center text-sun-500">
                                <BsFillPersonFill size={16}/>
                            </span>

                            <span className="text-neutral-400 font-medium">Eliano Santana</span>
                        </div>
                    </div>

                    <div>
                        <button 
                            type="button"
                            className="flex items-center justify center gap-3 py-2 px-3 text-neutral-400 border border-neutral-700 font-semibold rounded-md hover:bg-neutral-700 transition-all duration-200"
                        >
                            trocar vendedor
                            <MdClose size={16}/>
                        </button>
                    </div>
                </div>
            </fieldset>

            <div className="max-w-2xl flex flex-col gap-9">
                <div className="">
                    <h1 className="text-lg font-bold text-neutral-200 tracking-tight sm:text-xl md:leading-tight">Informações do lead</h1>
                    <p className="text-neutral-400 font-medium">Preencha as informações abaixo</p>
                </div>

                <div className="w-full flex flex-col gap-8">
                    <Input name="email" label="Email"/>

                    <Input name="email" label="Email"/>

                    <Input name="email" label="Email"/>

                    <Input name="email" label="Email"/>

                        <input type="file" />
                    
                    <div className="flex flex-col gap-2">
                        <label className="block text-sm font-semibold text-neutral-200 ml-1">Foto da conta de luz</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}