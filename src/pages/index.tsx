import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";
import { ProjectsCards } from '../components/ProjectsCards';
import { Form } from '../components/Form';

import { BsCheck2Circle, BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

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

const images = [
  { id: 1, source: '/projects-images/image1.png', alt: 'Uma de nossas obras' },
  { id: 2, source: '/projects-images/image2.png', alt: 'Uma de nossas obras' },
  { id: 3, source: '/projects-images/image3.png', alt: 'Uma de nossas obras' },
  { id: 4, source: '/projects-images/image4.png', alt: 'Uma de nossas obras' },
  { id: 5, source: '/projects-images/image5.png', alt: 'Uma de nossas obras' },
  { id: 6, source: '/projects-images/image6.png', alt: 'Uma de nossas obras' },
]

export default function Home() {


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
        <div className="w-full h-full flex flex-col gap-12 xs:gap-36">
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
            <div className="flex items-center justify-center w-[500px] h-[510px] md:h-[480px]">
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
                        <BsCheck2Circle className="text-sun-500 w-5 h-5" />
                      </span>
                      <p className="text-sm font-medium text-neutral-500 tracking-tight">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        standard dummy text ever since the 1500s
                      </p>
                    </li>

                    <li className="flex items-center gap-4">
                      <span>
                        <BsCheck2Circle className="text-sun-500 w-5 h-5" />
                      </span>
                      <p className="text-sm font-medium text-neutral-500 tracking-tight">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        standard dummy text ever since the 1500s
                      </p>
                    </li>

                    <li className="flex items-center gap-4">
                      <span>
                        <BsCheck2Circle className="text-sun-500 w-5 h-5" />
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
        <div className="max-w-[1450px] h-full mx-auto py-20 px-4 lg:py-24">
          <div className="flex flex-col items-center h-full gap-20 lg:gap-32">
            <div className="w-full flex flex-col items-start justify-center md:items-center">
              <div className='flex flex-col gap-2 md:text-center'>
                <h1 className="text-3xl font-bold text-neutral-200 tracking-tight md:text-4xl">
                  Nossos projetos
                </h1>

                <p className="text-md font-medium text-neutral-400 tracking-tight md:text-md">
                  Veja a seguir alguns dos projetos de nossos clientes
                </p>
              </div>
            </div>

            <div className="relative w-full h-full grid grid-cols-1 gap-y-14 gap-x-10 lg:grid-cols-2 md:mx-auto md:max-w-[600px] lg:max-w-full">
              <ProjectsCards />
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

          <div className="h-[100px] flex items-center animate-smSlide md:animate-mdSlide lg:animate-lgSlide xl:animate-xlSlide">
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
            <Form />
          </div>

        </div>
      </div>

      <footer className="w-full flex items-center justify-center py-12 px-6 md:px-4 md:py-14 bg-[#131313]">
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
              <a href="" className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800 rounded-2xl">
                <BsFacebook className="text-sun-500 w-5 h-5" />
              </a>

              <a href="" className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800 rounded-2xl">
                <BsInstagram className="text-sun-500 w-5 h-5"/>
              </a>

              <a href="" className="w-[46px] h-[46px] flex items-center justify-center bg-neutral-800 rounded-2xl">
                <BsLinkedin className="text-sun-500 w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}