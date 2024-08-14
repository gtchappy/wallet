import React from "react";
import cs from "classnames"

require("icons/money.svg")
require("icons/tag.svg")
require("icons/chart.svg")
require("icons/left.svg")

type  Props = {
    name?: string
} & React.SVGAttributes<SVGElement>

const  Icon =(props: Props) =>{
    const {name, children, className, ...rest} = props
    return (
        <svg className={cs('icon', className)} {...rest}>
            {props.name && <use href={`#${props.name}`}></use>}
        </svg>
    )
}

export default Icon
