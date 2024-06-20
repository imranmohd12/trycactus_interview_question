
type currencyInputPropsType = {
    currency: string,
    labelName: string,
}

const CurrencyInput = ({ currency, labelName }: currencyInputPropsType) => {
    return (
        <div className="flex flex-col justify-start">
            <label className="text-labelgray font-semibold">{labelName}</label>
            <div className="flex border border-inputbordergray rounded-[8px] h-[48px] w-[210px] text-[16px] items-center">
                <div className="px-[5px]">{currency}</div>
                <input type="text" className="outline-none" />
            </div>
        </div>
    )
}

export default CurrencyInput