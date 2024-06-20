
type textInputProps = {
    labelName: string,
    styleClasses?: string,
    typeInput?: string
}

const TextInput = ({ labelName, styleClasses = "", typeInput = "text" }: textInputProps) => {
    return (
        <div className="flex flex-col justify-start">
            <label className="text-labelgray font-semibold">{labelName}</label>
            <input type={typeInput} className={`border-inputbordergray border-[1px] h-[48px] p-[10px] rounded-[8px] ${styleClasses}`} />
        </div>
    )
}

export default TextInput