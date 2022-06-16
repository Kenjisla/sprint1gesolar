import { ReactNode } from "react"

interface SubtitleProps {
    children: ReactNode;
}

export function Subtitle({ children }: SubtitleProps) {
    return (
        <h2 className="text-md font-medium text-neutral-400 tracking-tight max-w-2xl">
            {children}
        </h2>
    )
}