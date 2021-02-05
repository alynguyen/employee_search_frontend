import React, { useContext } from 'react';
import styled from 'styled-components';
import ContextProvider from '../ContextProvider';
import SearchBar from './SearchBar';

const Nav = () => {
    const { view } = useContext(ContextProvider);

    return (
        <Container>
            {view === 'results' && <SearchBar />}
        </Container>
    );
}

export default Nav;

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.primary };
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    width: 100%;
`