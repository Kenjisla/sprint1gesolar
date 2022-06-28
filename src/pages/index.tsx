import { ChangeEvent, useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import InputMask from 'react-input-mask';

import { HeroSection } from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { HomeObjectOne, HomeObjectThree, HomeObjectTwo } from "../components/InfoSection/data";
import { WhiteInput } from "../components/WhiteInput";

import { FaUser } from "react-icons/fa";
import classNames from "classnames";
import axios from "axios";

const WEBHOOK = process.env.WEBHOOK_URL

type FormValidationProps = {
  selectInputFieldOptions: RegisterOptions;
  nameInputFieldOptions: RegisterOptions;
  emailInputFieldOptions: RegisterOptions;
  phoneNumberInputFieldOptions: RegisterOptions;
  zipCodeInputFieldOptions: RegisterOptions;
  
}

export default function Home() {
  const selectData = [
    {
      id: 0,
      amount: 'Clique aqui e selecione o valor da sua conta de luz',
      defaultValue: true,
    },
    {
      id: 1,
      amount: 'R$ 200,00 - R$ 299,00'
    }
  ]

  const [selectValue, setSelectValue] = useState(selectData[0].amount)

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  
  const formValidation: FormValidationProps = {
    selectInputFieldOptions: {
      validate: value => value !== selectData[0].amount || 'Verifique se voce selecionou algum valor', 
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

  function onSubmit(data: any) {
    const formData = {...data, lp: 'primary'}

    axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', formData)
  }

  function updateSelectValue(event: ChangeEvent<HTMLSelectElement>) {
    setValue("select", event.target.value)
    setSelectValue(event.target.value)
    clearErrors("select")
  }

  return (
    <>
      <HeroSection 
        title="Energia solar para todos"
        subtitle="Produza sua própria energia trocando o custo da sua conta 
        de luz para pagar o investimento no sistema."
        buttonLabel="Começar agora"
        imgSrc="/hero-image.jpg"
      />

      <InfoSection {...HomeObjectOne}/>

      <div id='advantages' className="bg-neutral-100 h-full min-h-[75vh] w-full  flex items-center justify-center flex-col py-24 px-6">
        <div className="w-full max-w-[1450px]">
          <h1 className="text-neutral-600 mb-24 text-2xl leading-tight font-semibold md:text-center md:mb-28 md:text-2xl">
            Beneficios ao gerar sua própria energia
          </h1>

          <div className="grid grid-col-1 grid-rows-auto gap-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
            <div className="border-l border-sun-500 flex items-start justify-start flex-col px-6 md:py-2 md:px-0 md:border-b md:border-l-0 md:items-center md:justify-center">
              <div className='mb-8 flex items-start justify-start w-full h-36 md:max-w-full md:items-start md:justify-start'>
                  <img
                    className="h-full md:w-full"
                    src="/pig-money.svg"
                  />
              </div>

              <div className="flex flex-col gap-2 w-full h-full md:text-center">
                <p className="text-base font-semibold text-neutral-600">Reduza sua conta de luz em até</p>
                <span className="block text-4xl text-sun-500 font-semibold">95%</span>
              </div>
            </div>

            <div className="border-l border-sun-500 flex items-start justify-start flex-col px-6 md:py-2 md:px-0 md:border-b md:border-l-0 md:items-center md:justify-center">
              <div className='mb-8 flex items-start justify-start w-full h-36 md:max-w-full md:items-start md:justify-start'>
                  <img
                    className="h-full md:w-full"
                    src="/house.svg"
                  />
              </div>

              <div className="flex flex-col gap-2 w-full h-full md:text-center">
                <p className="text-base font-semibold text-neutral-600">
                  Valorize seu patrimônio em aproximadamente
                </p>
                <span className="block text-4xl text-sun-500 font-semibold">
                  10%
                </span>
              </div>
            </div>

            <div className="border-l border-sun-500 flex items-start justify-start flex-col px-6 md:py-2 md:px-0 md:border-b md:border-l-0 md:items-center md:justify-center">
              <div className='mb-8 flex items-start justify-start w-full h-36 md:max-w-full md:items-start md:justify-start'>
                  <img
                    className="h-full md:w-full"
                    src="/payback.svg"
                  />
              </div>

              <div className="flex flex-col gap-2 w-full h-full md:text-center">
                <p className="text-base font-semibold text-neutral-600">
                  O retorno do seu investimento é em média de
                </p>
                <span className="block text-4xl text-sun-500 font-semibold">
                  5 anos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='advantages' className="bg-neutral-900 h-full min-h-[75vh] w-full flex items-center justify-center flex-col py-24 px-6">
        <div className="w-full max-w-[1450px]">
          <h1 className="text-neutral-200 mb-24 text-2xl leading-tight font-semibold md:text-center md:mb-28 md:text-2xl">
              Confira o passo a passo para aquisição do seu sistema
          </h1>

          <div className="grid grid-col-1 grid-rows-auto gap-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
            <div className="flex items-start justify-start flex-col">
              <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 p-8 rounded-2xl">
                <div>
                  <span className="text-lg bg-neutral-700 w-10 h-10 flex items-center justify-center text-neutral-200 rounded-full font-medium">
                    1
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <strong className="block text-2xl text-sun-500 font-semibold">
                    Compra Certa
                  </strong>
                  <p className="text-base font-semibold text-neutral-300">
                    Faça a simulação de parcelas que encaixe no valor atual da sua 
                    conta de energia e prepara-se para economizar e valorizar o seu patrimônio
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-start flex-col">
              <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 p-8 rounded-2xl">
                <div>
                  <span className="text-lg bg-neutral-700 w-10 h-10 flex items-center justify-center text-neutral-200 rounded-full font-medium">
                    2
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <strong className="block text-2xl text-sun-500 font-semibold">
                    Fique Tranquilo
                  </strong>
                  <p className="text-base font-semibold text-neutral-300">
                    Para sua comodidade, nós executaremos o serviço de instalação 
                    e cuidaremos de todo o processo desde o projeto até a homologação junto à concessionária de energia.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-start flex-col">
              <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 p-8 rounded-2xl">
                <div>
                  <span className="text-lg bg-neutral-700 w-10 h-10 flex items-center justify-center text-neutral-200 rounded-full font-medium">
                    3
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <strong className="block text-2xl text-sun-500 font-semibold">
                    Bônus Especial
                  </strong>
                  <p className="text-base font-semibold text-neutral-300">
                    Olha que legal, instalamos o sistema de energia solar e você 
                    poderá começar a pagar com o financiamento após 150 dias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-neutral-200 min-h-[800px] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col w-full h-full px-6 md:py-24 md:px-4">
          <h1 className="text-neutral-600 mb-12 text-3xl leading-tight font-semibold md:text-center md:mb-16 md:text-4xl">
            Calcular sistema
          </h1>

          <form 
            onSubmit={handleSubmit(onSubmit)} 
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
                    {selectData.map(item => {
                      return (
                        <option 
                          disabled={item.defaultValue} 
                          key={item.id} 
                          className={classNames('', {
                            'hidden' : item.defaultValue
                          })}
                        >
                          {item.amount}
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
        </div>
      </div>

      <InfoSection {...HomeObjectTwo}/>


      <InfoSection {...HomeObjectThree}/>
    </>
  );
}