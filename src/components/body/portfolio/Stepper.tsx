import { useEffect, useState } from "react";
import { STEPS } from "../../../utils/constants";
import Step from "./Step";
import { useDispatch, useSelector } from "react-redux";
import { incrementStepper } from "../../store/stepperSlice";

const Stepper = () => {
    const [steps, setSteps] = useState(STEPS);
    const dispatch = useDispatch();
    const currentstepper = useSelector((state: any) => {
        return state.currentstepper;
    });
    useEffect(() => {

        return () => {
            dispatch(incrementStepper(0));
        }
    }, [])
    console.log(currentstepper);
    return (
        <div className="flex flex-col gap-[5px] p-[50px]">
            {
                steps.map((step, idx) => {
                    return <Step stepname={step} visible={idx !== 0} highlight={idx <= currentstepper} isCurrent={idx === currentstepper} />
                })
            }
        </div>
    )
}

export default Stepper