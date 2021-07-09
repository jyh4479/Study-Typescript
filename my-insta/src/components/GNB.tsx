import React from "react"
import {Link} from "react-router-dom";
import {ButtonList, Logo, SearchBar} from "./index";
import styled from "styled-components";

const GNB = () => {

    const Top = styled.nav`
    display:flex;
    background-color:skyblue;
    `

    return (
        <>
            <Top>
                <Logo title={'MyInsta!'}/>
                <SearchBar></SearchBar>
                <ButtonList></ButtonList>
            </Top>


            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='mountain'>Mountain</Link></li>
                <li><Link to='sea'>Sea</Link></li>
            </ul>
        </>
    )
}
export default GNB