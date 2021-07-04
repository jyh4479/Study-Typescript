import React from "react"
import {Link} from "react-router-dom";
import {Logo} from "./index";
import styled from "styled-components";

const GNB = () => {
    return (
        <>
            <Logo title={'MyInsta!'}/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='mountain'>Mountain</Link></li>
                <li><Link to='sea'>Sea</Link></li>
            </ul>
        </>
    )
}
export default GNB