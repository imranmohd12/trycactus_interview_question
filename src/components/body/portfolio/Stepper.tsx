import { useState } from "react";
import { STEPS } from "../../../utils/constants";
import Step from "./Step";

const Stepper = () => {
    const [steps, setSteps] = useState(STEPS);
    return (
        <div className="flex flex-col gap-[5px] p-[50px]">
            {
                steps.map((step, idx) => {
                    return <Step stepname={step} visible={idx !== 0} />
                })
            }
        </div>
    )
}

export default Stepper