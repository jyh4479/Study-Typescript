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
    
    `

    return(
        <SearchGrid>
            <SearchBox>

            </SearchBox>
        </SearchGrid>
    )
}
export default SearchBar;