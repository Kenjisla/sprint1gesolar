import { HTMLAttributes } from "react";

import { FieldError } from "react-hook-form";
import InputMask from 'react-input-mask';

import classNames from "classnames";

interface InputMaskComponentProps extends HTMLAttributes<HTMLInputElement> {
    label: string;
    error?: FieldError;
    mask: string;
    onChangeInputMaskValue: (e: any) => void;
}

export function InputMaskComponent ({ label, error, mask, onChangeInputMaskValue }: InputMaskComponentProps) {

    const hasError = error != undefined;

    return (
        <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold text-neutral-200 ml-1">
                {label}
            </label>
            <InputMask
                onChange={e => onChangeInputMaskValue(e)}
                mask={mask}
                // @ts-ignore:next-line
                maskChar={null}
                className={classNames('mt-1 relative w-full border bg-neutral-700 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default sm:text-sm', {
                    'border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !hasError,
                    'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : hasError,
                })}
            />

            {!!error && <span className="block text-xs font-medium text-red-400">{error.message}</span>}
        </div>
    )
}