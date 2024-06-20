import logo from '../../assets/logo.svg'
import HeaderRightComponents from './HeaderRightComponents';
import NavBar from './NavBar';

const Header = () => {

    return <div className='bg-white flex justify-between items-center px-[50px] py-[10px]'>
        <img src={logo} alt="cactus" title="cactus" />
        <NavBar />
        <HeaderRightComponents />
    </div>
}

export default Header;