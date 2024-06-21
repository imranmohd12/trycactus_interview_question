import { FaCircleCheck } from "react-icons/fa6"

type stepPropType = {
    stepname: string,
    visible: boolean
}
const Step = ({ stepname, visible }: stepPropType) => {
    return (
        <>
            {visible && <div className="w-[8px] h-[12px] border-r-[3px] border-black"></div>}
            <div className="flex gap-[5px] items-center font-semibold">
                <FaCircleCheck size={16} />
                <p>{stepname}</p>
            </div>
        </>
    )
}

export default Step