
type inputAndOptionPropsType = {
    optionList: string[],
    labelName: string,
}

const InputAndOption = ({ optionList, labelName }: inputAndOptionPropsType) => {
    return (
        <div className="flex flex-col justify-start gap-[5px]">
            <label className="font-semibold text-labelgray">{labelName}</label>
            <div className="flex border border-inputbordergray rounded-[8px] h-[48px] text-[16px] items-center px">
                <input type="text" className="outline-none px-[10px] w-[100px]" />
                <select className="border border-inputbordergray rounded-[8px] h-[48px] text-[16px] px-[10px]">
                    {
                        optionList.map((item) => {
                            return <option value={item} > {item}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default InputAndOption