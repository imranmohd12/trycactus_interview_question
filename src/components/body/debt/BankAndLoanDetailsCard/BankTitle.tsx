import bankicon from '../../../../assets/bankicon.png';

const BankTitle = () => {
    return (
        <div className='flex items-center gap-[5px]'>
            <img src={bankicon} />
            <p className='text-[16px] font-semibold'>Bank of America</p>
        </div>
    )
}

export default BankTitle