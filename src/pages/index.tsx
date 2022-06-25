import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { HomePageForm } from "../components/Forms/HomePageForm";
import { ProjectCard } from "../components/ProjectCard";
import { HeroSection } from "../components/HeroSection";

import { BsCheck2Circle } from 'react-icons/bs'
import { Button } from "../components/Button";

export default function Home() {
  const cardsData = [
  {
    id: 1,
    image: {
      src: '/projects-images/image1.png',
      alt: 'Foto de uma das nossas obras',
    },
    values: {
      typeOfWork: 'Obra Residencial',
      annualSavings: 4200,
      paybackTime: 4.9,
      generalSavings: {
        before: 550,
        after: 69
      }
    }
  },
  {
    id: 2,
    image: {
      src: '/projects-images/image2.png',
      alt: 'Foto de uma das nossas obras',
    },
    values: {
      typeOfWork: 'Obra Residencial',
      annualSavings: 4600,
      paybackTime: 4,
      generalSavings: {
        before: 535,
        after: 80
      }
    }
  },
  {
    id: 3,
    image: {
      src: '/projects-images/image3.png',
      alt: 'Foto de uma das nossas obras',
    },
    values: {
      typeOfWork: 'Obra Residencial',
      annualSavings: 14000,
      paybackTime: 3.9,
      generalSavings: {
        before: 1350,
        after: 168
      }
    }
  },
  {
    id: 4,
    image: {
      src: '/projects-images/image4.png',
      alt: 'Foto de uma das nossas obras',
    },
    values: {
      typeOfWork: 'Obra Residencial',
      annualSavings: 3100,
      paybackTime: 5.6,
      generalSavings: {
        before: 350,
        after: 80
      }
    }
  },
  {
    id: 5,
    image: {
      src: '/projects-images/image5.png',
      alt: 'Foto de uma das nossas obras',
    },
    values: {
      typeOfWork: 'Obra Residencial',
      annualSavings: 14500,
      paybackTime: 3.9,
      generalSavings: {
        before: 1400,
        after: 140
      }
    }
  },
  ]

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
    { id: 1, source: './logos/canadian.png', alt: 'Logo da Canadian' },
    { id: 2, source: './logos/growatt.png', alt: 'Logo da Growatt' },
    { id: 3, source: './logos/hypontec.png', alt: 'Logo da Hypontec' },  
    { id: 4, source: './logos/znshineSolar.png', alt: 'Logo da Leveros' },  
    { id: 5, source: './logos/longiSolar.png', alt: 'Logo da Longi Solar' },  
    { id: 6, source: './logos/risen.png', alt: 'Logo da Risen' },  
    { id: 7, source: './logos/solis.png', alt: 'Logo da Solis' },  
    { id: 8, source: './logos/trinaSolar.png', alt: 'Logo da Trina Solar' },  
    { id: 9, source: './logos/weg.png', alt: 'Logo da Weg' },
  ]

  return (
    <>
      <HeroSection 
        title="Energia solar para todos"
        subtitle="Produza sua própria energia trocando o custo da sua conta 
        de luz para pagar o investimento no sistema."
        buttonLabel="Começar agora"
        imgSrc="/hero-image.jpg"
      />

        <div className="w-full h-full min-h-[65vh] flex items-center justify-center">
          <div className="w-full max-w-[1450px] flex flex-col items-center justify-center px-6 py-24 gap-16 md:px-8 xl:gap-28">
            <div className="w-full flex flex-col items-center gap-16 xl:flex-row">

              <div className="flex flex-col gap-12 w-full bg-neutral-200 rounded-2xl py-8 overflow-hidden xl:px-12">
                <div>
                    <img
                      className="h-36 w-full"
                      src="pig-savings.svg" 
                      alt="" 
                    />
                </div>

                  <div className="flex flex-col items-center justify-center gap-3">
                    <strong className="text-lg font-medium text-neutral-500">
                      Reduza da conta de energia em
                    </strong>
                  <span className="text-2xl font-semibold text-sun-500 md:text-4xl">95%</span>
                  </div>
              </div>

              <div className="flex flex-col gap-12 w-full bg-neutral-200 rounded-2xl py-8 overflow-hidden xl:px-12">
                <div>
                    <img
                      className="h-36 w-full"
                      src="pig-savings.svg" 
                      alt="" 
                    />
                </div>

                  <div className="flex flex-col items-center justify-center gap-3">
                    <strong className="text-lg font-medium text-neutral-500">
                      Reduza da conta de energia em
                    </strong>
                  <span className="text-2xl font-semibold text-sun-500 md:text-4xl">95%</span>
                  </div>
              </div>

              <div className="flex flex-col gap-12 w-full bg-neutral-200 rounded-2xl py-8 overflow-hidden xl:px-12">
                <div>
                    <img
                      className="h-36 w-full"
                      src="pig-savings.svg" 
                      alt="" 
                    />
                </div>

                  <div className="flex flex-col items-center justify-center gap-3">
                    <strong className="text-lg font-medium text-neutral-500">
                      Reduza da conta de energia em
                    </strong>
                  <span className="text-2xl font-semibold text-sun-500 md:text-4xl">95%</span>
                  </div>
              </div>

            </div>
          </div>          
        </div>

      <div className="max-w-[1450px] mx-auto py-24 px-6">
        <div className="w-full h-full flex flex-col gap-14 xs:gap-24 lg:max-w-full lg:flex-row">
          <div className="flex flex-col items-start justify-center gap-6 lg:max-w-full">
            <Title>Acompanhe a geração de energia na palma da sua mão</Title>

            <Subtitle>
              Experimente a sensação da independência energética, deixando de pagar a conta 
              de energia. E acompanhe em tempo real, a sua geração e quanto esta economizando
            </Subtitle>

            <div>
              <Button>Eu quero</Button>
            </div>
          </div>  

          <div className="flex items-start w-full h-full md:items-center">
            <div className="h-[550px] sm:h-[610px] md:h-[710px] sm:w-full">
              <img  
                src="iphone.png" 
                alt="Image do nosso aplicativo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1450px] mx-auto py-24 px-6 flex items-center border-y-2 border-y-neutral-800 md:px-4">
        <div className="flex flex-col justify-between h-full w-full gap-20">
          <div className="flex flex-col items-start justify-center gap-6 lg:items-center lg:text-center xl:gap-4">
            <Title>Como funciona o processo de homologação</Title>

            <Subtitle>
              Nós cuidaremos de todo o processo para sua comodidade e conforto, desde a parte de pagamento até a homologação
            </Subtitle>
          </div>

          <div className="grid grid-cols-1 grid-rows-auto gap-16 place-items-center lg:grid-cols-3 lg:grid-rows-1 lg:gap-8">
            <div className="flex flex-col justify-between bg-neutral-800 py-6 px-5 rounded-md text-neutral-200 w-full max-w-[900px] h-[260px] xl:w-[360px]">
              <div className="flex items-center justify-center w-14 h-14 text-neutral-300 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full">
                <span className="text-xl font-bold">
                  1
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <strong className="text-lg font-semibold text-sun-500">
                  Compra certa
                </strong>
                <p className="text-sm font-medium text-neutral-400 tracking-tight">
                  Faça a simulação de parcelas que encaixe no valor atual da sua conta de energia e 
                  prepara-se para economizar e valorizar o seu patrimônio
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-neutral-800 py-6 px-5 rounded-md text-neutral-200 w-full max-w-[900px] h-[260px] xl:w-[360px]">
              <div className="flex items-center justify-center w-14 h-14 text-neutral-300 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full">
                <span className="text-xl font-bold">
                  2
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <strong className="text-lg font-semibold text-sun-500">
                  Fique Tranquilo
                </strong>
                <p className="text-sm font-medium text-neutral-400 tracking-tight">
                  Para sua comodidade, nós executaremos o serviço de instalação e cuidaremos de todo o processo desde o projeto até a homologação junto à concessionária de energia.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-between bg-neutral-800 py-6 px-5 rounded-md text-neutral-200 w-full max-w-[900px] h-[260px] xl:w-[360px]">
              <div className="flex items-center justify-center w-14 h-14 text-neutral-300 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full">
                <span className="text-xl font-bold">
                  3
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <strong className="text-lg font-semibold text-sun-500">
                  Bônus Especial
                </strong>
                <p className="text-sm font-medium text-neutral-400 tracking-tight">
                  Olha que legal, instalamos o sistema de energia solar e você poderá começar a pagar com o financiamento após 150 dias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1450px] h-full min-h-[800px] mx-auto py-6 px-6 md:px-4">
        <div id="investiment" className=" w-full min-h-[70vh] h-full gap-8 flex flex-col justify-between py-12 xl:grid xl:grid-cols-6 xl:grid-row-6 xl:gap-16">
          <div className="col-span-4 row-span-2 xl:col-span-3 xl:row-span-4">
            <div className="flex flex-col items-start justify-center gap-12 h-full max-w-[90%]">
                <div className="flex flex-col gap-3 xl:gap-6">
                  <div className="flex flex-col gap-2 xl:gap-4">
                    <Title>Instale a energia solar e tenha um <span className="text-sun-500">rendimento em torno de 15%</span> ao ano</Title>
                  </div>

                  <ul className="flex flex-col gap-6 border-t-2 border-t-neutral-800 pt-8 mt-8">
                    <li className="flex items-center gap-4">
                      <span>
                        <BsCheck2Circle className="text-sun-500 w-6 h-6" />
                      </span>
                      <p className="font-medium text-neutral-500 tracking-tight">
                        O valor ecnomizado com a sua conta de energia renderá até 04 vezes mais o rendimento da poupança.
                      </p>
                    </li>

                    <li className="flex items-center gap-4">
                      <span>
                        <BsCheck2Circle className="text-sun-500 w-6 h-6" />
                      </span>
                      <p className="font-medium text-neutral-500 tracking-tight">
                        Após o payback do seus sistema o valor da sua conta de energia ficará no seu bolso
                      </p>
                    </li>

                    <li className="flex items-center gap-4">
                      <span>
                        <BsCheck2Circle className="text-sun-500 w-6 h-6" />
                      </span>
                      <p className="font-medium text-neutral-500 tracking-tight">
                        É um investimento de baixo risco e tem a garantia de retorno mês a mês.
                      </p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="col-span-3 row-span-4 bg-gradient-to-r from-neutral-900 to-neutral-800 px-8 py-16 rounded-2xl">
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="investiment.svg" 
                alt="Imagem de um cofrinho"
                className="max-h-[450px] object-cover xl:max-h-[450px]"
              />
            </div>
          </div>
        </div>

        <div id="cashback" className="w-full min-h-[70vh] h-full gap-8 flex flex-col-reverse justify-between py-12 xl:grid xl:grid-cols-6 xl:grid-row-6 xl:gap-16">
          <div className="col-span-3 row-span-4 bg-gradient-to-l from-neutral-900 to-neutral-800 px-8 py-16 rounded-2xl">
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="cashback.svg" 
                alt=""
                className="max-h-[450px] object-cover"
              />
            </div>
          </div>
          
          <div className="col-span-4 row-span-2 xl:col-span-3 xl:row-span-4">
            <div className="flex flex-col items-start justify-center gap-12 h-full max-w-[90%]">
                <div className="flex flex-col gap-3 xl:gap-6">
                  <div className="flex flex-col gap-4 xl:gap-6">
                    <Title>Indique um amigo e receba <span className="text-sun-500">CASHBACK</span></Title>

                    <Subtitle>
                      Você sabia que indicando um amigo e ele instalando o sistema, 
                      você pode ganhar R$500,00 de bônus?
                    </Subtitle>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* falar com o tiago sobre essa section aqui */}
      <div className="bg-[#131313] w-full">
        <div className="max-w-[1450px] h-full mx-auto py-20 px-4 lg:py-24">
          <div className="flex flex-col items-center h-full gap-20 lg:gap-32">
            <div className="w-full flex flex-col items-start justify-center md:items-center">
              <div className='flex flex-col gap-2 md:text-center'>
                <Title>
                  Nossos projetos
                </Title>

                <Subtitle>
                  Veja a seguir alguns dos projetos de nossos clientes
                </Subtitle>
              </div>
            </div>

            <div className="relative w-full h-full grid grid-cols-1 gap-y-14 gap-x-10 place-items-center lg:grid-cols-2 md:max-w-[600px] lg:max-w-full">
              {cardsData.map(data => (
                <ProjectCard key={data.id} image={data.image} values={data.values}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* falar com o tiago sobre essa section aqui */}


      <div className="w-[full] flex flex-col items-center justify-center py-12 px-6 md:px-4 bg-neutral-900">
        <div className="w-full max-w-[1450px] relative flex flex-col gap-8 overflow-x-hidden">
          <div className="h-[100px] flex items-center animate-smSlide md:animate-mdSlide lg:animate-lgSlide xl:animate-xlSlide">
            {slide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
            {slide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
          </div>

          <div className="h-[100px] flex items-center animate-smSlide md:animate-mdSlide lg:animate-lgSlide xl:animate-xlSlide">
          {reverseSlide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
          {reverseSlide.map(image => ( <img key={image.id} src={image.source} className="h-[50px] w-[215px] px-7" /> ))}
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
            <HomePageForm />
          </div>

        </div>
      </div>
    </>
  );
}