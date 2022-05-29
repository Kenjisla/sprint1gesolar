import { FormEvent, Fragment, useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";

import { CircleWavyCheck, FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

const slide = [
  { id: 1, source: './logos/leverosSolar.png', alt: 'Logo da leveros' },
  { id: 2, source: './logos/adiasSolar.png', alt: 'Logo da adias' },
  { id: 3, source: './logos/apSystems.png', alt: 'Logo da APsystems' },  
  { id: 4, source: './logos/aeSolar.png', alt: 'Logo da adias' },  
  { id: 5, source: './logos/abb.png', alt: 'Logo da adias' },  
  { id: 6, source: './logos/deye.png', alt: 'Logo da adias' },  
  { id: 7, source: './logos/elgin.png', alt: 'Logo da adias' },  
  { id: 8, source: './logos/jinkoSolar.png', alt: 'Logo da adias' },  
  { id: 9, source: './logos/renovigi.png', alt: 'Logo da adias' },
]

const reverseSlide = [
  { id: 1, source: './logos/leverosSolar.png', alt: 'Logo da leveros' },
  { id: 2, source: './logos/adiasSolar.png', alt: 'Logo da adias' },
  { id: 3, source: './logos/apSystems.png', alt: 'Logo da APsystems' },  
  { id: 4, source: './logos/aeSolar.png', alt: 'Logo da adias' },  
  { id: 5, source: './logos/abb.png', alt: 'Logo da adias' },  
  { id: 6, source: './logos/deye.png', alt: 'Logo da adias' },  
  { id: 7, source: './logos/elgin.png', alt: 'Logo da adias' },  
  { id: 8, source: './logos/jinkoSolar.png', alt: 'Logo da adias' },  
  { id: 9, source: './logos/renovigi.png', alt: 'Logo da adias' },
]

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const images = [
  { id: 1, source: '/projects-images/image1.png', alt: 'Uma de nossas obras' },
  { id: 2, source: '/projects-images/image2.png', alt: 'Uma de nossas obras' },
  { id: 3, source: '/projects-images/image3.png', alt: 'Uma de nossas obras' },
  { id: 4, source: '/projects-images/image4.png', alt: 'Uma de nossas obras' },
  { id: 5, source: '/projects-images/image5.png', alt: 'Uma de nossas obras' },
  { id: 6, source: '/projects-images/image6.png', alt: 'Uma de nossas obras' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [selected, setSelected] = useState(people[3])
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(index => index === (images.length - 1) ? index = 0 : index + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  async function createLead(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await axios.post('https://hook.us1.make.com/hgdw94pi6dfr67dny8pt9sxhd2feakbm', 
      {
        value: 250,
        zip_code: '123',
        name: 'leonardo',
        phone_number: '11972202384',
        email: 'emailteste@teste.com'
      })

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-neutral-900 min-h-screen">
      <Navbar />

      <div className="relative h-full w-full">
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a]/50 top-0 left-0" />

        <div className="w-full h-full flex flex-col items-center gap-16 xl:gap-8">
          <div className="absolute w-full max-w-[1450px] h-full">
            <div className="flex flex-col items-start justify-end gap-12 h-full px-6 pb-24 md:pb-36">
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold text-neutral-200 leading-snug md:text-5xl">
                  Energia solar para todos
                </h1>
                <h2 className="text-md font-medium text-neutral-300 tracking-tight md:text-md">
                  Produza sua própria energia trocando o custo da sua conta 
                  de luz para pagar o investimento no sistema.
                </h2>
              </div>

              <div>
                <Button>
                  Começar agora
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[90vh]">
          <img 
            src="house.png" 
            alt="" 
            className=" h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center max-w-[1450px] h-full min-h-[350px] mx-auto px-6 md:px-4">
        <div className="flex flex-col bg-gradient-to-r from-neutral-900 to-neutral-800 items-center justify-center gap-16 py-16 px-4 mb-8 mt-24 rounded-xl h-full min-h-215 xl:flex-row md:px-8 xl:gap-24">
          <div className="flex flex-col gap-2 xl:gap-4">
            <h3 className="text-[1.25rem] font-bold text-neutral-200 tracking-tight md:text-[1.375rem]">Instale hoje e em até 60 dias veja os benefícios de obter a sua usina</h3>
            <p className="text-sm font-medium text-neutral-400 tracking-tight">
              is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-16 xl:flex-row">
            <div className="w-full xl:w-[180px]">
              <p className="text-sm font-medium text-neutral-200 md:text-base">
                Reduza da conta de energia em
              </p>
              <span className="text-3xl font-bold text-sun-500 md:text-4xl">95%</span>
            </div>

            <div className="w-full xl:w-[180px]">
              <p className="text-sm font-medium text-neutral-200 md:text-base">
                Valorize o valor do seu imóvel em
              </p>
              <span className="text-3xl font-bold text-sun-500 md:text-4xl">95%</span>
            </div>

            <div className="w-full xl:w-[180px]">
              <p className="text-sm font-medium text-neutral-200 md:text-base">
                Tenha o retorno do seu investimento em
              </p>
              <span className="text-3xl font-bold text-sun-500 md:text-4xl">95%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1450px] mx-auto py-24 px-6 md:px-4 md:py-32">
        <div className="w-full h-full flex flex-col gap-12 xs:gap-32">
          <div className="flex flex-col items-start justify-center gap-6 md:items-center md:text-center xl:gap-4">
            <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">
              Acompanhe a geração de energia na pauma da sua mão
            </h1>
            <h2 className="text-md font-medium text-neutral-400 tracking-tight max-w-3xl">
              Experimente a sensação da independência energética, deixando de pagar a conta 
              de energia. E acompanhe em tempo real, a sua geração e quanto esta economizando
            </h2>
          </div>  

          <div className="w-full h-full flex items-center justify-center">
            <div className="flex items-center justify-center w-[500px] h-[510px] md:h-[610px]">
              <img  
                src="iphone.svg" 
                alt="Image do nosso aplicativo" 
                className="w-full h-[full] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1450px] mx-auto py-24 px-6 flex items-center border-y-2 border-y-neutral-800 md:px-4">
        <div className="flex flex-col justify-between h-full w-full gap-20 xl:h-[65vh]">
          <div className="flex flex-col items-start justify-center gap-6 lg:items-center lg:text-center xl:gap-4">
            <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">
              Como funciona o processo de homologação
            </h1>
            <p className="text-md font-medium text-neutral-400 tracking-tight  lg:mx-auto  lg:max-w-[43%]">
              Nós cuidaremos de todo o processo para sua comodidade e conforto, desde a parte de pagamento até a homologação
            </p>
          </div>

          <div className="flex flex-col justify-between gap-16 lg:flex-row lg:gap-8">
            <div className="flex flex-col justify-between bg-neutral-800 py-6 px-5 rounded-md text-neutral-200 w-full max-w-[900px] h-[260px] xl:w-[360px]">
              <div className="flex items-center justify-center w-14 h-14 bg-sun-500 rounded-full">
                span
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-neutral-200 tracking-tight">
                  Compra certa
                </h3>
                <p className="text-[14px] font-medium text-neutral-400 tracking-tight">
                  Faça a simulação de parcelas que encaixe no valor atual da sua conta de energia e 
                  prepara-se para economizar e valorizar o seu patrimônio
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-neutral-800 py-6 px-5 rounded-md text-neutral-200 w-full max-w-[900px] h-[260px] xl:w-[360px]">
              <div className="flex items-center justify-center w-14 h-14 bg-sun-500 rounded-full">
                span
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-neutral-200 tracking-tight">
                  Compra certa
                </h3>
                <p className="text-[14px] font-medium text-neutral-400 tracking-tight">
                  Faça a simulação de parcelas que encaixe no valor atual da sua conta de energia e 
                  prepara-se para economizar e valorizar o seu patrimônio
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-between bg-neutral-800 py-6 px-5 rounded-md text-neutral-200 w-full max-w-[900px] h-[260px] xl:w-[360px]">
              <div className="flex items-center justify-center w-14 h-14 bg-sun-500 rounded-full">
                span
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-neutral-200 tracking-tight">
                  Compra certa
                </h3>
                <p className="text-[14px] font-medium text-neutral-400 tracking-tight">
                  Faça a simulação de parcelas que encaixe no valor atual da sua conta de energia e 
                  prepara-se para economizar e valorizar o seu patrimônio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1450px] h-full min-h-[800px] mx-auto py-6 px-6 md:px-4">
        <div className=" w-full min-h-[70vh] h-full gap-8 flex flex-col justify-between py-12 xl:grid xl:grid-cols-6 xl:grid-row-6 xl:gap-16">
          <div className="col-span-4 row-span-2 xl:col-span-3 xl:row-span-4">
            <div className="flex flex-col items-start justify-center gap-12 h-full max-w-[90%]">
                <div className="flex flex-col gap-3 xl:gap-6">
                  <div className="flex flex-col gap-2 xl:gap-4">
                    <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">
                      Acompanhe a geração de energia na pauma da sua mão
                    </h1>

                    <h2 className="text-md font-medium text-neutral-400 tracking-tight md:text-md">
                      Experimente a sensação da independência energética, deixando de pagar a conta 
                      de energia. E acompanhe em tempo real, a sua geração e quanto esta economizando
                    </h2>
                  </div>

                  <ul className="flex flex-col gap-6 border-t-2 border-t-neutral-800 pt-12">
                    <li className="flex items-center gap-4">
                      <span>
                        <CircleWavyCheck weight='bold' size={22} className="text-sun-500" />
                      </span>
                      <p className="text-sm font-medium text-neutral-500 tracking-tight">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        standard dummy text ever since the 1500s
                      </p>
                    </li>

                    <li className="flex items-center gap-4">
                      <span>
                        <CircleWavyCheck weight='bold' size={22} className="text-sun-500" />
                      </span>
                      <p className="text-sm font-medium text-neutral-500 tracking-tight">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        standard dummy text ever since the 1500s
                      </p>
                    </li>

                    <li className="flex items-center gap-4">
                      <span>
                        <CircleWavyCheck weight='bold' size={22} className="text-sun-500" />
                      </span>
                      <p className="text-sm font-medium text-neutral-500 tracking-tight">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        standard dummy text ever since the 1500s
                      </p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="col-span-3 row-span-4">
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="payback_pig.png" 
                alt="Imagem de um cofrinho"
                className="w-full max-h-[350px] object-cover xl:max-h-[450px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full min-h-[70vh] h-full gap-8 flex flex-col-reverse justify-between py-12 xl:grid xl:grid-cols-6 xl:grid-row-6 xl:gap-16">
          <div className="col-span-3 row-span-4">
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="cashback.png" 
                alt=""
                className="w-full max-h-[350px] object-cover xl:max-h-[450px]"
              />
            </div>
          </div>
          
          <div className="col-span-4 row-span-2 xl:col-span-3 xl:row-span-4">
            <div className="flex flex-col items-start justify-center gap-12 h-full max-w-[90%]">
                <div className="flex flex-col gap-3 xl:gap-6">
                  <div className="flex flex-col gap-2 xl:gap-4">
                    <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">
                      Acompanhe a geração de energia na pauma da sua mão
                    </h1>

                    <h2 className="text-md font-medium text-neutral-400 tracking-tight md:text-md">
                      Experimente a sensação da independência energética, deixando de pagar a conta 
                      de energia. E acompanhe em tempo real, a sua geração e quanto esta economizando
                    </h2>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] w-full">
        <div className="max-w-[1450px] h-[800px] mx-auto py-6 px-4 md:px-4 md:py-14 lg:py-24">
          <div className="flex flex-col h-full gap-12 xl:flex-row">
            <div className="w-full h-1/2 flex flex-col items-start justify-center xl:w-1/2 xl:h-full xl:flex-row md:items-center">
              <div className='flex flex-col gap-2'>
                <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">
                  Nossos projetos
                </h1>

                <p className="text-md font-medium text-neutral-400 tracking-tight md:text-md">
                  Veja a seguir alguns dos projetos de nossos clientes
                </p>
              </div>
            </div>

            <div className="relative w-full h-full">
            {images.map((image, index) => (
              <Transition
                key={image.id}
                show={imageIndex === index}
                enter="transition-opacity duration-55 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200 ease-in-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <img
                  key={image.id}
                  src={image.source} 
                  alt="Imagem de um dos nossos projetos" 
                  className="absolute w-full h-full max-h-[615px] object-cover rounded-md xl:max-h-max"
                />
              </Transition>
            ))}

              <div className="flex items-center absolute px-4 py-2 bottom-0 left-0 h-[180px] w-full backdrop-blur-sm bg-neutral-900/95 xs:h-[170px] xs:py-3 xs:px-6 lg:w-[60%] lg:-bottom-4 lg:-left-4 lg:rounded-lg">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-lg text-neutral-200 tracking-normal">Obra residencial</h1>

                  <ul className="flex flex-col gap-[0.15rem]">
                    <li className="text-neutral-400 font-medium">
                      Economia anual: <span className="ml-2 tracking-normal text-sun-500">R$ 1200,00</span>
                    </li>
                    <li className="text-neutral-400 font-medium">
                      Economia anual: <span className="ml-2 tracking-normal text-sun-500">R$ 1200,00</span>
                    </li>
                    <li className="flex flex-col text-neutral-400 font-medium sm:flex-row">Conta de luz: 
                      <div className="flex itemx-center gap-3 mt-1 sm:ml-3 sm:mt-0">
                        <span>Antes: <span className="text-sun-500">R$ 1200,00</span></span>
                        <span>Hoje: <span className="text-sun-500">R$ 85,00</span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[full] flex flex-col items-center justify-center py-12 px-6 md:px-4 bg-gradient-to-b from-[#131313] to-neutral-900">
        <div className="w-full max-w-[1450px] relative flex flex-col gap-8 overflow-x-hidden">
          <div className="h-[100px] flex items-center animate-smSlide md:animate-mdSlide lg:animate-lgSlide xl:animate-xlSlide">
            {slide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
            {slide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
          </div>

          <div className="h-[100px] flex items-center flex-row-reverse animate-smReverseSlide md:animate-mdReverseSlide lg:animate-lgReverseSlide xl:animate-xlReverseSlide">
          {slide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
            {slide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1450px] h-full flex mx-auto py-24 px-6 md:px-4 md:py-32 sm:items-center sm:justify-center">
        <div className="h-full flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col items-start justify-center gap-1 sm:gap-2 sm:items-center sm:text-center">
              <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">Calcule seu sistema</h1>

              <h2 className="text-md font-medium text-neutral-400 tracking-tight md:text-md">
                Insira alguns dos seus dados abaixo e faça a simulação online do seu sistema
              </h2>
          </div>

          <div>
            <form onSubmit={e => createLead(e)} className="w-full max-w-[750px] flex flex-col gap-12 py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
                <div className="w-full">
                  <div className="flex flex-col gap-8">
                    <div className="">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-sm font-semibold text-neutral-200">Assigned to</Listbox.Label>
                            <div className="mt-2 relative">
                              <Listbox.Button className="relative w-full bg-neutral-700 border border-neutral-500 text-neutral-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-sun-500 focus:border-sun-500 sm:text-sm">
                                <span className="flex items-center">
                                  <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                  <span className="ml-3 block truncate">{selected.name}</span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                  <SelectorIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-neutral-600 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-neutral-900 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'text-white bg-sun-500' : 'text-neutral-300',
                                          'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                            <span
                                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active ? 'text-white' : 'text-sun-500',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                              )}
                                            >
                                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>

                    <div className="">
                      <label htmlFor="first-name" className="block text-sm font-semibold text-neutral-200 ml-1">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 relative w-full bg-neutral-700 border border-neutral-500 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-sun-500 focus:border-sun-500 sm:text-sm"
                      />
                    </div>
                    
                    <div className="">
                      <label htmlFor="first-name" className="block text-sm font-semibold text-neutral-200 ml-1">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 relative w-full bg-neutral-700 border border-neutral-500 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-sun-500 focus:border-sun-500 sm:text-sm"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="first-name" className="block text-sm font-semibold text-neutral-200 ml-1">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 relative w-full bg-neutral-700 border border-neutral-500 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-sun-500 focus:border-sun-500 sm:text-sm"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="first-name" className="block text-sm font-semibold text-neutral-200 ml-1">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 relative w-full bg-neutral-700 border border-neutral-500 text-neutral-300 font-normal rounded-md shadow-sm px-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-sun-500 focus:border-sun-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="w-full flex items-center justify-center">
                  <Button type="submit">Simular sistema</Button>
                </div>
            </form>
          </div>

        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-12 px-6 md:px-4 md:py-14 bg-[#111111]">
        <div className="w-full max-w-[1200px] flex flex-col items-start p-2">
          <div className="w-full flex flex-col items-start gap-8 justify-between sm:items-center lg:flex-row">
            <div>
              <Logo />
            </div>
          

            <div className="flex flex-col items-start justify-center gap-1 sm:items-center">
              <h2 className="text-neutral-200 font-semibold text-sm md:text-base">GESOLAR TECNOLOGIA E SOLUÇÕES EM ENERGIA SOLAR</h2>
              <span className="text-neutral-400 font-medium text-xs md:text-sm">Av. Paulista, 1842 - conjunto 155 - CEP 01310-200 - Bela Vista - Sao Paulo/Sp www.conteud.com.br</span>
            </div>
          </div>

          <div className="w-full flex items-start justify-between flex-col gap-8 py-6 mt-8 border-t-2 border-t-neutral-800 sm:items-center md:gap-0 md:flex-row">
            <span className="text-neutral-200 font-bold text-sm">© 2022 GESOLAR, Inc. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="" className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-900 rounded-2xl">
                <FacebookLogo weight='bold' size={22} className="text-sun-500" />
              </a>

              <a href="" className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800 rounded-2xl">
                <InstagramLogo weight='bold' size={22} className="text-sun-500"/>
              </a>

              <a href="" className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800 rounded-2xl">
                <LinkedinLogo weight='bold' size={22} className="text-sun-500"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}