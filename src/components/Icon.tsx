import React from "react";

require("icons/money.svg")
require("icons/tag.svg")
require("icons/chart.svg")

type  Props = {
    name: string
}

function Icon(props: Props) {
    return (
        <svg className="icon" fill="red">
            <use href={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon
