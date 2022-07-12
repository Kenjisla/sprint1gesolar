export type InfoSectionProps = {
    id: string
    lightBg: boolean;
    lightText: boolean;
    topLine: string;
    headline: string;
    description?: string;
    imgStart: boolean;
    img: string;
    alternativeDescription?: [
        { id: number, text: string },
        { id: number, text: string },
        { id: number, text: string }
    ];
    buttonLabel: string;
    buttonLink?: string;
    isExternalLink: boolean;
}

export const HomeObjectOne: InfoSectionProps = {
    id: 'about',
    lightBg: false,
    lightText: true,
    topLine: 'Liberte-se',
    headline: 'Produza sua própria energia e pare de pagar conta de luz.',
    description: 'Experimente a sensação da independência energética, deixando de pagar a conta de energia.',
    imgStart: false,
    img: './smart-home.svg',
    buttonLabel: 'Veja mais',
    buttonLink: "/#advantages",
    isExternalLink: false
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
    imgStart: false,
    img: '/investiment.svg',
    buttonLabel: 'Saiba Mais',
    buttonLink: 'https://api.whatsapp.com/send?phone=5511970695992',
    isExternalLink: true

}

export const HomeObjectThree: InfoSectionProps  = {
    id: 'cashback',
    lightBg: true,
    lightText: false,
    topLine: 'Indique e ganhe',
    headline: 'Indique um amigo e receba CASH BACK.',
    description: `Você sabia que indicando um amigo e ele instalando o sistema, você pode ganhar  R$500,00 de bônus?`,
    imgStart: true,
    img: '/wallet.svg',
    buttonLabel: 'Eu quero',
    buttonLink: 'https://api.whatsapp.com/send?phone=5511970695992',
    isExternalLink: true
}

