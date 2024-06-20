import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVBARITEMS, navBarItemType } from "../../utils/constants";

const NavBar = () => {
    const [navItems, setNavItems] = useState<navBarItemType[]>(NAVBARITEMS);

    const handleNavItemClick = (navname: string) => {
        const temp = [...navItems];
        temp.forEach((item) => {
            if (item.navname === navname) {
                item.active = true;
            } else {
                item.active = false;
            }
        })
        setNavItems(temp);
    }

    return (
        <ul className="flex gap-[12px] text-[14px] font-semibold">
            {

                navItems.map((navItem: navBarItemType) => {
                    return <Link to={navItem.route} className={`p-[10px] cursor-pointer ${navItem.active && 'text-cactusgreen'}`} onClick={() => handleNavItemClick(navItem.navname)}>{navItem.navname}</Link>
                })
            }


        </ul>
    )
}

export default NavBar;