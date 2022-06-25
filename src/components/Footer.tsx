import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Logo } from "./Logo";

export function Footer() {
  return (
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
              <BsFacebook className="text-sun-500 w-6 h-6" />
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
  )
}