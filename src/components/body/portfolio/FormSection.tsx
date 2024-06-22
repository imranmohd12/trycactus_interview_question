import { ReactNode, useEffect, useState } from "react"
import PropertyDetailsStepForm from "./PropertyDetailsStepForm"
import RentRollStepForm from "./RentRollStepForm"
import IncomeExpensesStepForm from "./IncomeExpensesStepForm"
import { useDispatch, useSelector } from "react-redux"
import { incrementStepper } from "../../store/stepperSlice"
import OwnerShipStructureForm from "./OwnerShipStructureForm"
import FinancingStepForm from "./FinancingStepForm"
import SuccessfullStepper from "./SuccessfullStepper"

const FormSection = () => {
    const [stepsForm, setStepsForm] = useState<ReactNode[]>([]);
    const currentStepperIdx = useSelector((state: any) => state.currentstepper);
    const dispatch = useDispatch();
    const handleContinueBtn = () => {
        dispatch(incrementStepper(null))
    }
    useEffect(() => {
        setStepsForm([
            <PropertyDetailsStepForm handleContinueBtn={handleContinueBtn} />,
            <RentRollStepForm handleContinueBtn={handleContinueBtn} />,
            <IncomeExpensesStepForm handleContinueBtn={handleContinueBtn} />,
            <FinancingStepForm handleContinueBtn={handleContinueBtn} />,
            <OwnerShipStructureForm handleContinueBtn={handleContinueBtn} />,
            <SuccessfullStepper />
        ])

    }, [])
    return (
        <div>
            {stepsForm[currentStepperIdx]}
        </div>
    )
}

export default FormSection