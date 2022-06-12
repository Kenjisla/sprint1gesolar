import { ReactNode } from "react"

interface SectionSubtitleProps {
    children: ReactNode;
}

export function SectionSubtitle({ children }: SectionSubtitleProps) {
    return (
        <h2 className="text-md font-medium text-neutral-400 tracking-tight max-w-2xl">
            {children}
        </h2>
    )
}