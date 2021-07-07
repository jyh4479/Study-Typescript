import React from "react";
import styled from "styled-components";

const SearchBar = () => {

    const SearchGrid = styled.div`
    width:33.3%
    `

    const SearchBox = styled.div`
    height:28px
    -webkit-box-flex: 0
    flex: 0 1 auto
    min-width: 125px
    width: 215px
    
    -webkit-box-align: stretch;
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    position: relative;
    
    font: inherit;
    vertical-align: baseline;
    `

    const SearchInput = styled.input`
    border: solid 1px rgba(var(--b6a,219,219,219),1)
    border-radius: 3px
    color: rgba(var(--i1d,38,38,38),1)
    outline: 0
    padding: 3px 10px 3px 26px
    
    box-sizing: border-box
    height: 100%
    width: 100%
    `

    const SearchBoxInner = styled.div`
    border: solid 1px rgba(var(--b6a,219,219,219),1);
    justify-content: center;
    
    border-radius: 3px;
    color: rgba(var(--f52,142,142,142),1);
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    left: 0;
    padding: 7px;
    position: absolute;
    text-align: center;
    top: 0;
    z-index: 2;
    
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    `

    return(
        <SearchGrid>
            <SearchBox>
                <SearchInput placeholder='검색'></SearchInput>
                <SearchBoxInner></SearchBoxInner>
            </SearchBox>
        </SearchGrid>
    )
}
export default SearchBar;