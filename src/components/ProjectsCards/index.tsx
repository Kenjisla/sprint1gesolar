import { Card } from "./Card";

export type WorkSummary = {
    tipoDaObra: string;
    economiaAnual: number;
    economiaMensal: number;
    economiaGeral: {
        antes: number;
        depois: number;
    }
}

export function ProjectsCards () {
    const cardData = [
        {
          id: 1,
          image: {
            src: '',
            alt: ''
          },
          values: {
            tipoDaObra: 'Obra Residencial',
            economiaMensal: 1250,
            economiaAnual: 1500,
            economiaGeral: {
              antes: 1250,
              depois: 85
            }
          }
        },
        {
          id: 1,
          image: {
            src: '',
            alt: ''
          },
          values: {
            tipoDaObra: 'Obra Residencial',
            economiaMensal: 1250,
            economiaAnual: 1500,
            economiaGeral: {
              antes: 1250,
              depois: 85
            }
          }
        },
        {
          id: 1,
          image: {
            src: '',
            alt: ''
          },
          values: {
            tipoDaObra: 'Obra Residencial',
            economiaMensal: 1250,
            economiaAnual: 1500,
            economiaGeral: {
              antes: 1250,
              depois: 85
            }
          }
        },
        {
          id: 1,
          image: {
            src: '',
            alt: ''
          },
          values: {
            tipoDaObra: 'Obra Residencial',
            economiaMensal: 1250,
            economiaAnual: 1500,
            economiaGeral: {
              antes: 1250,
              depois: 85
            }
          }
        },
    ]

    return (
        <>
            {cardData.map(data => (
                <Card key={data.id} image={data.image} values={data.values}/>
            ))}
        </>
    )
}