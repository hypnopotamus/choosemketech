import React from "react"
import { Link } from "gatsby"
import { ContainerWrapper } from "../grid"


export const Container = ({children}) => {
    return (<ContainerWrapper>{children}</ContainerWrapper>)
}