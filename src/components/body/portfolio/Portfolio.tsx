import { Link } from "react-router-dom"
import Button from "../../formelements/Button"


const Portfolio = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Link to="/addproperty"><Button value="Add Property" styleClasses="bg-black text-white" /></Link>
        </div>
    )
}

export default Portfolio