import giftIcon from '../../assets/gift.svg';

type giftPropTypes = {
    money: Number,
}

const Gift = ({ money }: giftPropTypes) => {

    return <div className='flex gap-[10px] items-center'>
        <img src={giftIcon} alt="gifticon" />
        <p>{`$${money}`}</p>
    </div>
}

export default Gift;