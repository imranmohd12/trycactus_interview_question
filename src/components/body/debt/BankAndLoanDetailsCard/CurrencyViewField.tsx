
type currencyViewFieldPropType = {
    labelName: string,
    value: string,
    currency: string
}

const CurrencyViewField = ({ labelName, value, currency }: currencyViewFieldPropType) => {
    return (
        <div>
            <p className="text-[12px]">{labelName}</p>
            <p className="text-[24px] font-semibold">{currency}{value}</p>
        </div>
    )
}

export default CurrencyViewField