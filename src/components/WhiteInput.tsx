import classNames from "classnames";
import { forwardRef, ForwardRefRenderFunction, HTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface WhiteInputProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    error?: FieldError;
    icon: ReactNode;
}
const WhiteInputBase: ForwardRefRenderFunction<HTMLInputElement, WhiteInputProps>  = ({ name, label, error, icon, ...rest }, ref) => {
    const hasError = error !== undefined;

    return (
        <div className="flex flex-col gap-2">
            <span className="ml-2 text-neutral-600 font-medium text-base font-regular tracking-tight">{label}</span>

            <div className="flex flex-col gap-3">
                <label className="relative w-full flex flex-col gap-2 overflow-hidden max-w-lg h-12 bg-neutral-300 rounded-3xl">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-400">
                        {icon}
                    </span>

                    <input
                        name={name}
                        arial-label={name}
                        ref={ref}
                        className={(classNames('text-neutral-600 font-medium placeholder:text-neutral-500 block bg-transparent w-full h-full border rounded-3xl pl-11 pr-3 shadow-sm', {
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500' : !hasError,
                            'border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500' : hasError,
                        }))}
                        placeholder="Digite seu nome" 
                        type="text"
                        {...rest }
                    />

                </label>

                {!!error && <span className="ml-2 block text-xs font-medium text-red-400">{error.message}</span>}
            </div>
        </div>
    )
}

export const WhiteInput = forwardRef(WhiteInputBase)