
type textInputProps = {
    labelName: string,
    styleClasses?: string,
    typeInput?: string,
    disabled?: boolean,
    value?: any
}

const TextInput = ({ labelName, styleClasses = "", typeInput = "text", disabled = false, value }: textInputProps) => {
    console.log(value);
    return (
        <div className="flex flex-col justify-start gap-[5px]">
            <label className="text-labelgray font-semibold">{labelName}</label>
            <input type={typeInput} className={`border-inputbordergray border-[1px] h-[48px] p-[10px] rounded-[8px] ${styleClasses}`} disabled={disabled} value={value} />
        </div>
    )
}

export default TextInput