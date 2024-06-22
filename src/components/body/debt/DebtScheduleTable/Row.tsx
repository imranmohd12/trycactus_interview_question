

const Row = ({ row }: any) => {
    return (
        <tr>
            {
                Object.keys(row).map((colname) => {
                    return (
                        colname === "interest"
                            ? <td className="flex flex-col"><div>{row[colname].amount}</div><div className="text-cactusgreen">{`${row[colname].percentage}%`}</div></td>
                            : <td>{row[colname]}</td>
                    )
                })
            }
        </tr>
    )
}

export default Row