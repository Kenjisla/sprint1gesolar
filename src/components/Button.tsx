import { ReactNode } from "react"

interface ButtonComponentProps {
    children: ReactNode;
    type?: "submit" | "button" | "reset"
}

export function Button({ children, type = "button" }: ButtonComponentProps) {
    return (
        <button 
            type={type} 
            className="inline-flex items-center justify-center px-7 py-2 rounded-xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200">
            {children}
        </button>
    )
}