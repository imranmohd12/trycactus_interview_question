import { Link } from 'react-router-dom';
import backarrow from '../../../assets/backarrow.svg';
import Stepper from './Stepper';
import FormSection from './FormSection';

const AddProperty = () => {
    return (
        <div className='px-[50px]'>
            <Link to="/portfolio" className='flex gap-[5px] py-[20px] font-semibold w-fit'>
                <img src={backarrow} />
                <p>Add Property</p>
            </Link>
            <div className='bg-white flex'>
                <Stepper />
                <FormSection />
            </div>

        </div>
    )
}

export default AddProperty