import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ContextProvider from '../ContextProvider';


const SearchBar = () => {
    const { 
        searchText,
        setSearchText,
        submitSearch,
        error
    } = useContext(ContextProvider);

    return (
        <SearchWrapper>
            <TextInput 
                placeholder='Search'
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <IconWrapper onClick={submitSearch}>
                <SearchIcon error={error ? 'true' : undefined}/>
            </IconWrapper>
        </SearchWrapper>
    );
}

export default SearchBar;

const TextInput = styled.input`
    height: 1.5rem;
    width: 18rem;
    padding: .2rem 1rem;
    border: none;
    font-size: 1.2em;
    font-weight: 500;
    border-right: 3px solid ${({ theme }) => theme.colors.primary };

    ::-webkit-input-placeholder {
        text-align: center;
    }
`

const IconWrapper = styled.div`
    cursor: pointer;
    padding: .5rem 1rem .5rem 1rem;
`

const SearchIcon = styled(FaSearch)`
    font-size: 1.5em;
    color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.primary };
`

const SearchWrapper = styled.div`
    ${({ theme }) => theme.animations.fadeUp };
    background-color: #fff;
    padding: 0 0 0 1rem;
    border-radius: 1rem;
    border: 3px solid ${({ theme }) => theme.colors.primary };
    display: flex;
    justify-content: center;
    align-items: center;
`