
type postfixInputPropsType = {
    postfix: string,
    labelName: string,
}

const PostfixInput = ({ postfix, labelName }: postfixInputPropsType) => {
    return (
        <div className="flex flex-col justify-start gap-[5px]">
            <label className="font-semibold">{labelName}</label>
            <div className="flex border border-inputbordergray rounded-[8px] h-[48px] text-[16px] items-center px">
                <input type="text" className="outline-none px-[10px] w-auto" />
                <div className="px-[5px]">{postfix}</div>
            </div>
        </div>
    )
}

export default PostfixInput