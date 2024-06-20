import { Link } from "react-router-dom"

type buttonPropType = {
    value: string,
    styleClasses?: string,
}

const Button = ({ value, styleClasses = "" }: buttonPropType) => {
    return (
        <Link to="/addproperty"><button className={`rounded-[8px] py-[12px] px-[16px] text-[16px] font-semibold ${styleClasses}`}>{value}</button></Link>
    )
}

export default Button