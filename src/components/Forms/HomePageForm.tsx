import { FormEvent, useState } from 'react';

import axios from 'axios';
import { useForm, RegisterOptions } from 'react-hook-form'

import { Button } from '../Button';
import { Select } from './components/Select';
import { Input } from './components/Input';


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

export function HomePageForm() {
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

  function createLead() {
    axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', 
    {
      value: 250,
      zip_code: '123',
      name: 'leonardo',
      phone_number: '11972202384',
      email: 'emailteste@teste.com',
      lp: 'primary'
    })
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

  function updateSelectValue(value: SelectData) {
    setValue("select", value.amount)
    setSelectValue(value)
  }

  return (
      <form onSubmit={handleSubmit(createLead)} className="w-full max-w-2xl flex flex-col gap-12 py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
          <div className="w-full flex flex-col gap-8">
            <Select
              onChangeSelectValue={updateSelectValue} 
              selectValue={selectValue} 
              error={errors.select} 
              {...register('select', formValidation.selectInputFieldOptions)}
            />

            <Input label="Nome" error={errors.name} {...register("name", formValidation.nameInputFieldOptions)} />

            <Input label="Endereço de email" error={errors.email} {...register("email", formValidation.emailInputFieldOptions)} />

            <Input label="Numero de celular" error={errors.phone_number} {...register("phone_number", formValidation.phoneNumberInputFieldOptions)} onKeyUp={formaterPhoneNumberInputValue} inputLength={16}/>
          
            <Input label="CEP" error={errors.zip_code} {...register('zip_code', formValidation.zipCodeInputFieldOptions)} onKeyUp={formaterZipCodeInputValue} inputLength={9}/>
          </div>
          
          <div className="w-full flex items-center justify-center">
            <Button type="submit">Simular sistema</Button>
          </div>
      </form>
  );
}