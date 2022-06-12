import { Card } from "./Card";

export type WorkSummary = {
  typeOfWork: string;
  annualSavings: number;
  paybackTime: number;
  generalSavings: {
    before: number;
    after: number;
  }
}

export function ProjectsCards () {
    const cardData = [
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

    return (
        <>
            {cardData.map(data => (
                <Card key={data.id} image={data.image} values={data.values}/>
            ))}
        </>
    )
}