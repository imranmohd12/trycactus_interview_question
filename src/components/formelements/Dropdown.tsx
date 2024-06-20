
type dropDownPropType = {
    droplist: string[],
    labelName: string,
}
const Dropdown = ({ droplist, labelName }: dropDownPropType) => {
    return (
        <div className="flex flex-col justify-start gap-[5px]">
            <label className="text-labelgray font-semibold">{labelName}</label>
            <select className="border border-inputbordergray rounded-[8px] w-[184px] h-[48px] text-[16px] px-[15px]">
                {
                    droplist.map((item) => {
                        return <option value={item} > {item}</option>
                    })
                }
            </select>
        </div >
    )
}

export default Dropdown