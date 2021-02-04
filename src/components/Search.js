import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Search = () => {
    return (
        <Container>
            <SearchBar />
        </Container>
    );
}

export default Search;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10rem;
    align-self: center;
    margin: auto;
`