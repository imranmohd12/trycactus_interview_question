import UpDollerPrefixCurrencyField from "./UpDollerPrefixCurrencyField"

const BottomTotal = () => {
    return (
        <div className="flex justify-between items-center bg-green-950 text-white py-[10px] px-[20px] rounded-b-[8px]">
            <p className="text-[18px]">Monthly Payment</p>
            <UpDollerPrefixCurrencyField currency="$" value="1,720" />
        </div>
    )
}

export default BottomTotal