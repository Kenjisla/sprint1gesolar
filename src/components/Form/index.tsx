import { FormEvent } from 'react';
import axios from 'axios';

import { Button } from '../Button';
import { Select } from './Select';
import { Input } from './Input';

export function Form() {
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

    const error = { type: "required", message: "Este campo é obrigatório" }

    return (
        <form onSubmit={e => createLead(e)} className="w-full max-w-[750px] flex flex-col gap-12 py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
            <div className="w-full">
                <div className="flex flex-col gap-8">
                    <Select />

                    <Input label="Nome" error={error.message} />

                    <Input label="Endereço de email" />

                    <Input label="Numero de celular" />

                    <Input label="CEP" />
                </div>
            </div>
            
            <div className="w-full flex items-center justify-center">
            <Button type="submit">Simular sistema</Button>
            </div>
        </form>
    );
}