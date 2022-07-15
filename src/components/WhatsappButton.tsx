import { FaWhatsapp } from 'react-icons/fa'

export function WhatsappButton(){
    return(
        <a
            className="flex items-center justify-center gap-3 px-4 py-2 fixed bottom-4 right-4 bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200"
            href="https://api.whatsapp.com/send?phone=551151981055" 
            target="_blank"
            rel="noreferrer"
        >
            <span className="flex items-center justify-center">
                <FaWhatsapp size={33}/>
            </span>

            <span>Orçamento via whatsapp</span>
        </a>
    )
}