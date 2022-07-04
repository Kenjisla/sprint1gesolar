export type InfoSectionProps = {
    id: string
    lightBg: boolean;
    lightText: boolean;
    topLine: string;
    headline: string;
    description?: string;
    buttonLabel: string;
    imgStart: boolean;
    img: string;
    scroll_link?: string;
    alternativeDescription?: [
        { id: number, text: string },
        { id: number, text: string },
        { id: number, text: string }
    ]
    link?: string;
}

export const HomeObjectOne: InfoSectionProps = {
    id: 'about',
    lightBg: false,
    lightText: true,
    topLine: 'Liberte-se',
    headline: 'Produza sua própria energia e pare de pagar conta de luz.',
    description: 'Experimente a sensação da independência energética, deixando de pagar a conta de energia.',
    buttonLabel: 'Veja mais',
    imgStart: false,
    img: './smart-home.svg',
    scroll_link: 'advantages'
}

export const HomeObjectTwo: InfoSectionProps = {
    id: 'investiment',
    lightBg: false,
    lightText: true,
    topLine: 'Investimento',
    headline: 'Instale a energia solar e tenha rendimento em torno de 15% ao ano.',
    alternativeDescription: [
        { id: 1, text: 'O valor ecnomizado com a sua conta de energia renderá até 04 vezes mais o rendimento da poupança.' },
        { id: 2, text: 'Todo o dinheiro investido na aquisição da energia solar, retorna para seu bolso como lucro do investimento.' },
        { id: 3, text: 'É um investimento de baixo risco e tem a garantia de retorno mês a mês.' },
    ],
    buttonLabel: 'Saiba Mais',
    imgStart: false,
    img: '/investiment.svg',
    link: 'https://api.whatsapp.com/send?phone=5511970695992'

}

export const HomeObjectThree: InfoSectionProps  = {
    id: 'cashback',
    lightBg: true,
    lightText: false,
    topLine: 'Indique e ganhe',
    headline: 'Indique um amigo e receba CASH BACK.',
    description: `Você sabia que indicando um amigo e ele instalando o sistema, você pode ganhar  R$500,00 de bônus?`,
    buttonLabel: 'Eu quero',
    imgStart: true,
    img: '/wallet.svg',
    link: 'https://parceiro.gesolar.com.br/'
}

