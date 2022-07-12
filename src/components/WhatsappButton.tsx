import { FaWhatsapp } from 'react-icons/fa'

export function WhatsappButton(){
    return(
        <a
            className="fixed w-14 h-14 bottom-6 right-4 bg-[#2ecc71] text-neutral-50 z-50 rounded-full hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200"
            href="https://api.whatsapp.com/send?phone=551151981055" 
            target="_blank"
            rel="noreferrer"
        >
            <span className="w-full h-full flex items-center justify-center">
                <FaWhatsapp size={33}/>
            </span>
        </a>
    )
}