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

type SelectData = {
  id: number,
  amount: string;
  defaultValue?: boolean;
}

export function CalculatorPageForm() {
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
  
  function createLead(formData: any) {

    const formatedFormData = {
      amount: formData.select,
      name: formData.name,
      email: formData.email,
      zipCode: formData.zipCode,
      phoneNumber: formData.phoneNumber,
      lp: 'primary'
    }

    axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', formatedFormData)
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
    <form onSubmit={handleSubmit(createLead)} className="w-full max-w-lg flex flex-col gap-12">
      <div className="grid grid-col-1 gap-8 md:grid-cols-6">
          <div className="col-span-full">
            <Select selectValue={selectValue} onChangeSelectValue={updateSelectValue} {...register('select')}/>
          </div>

          <div className="col-span-full md:col-span-3">
             <Input label="Nome" {...register("name")} />
          </div>

          <div className="col-span-full md:col-span-3">
            <Input label="Endereço de email" {...register("email")} />
          </div>

          <div className="col-span-full md:col-span-4">
            <Input label="Numero de celular" {...register("phoneNumber")} />
          </div>

          <div className="col-span-full md:col-span-2">
            <Input label="CEP" {...register('zipCode')}/>
          </div>
      </div>

      <div className="flex items-center justify-center">
          <Button type="submit">
            Simular online
          </Button>
      </div>
  </form>
  );
}