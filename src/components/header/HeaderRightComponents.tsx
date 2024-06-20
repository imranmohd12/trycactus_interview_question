import Gift from "./Gift"
import Notifications from "./Notifications"
import Profile from "./Profile"


const HeaderRightComponents = () => {

    return <div className="flex gap-[20px]">
        <Gift money={0} />
        <Notifications count={0} />
        <Profile username="TL" />
    </div>
}

export default HeaderRightComponents;