import logo from '../../assets/logo.svg'
import HeaderRightComponents from './HeaderRightComponents';
import NavBar from './NavBar';

const Header = () => {

    return <div className='bg-white flex justify-between items-center px-[50px] py-[10px] w-[100%] z-10 sticky top-0'>
        <img src={logo} alt="cactus" title="cactus" />
        <NavBar />
        <HeaderRightComponents />
    </div>
}

export default Header;