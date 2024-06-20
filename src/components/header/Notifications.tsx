import bellicon from '../../assets/bell.svg';

type notificationPropsType = {
    count?: Number
}
const Notifications = ({ count }: notificationPropsType) => {

    return <img src={bellicon} />
}

export default Notifications;