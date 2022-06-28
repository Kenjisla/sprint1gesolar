import { InfoSectionProps } from './data';

import { Button } from '../Button';

import { BsPatchCheckFill } from 'react-icons/bs';

import classNames from 'classnames'




export default function InfoSection ({
    lightBg, 
    id, 
    imgStart, 
    topLine,
    lightText,
    headline,
    description,
    buttonLabel,
    img,
    alternativeDescription,
    link = 'https://api.whatsapp.com/send?phone=5511970695992',
    scroll_link
    }: InfoSectionProps){

    return(
        <>
            <div id={id} className={classNames('text-neutral-200', {
                'bg-[#fafafa]' : lightBg,
                'bg-neutral-900': !lightBg
                })}
            >
                <div className="grid z-10 h-full min-h-[865px] w-full max-w-[1450px] mx-auto px-6 py-24">
                    <div className={classNames('w-full grid grid-cols-1 grid-rows-1 gap-auto items-center lg:grid-cols-2')}>
                        <div className={classNames('mb-4 mx-auto px-4 lg:mx-0', {
                            'order-first lg:order-last' : imgStart
                        })}>
                            <div className="max-w-xl pb-14">
                                <strong className="block text-sun-500 text-base leading-4 font-bold tracking-widest uppercase mb-6">
                                    {topLine}
                                </strong>

                                <h1 className={classNames('mb-6 text-3xl leading-tight sm:text-4xl font-semibold', {
                                    'text-neutral-200' : lightText,
                                    'text-neutral-600' : !lightText,
                                })}>
                                    {headline}
                                </h1>

                                {alternativeDescription ? (
                                    <ul className="max-w-xl mb-16 flex flex-col gap-4">
                                        {alternativeDescription.map(item => (
                                            <li key={item.id} className="flex items-center gap-6">
                                                <span className="text-sun-500">
                                                    <BsPatchCheckFill size={20}/>
                                                </span>
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={classNames('max-w-md mb-9 text-lg leading-6', {
                                        'text-neutral-200' : lightText,
                                        'text-neutral-500' : !lightText,
                                    })}>
                                        {description}
                                    </p>
                                )}
                                
                                <div className="flex justify-start">
                                    <Button>{buttonLabel}</Button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={classNames('max-w-xl h-full flex mx-auto lg:mx-0')}>
                                <img
                                    className="w-full mb-10"
                                    src={img} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}