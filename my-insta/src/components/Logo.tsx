import React from "react";
import styled from "styled-components";

interface LogoProps{
    title?: string;
}

const Logo: React.FunctionComponent<LogoProps> = props => {
    const MyInstaLogo = styled.div`
    font-family: SDSOutline;
    font-size: 50px;
    width:33.3%;
    `
    return(
        <MyInstaLogo>{props.title}</MyInstaLogo>
    )
}
export default Logo;