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

    return(
        <SearchGrid>
            <SearchBox>
                <SearchInput placeholder='검색'></SearchInput>
            </SearchBox>
        </SearchGrid>
    )
}
export default SearchBar;