import { useState } from "react"

type toggleButtonPropsType = {
    option1: string,
    option2: string,
    initialactive: 1 | 2,
    labelName?: string,
    isLableNeeded?: boolean,
}
const ToggleButton = ({ option1, option2, initialactive = 2, labelName, isLableNeeded = true }: toggleButtonPropsType) => {
    const [firstActive, setFirstActive] = useState(initialactive === 1 ? true : false);
    const handleToggle = () => {
        setFirstActive(prev => !prev);
    }
    return (
        <div className="flex flex-col justify-start gap-[5px] cursor-pointer">
            {isLableNeeded && <label className="text-labelgray font-semibold">{labelName}</label>}
            <div onClick={handleToggle} className="bg-inputbordergray h-[48px] flex justify-center items-center w-[210px] rounded-[8px] px-[5px]">
                <div className={`h-[36px] w-[100%] rounded-[8px] flex justify-center items-center  ${firstActive ? 'bg-white' : ''}`}>{option1}</div>
                <div className={`h-[36px] w-[100%] rounded-[8px] flex justify-center items-center ${firstActive ? '' : 'bg-white'}`}>{option2}</div>
            </div>
        </div>
    )
}

export default ToggleButton