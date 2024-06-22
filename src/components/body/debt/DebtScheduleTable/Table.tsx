import { useEffect, useState } from "react";
import { MONTHLYDATA, columntype } from "../../../../utils/constants";
import Row from "./Row";

const Table = () => {
    const [columns, setColumns] = useState<columntype[]>([]);
    const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
        setColumns(MONTHLYDATA.columns);
        setRows(MONTHLYDATA.data);
    }, [])
    return (
        <table className="bg-white px-[10px] ml-[20px] rounded-[8px] w-[90%]">
            <thead>
                <tr className="border-b border-inputbordergray">
                    {columns.length > 0
                        &&
                        columns.map((column) => {
                            return <th key={column.key} className="text-[14px] font-semibold p-[20px]">{column.displayName}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody className="text-center">
                {rows.length > 0
                    &&
                    rows.map((row: any) => {
                        return <Row row={row} />
                    })
                }
            </tbody>
        </table>
    )
}

export default Table