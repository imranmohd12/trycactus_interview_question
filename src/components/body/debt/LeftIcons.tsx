import cube from '../../../assets/cube.svg';
import list from '../../../assets/list.svg';
import database from '../../../assets/database.svg';
import trendup from '../../../assets/trendup.svg';


const LeftIcons = () => {
    return (
        <div className='bg-white w-fit p-[20px] flex flex-col gap-[20px] border-r border-inputbordergray sticky top-[70px] h-[88vh]'>
            <img src={cube} />
            <img src={list} />
            <img src={database} />
            <img src={trendup} />
        </div>
    )
}

export default LeftIcons