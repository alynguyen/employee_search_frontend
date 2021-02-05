import React from 'react';
import styled from 'styled-components';
import { Title } from '../Theme';

const Filter = () => {
    return (
        <Container>
            <Title>Filters</Title>
        </Container>
    );
}

export default Filter;

const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 15rem;
    background-color: grey;
    height: 100%;
`