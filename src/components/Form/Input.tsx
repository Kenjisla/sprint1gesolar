interface InputProps {
    label: string;
    error?: string;
}

export function Input({ label, error }: InputProps) {
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
            />

            {!!error && <span className="block text-xs font-medium text-red-400">{error}</span>}
        </div>
    );
}