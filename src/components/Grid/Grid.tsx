import { FCProps } from "@/lib/FCProps";
import React from "react";

type GridProps = {
    templateColumns : string[];
    templateRows : string[];
    columnGap ?: string;
    rowGap ?: string;
    gap ?: string;
} & FCProps;

export const Grid : React.FC<GridProps> = ({
    templateColumns,
    templateRows,
    children,
    columnGap,
    rowGap,
    gap,
    className
}) => {
    return <div className={className} style={{
        display: "grid",
        gridTemplateColumns: templateColumns.join(" "),
        gridTemplateRows: templateRows.join(" "),
        columnGap, rowGap, gap
    }}>
        {children}
    </div>
}