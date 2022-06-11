import { FormEvent, useState } from 'react';

import axios from 'axios';
import { useForm, RegisterOptions } from 'react-hook-form'

import { Button } from '../Button';
import { Select } from './Select';
import { Input } from './Input';


type FormValidationProps = {
  selectInputFieldOptions: RegisterOptions;
  nameInputFieldOptions: RegisterOptions;
  emailInputFieldOptions: RegisterOptions;
  phoneNumberInputFieldOptions: RegisterOptions;
  zipCodeInputFieldOptions: RegisterOptions;
  
}

export type SelectData = {
  id: number,
  amount: string;
  defaultValue?: boolean;
}

export function Form() {
  const [selectValue, setSelectValue] = useState<SelectData>({
    id: 0,
    amount: 'Selecione o valor da sua conta de luz',
    defaultValue: true
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues
  } = useForm();
  
  const formValidation: FormValidationProps = {
    selectInputFieldOptions: {
      validate: value => value !== undefined || 'Verifique se voce selecionou algum valor', 
    },
    nameInputFieldOptions: {
      required: "Este campo é obrigatorio. "
    },
    emailInputFieldOptions: {
      required: "Este campo é obrigatorio. "
    },
    phoneNumberInputFieldOptions: {
      required: "Este campo é obrigatorio. ",
    },
    zipCodeInputFieldOptions: {
      required: "Este campo é obrigatorio. ",
    },
  }

  const onSubmit = (data: any) => {
    console.log(data)
    
  }

  const onError = (error: any) => {
    console.log(error)
  }
  
  async function createLead(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', 
      {
        value: 250,
        zip_code: '123',
        name: 'leonardo',
        phone_number: '11972202384',
        email: 'emailteste@teste.com'
      })

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  function formaterZipCodeInputValue() {
    const zipCodeInputValue = getValues("zip_code")
    const formatToString = zipCodeInputValue.toString()

    const formatValue = formatToString.replace(/^(\d{5})(\d)/, "$1-$2")

    setValue("zip_code", formatValue)
    
  }

  function formaterPhoneNumberInputValue() {
    const zipCodeInputValue = getValues("phone_number")
    const formatToString = zipCodeInputValue.toString()

    const formatValue = formatToString.replace(/^(\d{2})(\d{5})(\d{4})/, "$1 $2-$3")

    setValue("phone_number", formatValue)
    
  }

  function updaterSelectValue(value: SelectData) {
    setValue("select", value.amount)
    setSelectValue(value)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit, onError)} className="w-full max-w-[750px] flex flex-col gap-12 py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
          <div className="w-full">
              <div className="flex flex-col gap-8">
                  <Select setSelectValue={updaterSelectValue} selectValue={selectValue} error={errors.select} {...register('select', formValidation.selectInputFieldOptions)}/>

                  <Input label="Nome" error={errors.name} {...register("name", formValidation.nameInputFieldOptions)} />

                  <Input label="Endereço de email" error={errors.email} {...register("email", formValidation.emailInputFieldOptions)} />

                  <Input label="Numero de celular" error={errors.phone_number} {...register("phone_number", formValidation.phoneNumberInputFieldOptions)} onKeyUp={formaterPhoneNumberInputValue} inputLength={16}/>
                
                  <Input label="CEP" error={errors.zip_code} {...register('zip_code', formValidation.zipCodeInputFieldOptions)} onKeyUp={formaterZipCodeInputValue} inputLength={9}/>
              </div>
          </div>
          
          <div className="w-full flex items-center justify-center">
          <Button type="submit">Simular sistema</Button>
          </div>
      </form>
  );
}