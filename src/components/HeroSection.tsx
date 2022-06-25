import { Button } from "./Button";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    buttonLabel: string;
    imgSrc: string;
}

export function HeroSection({ title, subtitle, buttonLabel, imgSrc }: HeroSectionProps) {
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 w-full bg-gradient-to-b from-transparent to-neutral-900/75">
                <div className="w-full max-w-[1450px] mx-auto h-full px-6 pb-20 flex items-end justify-start ">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-bold text-neutral-200 tracking-tight leading-10 md:text-5xl">
                                {title}
                            </h1>

                            <h2 className="text-md font-medium text-neutral-300 tracking-tight max-w-2xl xl:text-neutral-400">
                                {subtitle}
                            </h2>
                        </div>

                        <div>
                            <Button>{buttonLabel}</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[90vh]">
                <img
                    className="w-full h-full object-cover"
                    src={imgSrc}
                    alt="" 
                />
            </div>
        </div>
    );
}