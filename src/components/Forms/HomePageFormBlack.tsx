import { useState } from 'react';

import axios from 'axios';
import { useForm, RegisterOptions } from 'react-hook-form'

import { Button } from '../Button';

import classNames from 'classnames';
import { BlackSelect } from '../BlackSelect';
import { BlackInput } from '../Input/BlackInput';
import { BlackInputMaskComponent } from '../Input/InputMask/BlackInputMaskComponent';


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
    clearErrors
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

  function onFormSubmit(formData: any) {
    console.log(formData)

    const formatedFormData = {
      amount: formData.select,
      name: formData.name,
      email: formData.email,
      zipCode: formData.zipCode,
      phoneNumber: formData.phoneNumber,
      lp: 'primary'
    }
  }

  function updateSelectValue(value: SelectData) {
    setSelectValue(value)
    setValue("select", value.amount)
    clearErrors("select")
  }

  return (
      <form onSubmit={handleSubmit(onFormSubmit)} className="w-full max-w-2xl flex flex-col gap-12 py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
          <div className="w-full flex flex-col gap-8">
            <BlackSelect
              selectValue={selectValue}
              onChangeSelectValue={updateSelectValue}
              error={errors.select}
              {...register('select', formValidation.selectInputFieldOptions)}
            />

            <BlackInput label="Nome" error={errors.name} {...register("name", formValidation.nameInputFieldOptions)} />

            <BlackInput label="Endereço de email" error={errors.email} {...register("email", formValidation.emailInputFieldOptions)} />
          
            <BlackInputMaskComponent 
              label='Numero de celular'
              mask="99 99999-9999"
              error={errors.phoneNumber}
            />

            <BlackInputMaskComponent 
              label='CEP'
              mask="99999-999"
              error={errors.zipCode}
            />
          </div>
          
          <div className="w-full flex items-center justify-center">
            <Button type="submit">
              Simular sistema
            </Button>
          </div>
      </form>
  );
}