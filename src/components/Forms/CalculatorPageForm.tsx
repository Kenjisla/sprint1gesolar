import { useState } from 'react';

import { Button } from '../Button';
import { BlackInput } from '../Input/BlackInput';

import axios from 'axios';
import { useForm, RegisterOptions } from 'react-hook-form'
import { BlackInputMaskComponent } from '../Input/InputMask/BlackInputMaskComponent';
import { BlackSelect } from '../BlackSelect';

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
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();
  
  const formValidation: FormValidationProps = {
    selectInputFieldOptions: {
      validate: value => value !== undefined || 'Verifique se voce selecionou algum valor', 
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
  
  function onFormSubmit(data: any) {
    const formData = {...data, lp: 'calculator'}

    axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', formData)
  }

  function updateSelectValue(value: SelectData) {
    console.log(value)
    setValue("select", value.amount)
    setSelectValue(value)
    clearErrors("select")
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="w-full max-w-lg flex flex-col gap-12">
      <div className="grid grid-col-1 gap-8 md:grid-cols-6">
          <div className="col-span-full">
            <BlackSelect
              selectValue={selectValue} 
              onChangeSelectValue={updateSelectValue} 
              error={errors.select}
              {...register('select', formValidation.selectInputFieldOptions)}
            />
          </div>

          <div className="col-span-full md:col-span-3">
             <BlackInput 
              label="Nome" 
              error={errors.name} 
              {...register("name", formValidation.nameInputFieldOptions)} 
            />
          </div>

          <div className="col-span-full md:col-span-3">
            <BlackInput 
              label="Endereço de email" 
              error={errors.email} 
              {...register("email", formValidation.emailInputFieldOptions)}
            />
          </div>

          <div className="col-span-full md:col-span-4">
            <BlackInputMaskComponent
              label="Telefone celular"
              mask="99 99999-9999"
              error={errors.phoneNumber}
              {...register("phoneNumber", formValidation.phoneNumberInputFieldOptions)}
            />
          </div>

          <div className="col-span-full md:col-span-2">
            <BlackInputMaskComponent
              label="CEP"
              mask="99999-999"
              error={errors.zipCode}
              {...register("zipCode", formValidation.zipCodeInputFieldOptions)}
            />
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