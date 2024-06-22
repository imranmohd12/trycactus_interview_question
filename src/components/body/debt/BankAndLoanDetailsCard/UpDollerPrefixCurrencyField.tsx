
type upDollerPrefixCurrencyFieldPropType = {
    currency: string,
    value: string,
}
const UpDollerPrefixCurrencyField = ({ currency, value }: upDollerPrefixCurrencyFieldPropType) => {
    return (
        <div className="flex relative">
            <span className="absolute  text-[16px] left-[-10px] top-[8px]">{currency}</span>
            <span className="text-[32px]">{value}</span>
        </div>
    )
}

export default UpDollerPrefixCurrencyField