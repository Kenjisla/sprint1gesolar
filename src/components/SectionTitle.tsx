import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}

export function SectionTitle({ children }: TitleProps) {
    return (
        <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl md:leading-tight">
            {children}
        </h1>
    );
}