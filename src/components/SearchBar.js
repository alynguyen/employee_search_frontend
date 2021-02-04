import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <>
            <TextInput 
                placeholder='Search'
            />
        </>
    );
}

export default SearchBar;

const TextInput = styled.input`
    height: 2.5rem;
    width: 18rem;
    padding: .2rem 1rem;
    border-radius: 1rem;
    font-size: 1.2em;
    ::-webkit-input-placeholder {
        text-align: center;
    }
`