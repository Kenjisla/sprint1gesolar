import { ChangeEvent,  useState } from "react";
import { CreateLeadStep } from "./Steps/CreateLeadStep";
import { SelectSallerStep } from "./Steps/SelectSallerStep";

export function SallerPageForm() {
    const [currentSaller, setCurrentSaller] = useState('')
    const [IsSallerEmpty, setIsSallerEmpty] = useState(true)


    function handleChangeSaller(event: ChangeEvent<HTMLInputElement>) {
        setCurrentSaller(event.target.value);
    }

    function goToNextStepOnForm() {
        setIsSallerEmpty(false)
        console.log(currentSaller)
    }

    return (
        <form className="w-full max-w-5xl flex flex-col py-14 px-4 sm:py-16 sm:px-12 rounded-xl bg-neutral-800">
                {IsSallerEmpty ? (
                    <SelectSallerStep 
                        saller={currentSaller} 
                        onChangeRadioValue={handleChangeSaller} 
                        onButtonClick={goToNextStepOnForm} 
                    />
                ) : (
                    <CreateLeadStep saller={currentSaller} />
                )}
        </form>
    );
}