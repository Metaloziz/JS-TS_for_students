import React from "react";

export type userTypeProps = {
    id: number
    name: string
    age: number
    lessons : Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: userTypeProps
    house: number
}

export const ManComponent: React.FC<PropsType> = ({title, man: {name}, ...props}) => {

    // const {title, man: {name}} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <h2>{name}</h2>
        <span>{props.house}</span>
        <span>{props.house}</span>
    </div>
}