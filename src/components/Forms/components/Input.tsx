import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react";
import { ChangeHandler, FieldError } from "react-hook-form";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    name: string;
    inputLength?: number;
    label: string;
    error?: FieldError;
}

const InputTextBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, inputLength, label, error, ...rest }, ref) => {
    function extendsClassName(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="block text-sm font-semibold text-neutral-200 ml-1">
                {label}
            </label>
            <input
                type="text"
                className={extendsClassName(!!error ? "border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500" : "border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500", "mt-1 relative w-full border bg-neutral-700 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default sm:text-sm")}
                ref={ref}
                name={name}
                aria-label={name}
                maxLength={inputLength}
                {...rest}
            />

            {!!error && <span className="block text-xs font-medium text-red-400">{error.message}</span>}
        </div>
    );
}

export const Input = forwardRef(InputTextBase);