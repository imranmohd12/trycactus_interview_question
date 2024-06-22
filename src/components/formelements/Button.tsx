import { SyntheticEvent } from "react"


type buttonPropType = {
    value: string,
    styleClasses?: string,
    handleClick?: () => void
}

const Button = ({ value, styleClasses = "", handleClick = () => { } }: buttonPropType) => {
    const callingHandleClick = (e: SyntheticEvent) => {
        console.log("called button click")
        handleClick();
    }
    return (
        <button className={`rounded-[8px] py-[12px] px-[16px] text-[16px] font-semibold ${styleClasses}`} onClick={callingHandleClick} type="button">{value}</button>
    )
}

export default Button