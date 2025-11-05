import React from "react";

type _ = {
    percentage : number;
    className : string;
    text : string;
}

export const ProgressBar : React.FC<_> = (
    {percentage, className, text}
) => {
    return <div className={className}>
        <p style={{width: `${percentage}%`}}>{text}</p>
    </div>
}