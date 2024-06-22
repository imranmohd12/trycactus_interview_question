import ToggleButton from "../../../formelements/ToggleButton"
import download from '../../../../assets/download.svg'
import share from '../../../../assets/share.svg'

const TableHeading = () => {
    return (
        <div className="flex items-center justify-between bg-white ml-[20px] px-[10px] rounded-[8px] border-b border-inputbordergray w-[90%]">
            <div className="text-[18px] font-semibold">Debt Schedule</div>
            <div className="flex gap-[20px] items-center p-[10px]">
                <div className="text-[14px] font-medium">Average Annualized Interest Rate</div>
                <div className="text-[14px] font-semibold bg-bggreen text-cactusgreen p-2px">2.25%</div>
                <ToggleButton option1="Annual" option2="Monthly" initialactive={2} isLableNeeded={false} />
                <img src={download} />
                <img src={share} />
            </div>
        </div>
    )
}

export default TableHeading