
type monthsViewFieldPropType = {
    labelName: string,
    value: number,
}

const MonthsViewField = ({ labelName, value }: monthsViewFieldPropType) => {
    return (
        <div className="text-left">
            <p className="text-[12px]">{labelName}</p>
            <p className="text-[24px] font-semibold">{value} <span className="text-[12px] font-normal">months</span></p>
        </div>
    )
}

export default MonthsViewField