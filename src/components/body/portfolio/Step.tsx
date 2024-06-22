import { FaCircleCheck } from "react-icons/fa6"
import { MdRadioButtonChecked } from "react-icons/md";

type stepPropType = {
    stepname: string,
    visible: boolean,
    highlight: boolean,
    isCurrent: boolean
}
const Step = ({ stepname, visible, highlight, isCurrent }: stepPropType) => {
    return (
        <>
            {visible && <div className={`w-[8px] h-[12px] border-r-[3px] ${highlight ? 'border-cactusgreen' : 'border-black'}`}></div>}
            <div className="flex gap-[5px] items-center font-semibold">
                {
                    isCurrent
                        ? <MdRadioButtonChecked size={16} className="text-cactusgreen" />
                        : <FaCircleCheck size={16} className={highlight ? 'text-cactusgreen' : ''} />
                }
                <p className={highlight ? 'text-cactusgreen' : ''}>{stepname}</p>
            </div>
        </>
    )
}

export default Step