import classNames from "classnames";
import { ChangeEvent,  useState } from "react";

import { BlackInputMaskComponent } from "../Input/InputMask/BlackInputMaskComponent";
import { BlackInput } from "../Input/BlackInput";
import { Button } from "../Button";

import { BsClipboardPlus, BsFillPersonFill } from "react-icons/bs";
import { RegisterOptions, useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";

import axios from "axios";

type FormValidationProps = {
    radioInputFieldOptions: RegisterOptions;
    nameInputFieldOptions: RegisterOptions;
    emailInputFieldOptions: RegisterOptions;
    phoneNumberInputFieldOptions: RegisterOptions;
    zipCodeInputFieldOptions: RegisterOptions;
}
  
interface FormData {
    amount: string;
    email: string;
    fileUpload: string;
    name: string;
    phoneNumber: string;
}

export function SallerPageForm() {
    const [currentSaller, setCurrentSaller] = useState('')
    const [amountFormatted, setAmountFormatted] = useState('')
    const [fileToUpload, setFileToUpload] = useState('')

    const sallers = [
        { id: 'eliano-radio', name: 'saller', label: 'Eliano Santana', value: 'Eliano'},
        { id: 'tiago-radio', name: 'saller', label: 'Tiago Amorim', value: 'Tiago'},
        { id: 'ivan-radio', name: 'saller', label: 'Ivan', value: 'Ivan'},
        { id: 'lucas-radio', name: 'saller', label: 'Lucas Guedes', value: 'Lucas'},
        { id: 'larrisa-radio', name: 'saller', label: 'Larissa', value: 'Larissa'},
    ]
    
    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors }
    } = useForm();

    const sallerIsEmpty = !!errors.saller_radio

    const formValidation: FormValidationProps = {
        radioInputFieldOptions: {
          required: 'Selecione um vendedor para proseguir no cadastro',
        },
        nameInputFieldOptions: {
          required: "Este campo é obrigatorio. "
        },
        emailInputFieldOptions: {
          required: "Este campo é obrigatorio. ",
          pattern: {
            value: /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
            message: 'insira um formato de email valido' 
          }
        },
        phoneNumberInputFieldOptions: {
          required: "Este campo é obrigatorio. ",
        },
        zipCodeInputFieldOptions: {
          required: "Este campo é obrigatorio. ",
        },
    }

    function handleChangeSaller(event: ChangeEvent<HTMLInputElement>) {
        setValue("saller_radio", event.target.value)
        setCurrentSaller(event.target.value);
        clearErrors("saller_radio")
    }

    function formatAmount(event: any) {
        const onChangeValue = Number(event.target.value)
        const valueFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(onChangeValue)

        setAmountFormatted(valueFormatted)
    }

    function onFormSubmit(formData: any) {

        const formatedFormdata = {
            saller: currentSaller,
            amount: formData.amount,
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            lp: 'saller'
        }

        axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', formatedFormdata)

        console.log(formatedFormdata)
    };

    const onError = (error: any) => console.log(error)

    return (
        <form onSubmit={handleSubmit(onFormSubmit, onError)} className="w-full h-full flex gap-16 items-start">
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
                    
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            {sallers.map(saller => {
                                const isInCurrentSaller = saller.value === currentSaller

                                return (
                                    <div key={saller.id} className="flex items-center">
                                        <input
                                            className="hidden"
                                            type="radio"
                                            id={saller.id}
                                            {...register("saller_radio", formValidation.radioInputFieldOptions)}
                                            value={saller.value}
                                            onChange={e => handleChangeSaller(e)}
                                        />

                                        <label htmlFor={saller.id} className={classNames('border-neutral-600 flex items-center justify-between w-full max-w-[250px] px-6 py-3 border text-base font-medium text-neutral-500 rounded-lg', {
                                            'bg-sun-500 text-neutral-100' : isInCurrentSaller,
                                            'border-red-400' : sallerIsEmpty
                                        })}>
                                            {saller.label}

                                            {isInCurrentSaller && <FaCheck />}
                                        </label>
                                    </div>
                                )    
                            })}
                        </div>

                        {sallerIsEmpty && (
                            <div>
                                <span className="block text-sm font-medium text-red-400">
                                    {errors.saller_radio.message}
                                </span>
                            </div>
                        )}
                    </div>
                </fieldset>
            </div>

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

                        <div className="relative max-w-2xl flex flex-col gap-9">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-lg font-bold text-neutral-200 tracking-tight sm:text-xl md:leading-tight">Informações do lead</h1>
                                <p className="text-neutral-400 font-medium">Preencha as informações abaixo</p>
                            </div>

                            <div className="flex flex-col gap-12">
                                <div className="w-full flex flex-col gap-8">
                                    <BlackInput 
                                        label="Endereço de email"
                                        error={errors.email}
                                        {...register("email", formValidation.emailInputFieldOptions)}
                                    />

                                    <BlackInput 
                                        label="Nome do cliente"
                                        error={errors.name}
                                        {...register("name", formValidation.nameInputFieldOptions)}
                                    />

                                    <BlackInputMaskComponent
                                        label="Telefone celular"
                                        mask="99 99999-9999"
                                        error={errors.phoneNumber}
                                        {...register("phoneNumber", formValidation.phoneNumberInputFieldOptions)}
                                    />

                                    <BlackInput 
                                        label="Valor da conta de luz"
                                        {...register("amount")}
                                    />
                                    
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
        </form>
    );
}