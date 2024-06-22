import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import HeaderRightComponents from './HeaderRightComponents';
import NavBar from './NavBar';

const Header = () => {

    return <div className='bg-white flex justify-between items-center px-[50px] py-[10px] w-full z-10 sticky top-0 h-[70px]'>
        <Link to="/"><img src={logo} alt="cactus" title="cactus" /></Link>
        <NavBar />
        <HeaderRightComponents />
    </div>
}

export default Header;