import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";
import { WhatsappButton } from "../components/WhatsappButton";

import { CalculatorPageForm } from "../components/Forms/CalculatorPageForm";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaHandshake, FaHome, FaSolarPanel } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { Logo } from "../components/Logo";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Navlink } from "../components/Navbar/Navlink";
import classNames from "classnames";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import Link from "next/link";

export default function Calculadora() {
    const router = useRouter()
    const asPath = router.asPath

    const solutions = [
        {
          name: 'Home',
          href: '',
          icon: FaHome
        },
        {
          name: 'Afiliados',
          href: '',
          icon: FaHandshake
        },
        { 
          name: 'Investir em solar', 
          href: '',
          icon: FaSolarPanel
        },
        {
          name: 'Manutenção',
          href: '',
          icon: BsFillGearFill
        },
    ]


    return (
        <>
            <header>
                <Popover className="relative">
                    <div className="max-w-[1450px] mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-6 lg:justify-start md:space-x-10">
                        <div className="flex justify-start lg:flex-1 lg:w-0">
                        <Link href="">
                            <a>
                                <img
                                className="h-10 w-auto md:h-11"
                                src="logo.png"
                                alt=""
                                />
                            </a>
                        </Link>
                        </div>
                        <div className="-mr-2 -my-2 lg:hidden">
                            <Popover.Button className="bg-neutral-800 rounded-md p-2 inline-flex items-center justify-center text-neutral-200 hover:text-sun-500 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sun-500">
                            <span className="sr-only">Open menu</span>
                            <HiOutlineMenuAlt4 className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>

                        <nav className="hidden lg:flex space-x-10">

                            <Navlink href="">Home</Navlink>
                            <Navlink href="">Investir em solar</Navlink>
                            <Navlink href="">Cashback</Navlink>
                            <Navlink href="">Manutenções</Navlink>

                        </nav>

                        <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
                            <Link href="">
                            <a
                                className={classNames('whitespace-nowrap inline-flex items-center justify-center px-4 py-2 xl:px-9 rounded-md shadow-sm text-base font-medium text-neutral-200  border border-sun-500/75 hover:bg-amber-500 hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200', {
                                'bg-sun-500' : asPath === "/calculadora-de-energia-solar2",
                                'bg-neutral-900' : !(asPath === "/calculadora-de-energia-solar2")
                                })}
                            >
                                Simule seu sistema
                            </a>
                            </Link>
                        </div>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95 delay-150"
                    >
                        <Popover as="nav" className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
                        <div className="rounded-lg shadow-lg bg-neutral-800 divide-y-2 divide-neutral-700">
                            <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                <Logo />
                                </div>
                                <div className="-mr-2">
                                <Popover.Button className="bg-neutral-700 rounded-md p-2 inline-flex items-center justify-center text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sun-500">
                                    <span className="sr-only">Close menu</span>
                                    <MdClose className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-10 mb-6">
                                <div className="grid gap-y-8">
                                {solutions.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                    <a
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors"
                                    >
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-sun-500" aria-hidden="true" />
                                        <span className="ml-3 text-base font-medium text-neutral-200">{item.name}</span>
                                    </a>
                                    </Link>
                                ))}
                                </div>
                            </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                            <Link href="/calculadora-de-energia-solar">
                                <a
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors"
                                >
                                Simule seu sistema
                                </a>
                            </Link>
                            </div>
                        </div>
                        </Popover>
                    </Transition>
                </Popover>
            </header>  

            <div className="w-full h-full flex flex-col xl:flex-row xl:max-h-100vh">
                <div className="hidden relative md:block">
                    <img
                        className="w-full h-[50vh] xl:w-[calc(100vw-500px)] xl:h-[calc(100vh-92px)] object-cover"
                        src="/calculadora-hero-image.png" 
                        alt="Imagem de uma casa com energia solar"
                    />

                    <div className="absolute w-full h-full inset-0 z-0 bg-gradient-to-b xl:bg-gradient-to-r from-neutral-900/25 to-neutral-900"/>
                
                    <div className="absolute w-full h-full inset-0 z-1 flex items-center justify-center">
                        <p className="max-w-lg px-6 text-xl text-neutral-200 font-semibold text-start md:text-2xl xl:text-center">
                            Inicie agora o projeto para ter a energia solar e economizar até 95% na sua conta de luz.
                        </p>
                    </div>
                </div>

                <div className="w-full h-full px-6 py-12 flex flex-col items-center justify-center gap-12 md:gap-16 xl:py-0 xl:min-h-[calc(100vh-92px)] bg-neutral-900">
                    <div className="h-full mx-auto flex flex-col items-start justify-center gap-1 xl:gap-2 sm:items-center sm:text-center">
                        <Title>Calcule seu sistema</Title>

                        <Subtitle>
                            Insira os dados abaixo e faça a simulação online do seu sistema
                        </Subtitle>
                    </div>

                    <CalculatorPageForm />
                </div>

                <WhatsappButton />
            </div>
        </>
    )
}