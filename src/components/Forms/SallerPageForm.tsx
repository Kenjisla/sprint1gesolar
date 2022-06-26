import classNames from "classnames";
import { ChangeEvent,  useState } from "react";

import { Input } from "./components/Input";
import { FaCheck } from "react-icons/fa";

import { BsClipboardPlus, BsFillPersonFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import axios from "axios";

interface FormData {
    amount: string;
    email: string;
    fileUpload: string;
    name: string;
    phoneNumber: string;
}

export function SallerPageForm() {
    const [currentSaller, setCurrentSaller] = useState('')
    const [fileToUpload, setFileToUpload] = useState('')

    const {
        register,
        handleSubmit
    } = useForm();

    const sallers = [
        { id: 'eliano-radio', name: 'saller', label: 'Eliano Santana', value: 'Eliano'},
        { id: 'tiago-radio', name: 'saller', label: 'Tiago Amorim', value: 'Tiago'},
        { id: 'ivan-radio', name: 'saller', label: 'Ivan', value: 'Ivan'},
        { id: 'lucas-radio', name: 'saller', label: 'Lucas Guedes', value: 'Lucas'},
        { id: 'larrisa-radio', name: 'saller', label: 'Larissa', value: 'Larissa'},
    ]
    
    function handleChangeSaller(event: ChangeEvent<HTMLInputElement>) {
        setCurrentSaller(event.target.value);
    }

    function onSubmit(formData: any) {

        const formatedFormdata = {
            saller: currentSaller,
            amount: formData.amount,
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            file: formData.fileToUpload[0],
            lp: 'saller'
        }

        axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', formatedFormdata)

        console.log(formatedFormdata)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex gap-16 items-start">
           <div className="w-full max-w-md flex flex-col py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
                <fieldset className="flex flex-col gap-12">
                    <div className="max-w-2xl flex flex-col gap-3 py-3 border-b border-neutral-600">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-neutral-700 p-3 rounded-full text-sun-500">
                                <BsFillPersonFill size={20} />
                            </span>

                            <legend className="text-2xl font-bold text-neutral-200 tracking-tight">Selecione o vendedor</legend>
                        </div>

                        <p className="text-base font-medium text-neutral-400 tracking-tight max-w-2xl">
                            Selecione o vendedor no qual os leads criados serão atribuido
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        {sallers.map(saller => {
                            const isInCurrentSaller = saller.value === currentSaller

                            return (
                                <div key={saller.id} className="flex items-center">
                                    <input
                                        type="radio"
                                        id={saller.id}
                                        name={saller.name}
                                        value={saller.value}
                                        onChange={event => handleChangeSaller(event)}
                                        className="hidden"
                                    />

                                    <label htmlFor={saller.id} className={classNames('flex items-center justify-between w-full max-w-[250px] px-6 py-3 border border-neutral-600 text-base font-medium text-neutral-500 rounded-lg', {
                                        'bg-sun-500 text-neutral-100' : isInCurrentSaller,
                                    })}>
                                        {saller.label}

                                        {isInCurrentSaller && <FaCheck />}
                                    </label>
                                </div>
                            )    
                        })}
                    </div>
                </fieldset>
            </div>

            {currentSaller !== '' && (
                <div className="w-full flex flex-col py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
                    <div className="flex flex-col gap-11">
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

                        </fieldset>

                        <div className="max-w-2xl flex flex-col gap-9">
                            <div className="">
                                <h1 className="text-lg font-bold text-neutral-200 tracking-tight sm:text-xl md:leading-tight">Informações do lead</h1>
                                <p className="text-neutral-400 font-medium">Preencha as informações abaixo</p>
                            </div>

                            <div className="flex flex-col gap-12">
                                <div className="w-full flex flex-col gap-8">
                                    <Input label="Endereço de email" {...register("email")}/>

                                    <Input label="Nome do cliente" {...register("name")}/>

                                    <Input label="Numero de telefone" {...register("phoneNumber") }/>

                                    <Input label="Valor da conta de luz" {...register("amount")} />
                                    
                                    <div className="flex flex-col gap-2 items-start">
                                        <label className="block text-sm font-semibold text-neutral-200 ml-1">Foto da conta de luz</label>

                                        <label
                                            className="relative cursor-pointer bg-neutral-600 rounded-md px-6 py-3 font-medium text-sun-500 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sun-500 focus-within:ring-offset-neutral-800"
                                        >
                                            <span>Upload a file</span>
                                            <input 
                                                id="file-upload"
                                                type="file" 
                                                className="sr-only"
                                                {...register("fileToUpload")}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="w-full h-full flex justify-end">
                                    <Button type="submit">
                                        Cadastar Lead
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}