import React, { useContext } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';
import Results from './Results';
import ContextProvider from '../ContextProvider';

const Home = () => {
    const { view } = useContext(ContextProvider)

    return (
        <Container>
            <Nav />
            {view === 'search'
                ?   <Search />
                :   <Results />
            }
        </Container>
    );
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    height: auto;
`