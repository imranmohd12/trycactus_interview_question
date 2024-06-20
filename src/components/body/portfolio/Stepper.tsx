import { FaCircleCheck } from "react-icons/fa6";

const Stepper = () => {
    return (
        <div className="flex flex-col gap-[5px] p-[50px]">
            <div className="flex gap-[5px] items-center text-cactusgreen font-semibold">
                <FaCircleCheck size={16} className="text-cactusgreen" />
                <p>Property details</p>
            </div>
            <div className="w-[8px] h-[12px] border-r-[3px] border-cactusgreen"></div>
            <div className="flex gap-[5px] items-center font-semibold">
                <FaCircleCheck size={16} />
                <p>Rent roll</p>
            </div>
            <div className="w-[8px] h-[12px] border-r-[3px] border-black"></div>
            <div className="flex gap-[5px] items-center font-semibold">
                <FaCircleCheck size={16} />
                <p>Income and expences</p>
            </div>
            <div className="w-[8px] h-[12px] border-r-[3px] border-black"></div>
            <div className="flex gap-[5px] items-center font-semibold">
                <FaCircleCheck size={16} />
                <p>Finacing</p>
            </div>
            <div className="w-[8px] h-[12px] border-r-[3px] border-black"></div>
            <div className="flex gap-[5px] items-center font-semibold">
                <FaCircleCheck size={16} />
                <p>Ownership structure</p>
            </div>
        </div>
    )
}

export default Stepper