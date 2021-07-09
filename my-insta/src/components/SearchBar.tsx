import React from "react";
import styled from "styled-components";

const SearchBar = () => {

    const SearchGrid = styled.div`
    width:33.3%;
    `

    const SearchBox = styled.div`
    height:28px;
    flex: 0 1 auto;
    min-width: 125px;
    width: 215px;
    
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0;
    position: relative;
    
    font: inherit;
    margin: auto;
    `

    const SearchInput = styled.input`
    border: solid 1px rgba(var(--b6a,219,219,219),1);
    border-radius: 3px;
    color: rgba(var(--i1d,38,38,38),1);
    outline: 0;
    padding: 3px 10px 3px 26px;
    
    box-sizing: border-box;
    height: 100%;
    width: 100%;

    background: rgba(var(--b3f,250,250,250),1);
    font-size: 16px;
    
    line-height: 18px;
    
    
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
    
    //background: rgba(var(--b3f,250,250,250),1);
    `

    const SearchBoxSpanWrap = styled.div`
    display: inline;
    left: -5px;
    
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    flex-direction: column;
    lex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
    `

    const SearchBoxSpan = styled.span`
    display: inline-block;
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
    white-space: nowrap;
    `

    return (
        <SearchGrid>
            <SearchBox>
                <SearchInput placeholder='검색' type='text' autoCapitalize='none'></SearchInput>
                <SearchBoxInner>
                    <SearchBoxSpanWrap>
                        <SearchBoxSpan>검색</SearchBoxSpan>
                    </SearchBoxSpanWrap>
                </SearchBoxInner>
            </SearchBox>
        </SearchGrid>
    )
}
export default SearchBar;