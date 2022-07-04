import { ChangeEvent, useState } from "react";

import { WhiteInput } from "../Input/WhiteInput";

import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import axios from "axios";

import { FaUser } from "react-icons/fa";

import classNames from "classnames";
import { useCalculator } from "../../hooks/useCalculator";
import { useRouter } from "next/router";

type FormValidationProps = {
    selectInputFieldOptions: RegisterOptions;
    nameInputFieldOptions: RegisterOptions;
    emailInputFieldOptions: RegisterOptions;
    phoneNumberInputFieldOptions: RegisterOptions;
    zipCodeInputFieldOptions: RegisterOptions;
    
}

export function HomePageFormWhite() {
  const [selectValue, setSelectValue] = useState('Clique e selecione o valor da conta de luz')
  const { selectRange, calculateByRange } = useCalculator()

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  
  const formValidation: FormValidationProps = {
    selectInputFieldOptions: {
      validate: value => value !== 'Clique e selecione o valor da conta de luz' || 'Verifique se voce selecionou algum valor',
      setValueAs: value => value.replace('R$ ', '').replace(' - ', '>' )
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

  function updateSelectValue(event: ChangeEvent<HTMLSelectElement>) {
    setValue("select", event.target.value)
    setSelectValue(event.target.value)
    clearErrors("select")
  }

  function onFormSubmit(data: any) {
    const formData = {...data, lp: 'primary'}

    calculateByRange({
      name: data.name,
      rangeSelected: data.select
    })

    router.push('/resultado')
    
  }

  return (
      <form 
          onSubmit={handleSubmit(onFormSubmit)} 
          className="w-full max-w-lg flex flex-col items-center justify-center gap-8"
        >
          
          <div className="w-full flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">
                Valor da sua conta de luz
              </span>

              <div className="flex flex-col gap-3">
                <select
                  value={selectValue}
                  className={classNames('appearance-none w-full overflow-hidden max-w-lg h-12 bg-neutral-300 text-neutral-600 font-medium rounded-3xl px-4', {
                    'focus:outline-none focus:ring-1 ring-offset-2 ring-offset-neutral-300 focus:ring-sun-500 focus:border-sun-500' : !errors.select,
                    'border-red-500 focus:outline-none focus:ring-1 ring-offset-2 ring-offset-neutral-300 focus:ring-red-500 focus:border-red-500' : errors.select,
                  })}
                  {...register("select", formValidation.selectInputFieldOptions)}
                  onChange={updateSelectValue}
                >
                  <option 
                    disabled={true} 
                    className={classNames('', {
                      'hidden' : true
                    })}
                  >
                    Clique e selecione o valor da conta de luz
                  </option>
                  {selectRange.map(item => {
                    return (
                      <option key={item}>
                        {item}
                      </option>
                    )
                  })}
                </select>
                
                {!!errors.select && <span className="ml-2 block text-xs font-medium text-red-400">{errors.select.message}</span>}
              </div>
            </div>

            <WhiteInput
              label="Nome"
              icon={<FaUser />}
              error={errors.name}
              {...register("name", formValidation.nameInputFieldOptions)}
            />

            <WhiteInput
              label="Email"
              icon={<FaUser />}
              error={errors.email}
              {...register("email", formValidation.emailInputFieldOptions)}
            />

            <div className="flex flex-col gap-2">
              <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">
                Telefone celular
              </span>

              <div className="flex flex-col gap-3">
                  <label className="relative w-full flex flex-col gap-2 overflow-hidden max-w-lg h-12 bg-neutral-300 rounded-3xl">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                          <FaUser />
                      </span>

                      <InputMask
                        mask="99 99999-9999"
                        // @ts-ignore:next-line
                        maskChar={null}
                        className={(classNames('text-neutral-600 font-medium placeholder:text-neutral-500 block bg-transparent w-full h-full border rounded-3xl pl-11 pr-3 shadow-sm', {
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !errors.phoneNumber,
                            'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : errors.phoneNumber,
                        }))}
                        placeholder="Digite seu nome" 
                        type="text"
                        {...register('phoneNumber', formValidation.phoneNumberInputFieldOptions)}
                      />

                  </label>

                  {!!errors.phoneNumber && <span className="block ml-1 text-xs font-medium text-red-400">{errors.phoneNumber.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">
                CEP
              </span>

              <div className="flex flex-col gap-3">
                  <label className="relative w-full flex flex-col gap-2 overflow-hidden max-w-lg h-12 bg-neutral-300 rounded-3xl">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                          <FaUser />
                      </span>

                      <InputMask
                        mask="99999-999"
                        // @ts-ignore:next-line
                        maskChar={null}
                        className={(classNames('text-neutral-600 font-medium placeholder:text-neutral-500 block bg-transparent w-full h-full border rounded-3xl pl-11 pr-3 shadow-sm', {
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !errors.phoneNumber,
                            'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : errors.phoneNumber,
                        }))}
                        placeholder="Digite seu nome" 
                        type="text"
                        {...register('zipCode', formValidation.zipCodeInputFieldOptions)}
                      />

                  </label>

                  {!!errors.phoneNumber && <span className="block ml-1 text-xs font-medium text-red-400">{errors.phoneNumber.message}</span>}
              </div>
            </div>

          </div>

          <div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center px-8 py-2 rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-200 focus:ring-amber-500 transition-colors duration-200"
            >
              Simular online
            </button>
          </div>
        </form>
  )
}