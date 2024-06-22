import { useDispatch, useSelector } from "react-redux"
import { incrementStepper } from "../components/store/stepperSlice";


export const handleContinueBtn = () => {
    const currentStepperIdx = useSelector((state: any) => state.currentstepper);
    const dispatch = useDispatch();
    dispatch(incrementStepper(currentStepperIdx + 1));
}