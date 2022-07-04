import { createContext, ReactNode, useContext, useState } from "react";
import calculatorDataJson from '../../calculatorDataJson.json'

import { MdAttachMoney } from "react-icons/md";
import { FaPiggyBank, FaRegCalendarAlt, FaSolarPanel } from "react-icons/fa";
import { GiTakeMyMoney, GiPayMoney } from 'react-icons/gi'


interface CalculatorProviderProps {
    children: ReactNode;
}

type CardData = {
    text: string;
    icon: ReactNode;
    value: string;
}

type calculatorData = {
    name: string;
    cardsData: CardData[], 
}

interface CalculatorContextData {
    calculatorResult: calculatorData | null;
    selectRange: string[];
    calculateByRange: (value: { name: string; rangeSelected: string; }) => void;
}

const CalculatorContext = createContext({} as CalculatorContextData);

export const CalculatorProvider = ({ children }: CalculatorProviderProps) => {
    const [calculatorResult, setCalculatorResult] = useState<calculatorData | null>(null)

    const selectRange = calculatorDataJson.map(item => {
        const rangeFormat = item.range.replace('>', ' - ')
        return `R$ ${rangeFormat}`
    })

    function calculateByRange(value: { name: string; rangeSelected: string; }) {
        const { rangeSelected, name } = value

        const result = calculatorDataJson.filter(data => {
            if (data.range === rangeSelected) {
                return data
            }
        })

        setCalculatorResult({
            name,
            cardsData: [
                {
                    text: 'Valor total do sistema',
                    icon: <MdAttachMoney size={28}/>,
                    value: new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(result[0].totalAmount)
                },
                {
                    text: 'Economia mensal',
                    icon: <FaPiggyBank size={28}/>,
                    value: new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(result[0].montlySavings)
                },
                {
                    text: 'Economia anual',
                    icon: <FaRegCalendarAlt size={28}/>,
                    value: new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(result[0].annualSavings)
                },
                {
                    text: 'Tamanho do sistema',
                    icon: <FaSolarPanel size={28}/>,
                    value: `${result[0].systemSize} kWp`
                },
                {
                    text: 'Payback',
                    icon: <GiTakeMyMoney size={28}/>,
                    value: `${new Intl.NumberFormat('pt-BR', {
                        maximumSignificantDigits: 2
                    }).format(result[0].payback)} Anos`
                },
                {
                    text: 'Valor médio da sua conta de luz',
                    icon: <GiPayMoney size={28}/>,
                    value: new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(result[0].rangeId)
                }
            ]
        })
    }

    return(
        <CalculatorContext.Provider value={{
            calculatorResult,
            selectRange,
            calculateByRange,
        }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export function useCalculator(){
    const context = useContext(CalculatorContext)
    const { calculatorResult, selectRange, calculateByRange } = context;
    return { calculatorResult, selectRange, calculateByRange };
}