import menuicon from '../../assets/hamburger.svg'

type profilePropsType = {
    username: string
}

const Profile = ({ username }: profilePropsType) => {

    return <div className='flex gap-[10px]'>
        <img src={menuicon} />
        <div className='flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-slate-400'>
            {username}
        </div>
    </div>
}

export default Profile;