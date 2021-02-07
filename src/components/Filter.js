import React, { useContext } from 'react';
import styled from 'styled-components';
import { Title, Header, multiSelectStyles } from '../Theme';
import ContextProvider from '../ContextProvider';
import Select from 'react-select';
import MultiSelect from 'react-multi-select-component';
import { filterResults, filterResultsAge } from '../utils';


const Filter = () => {
    const {
        results,
        titleFilter,
        setTitleFilter,
        genderFilter,
        setGenderFilter,
        titleOptions,
        genderOptions,
        originalResults,
        setResults,
        ageFilter,
        ageOptions,
        setAgeFilter
    } = useContext(ContextProvider);

    const showFilteredResults = async(e) => {
        let newResults = results;
        if (titleFilter.length) {
            newResults = await filterResults(originalResults, titleFilter, 'title');
        }
        if (genderFilter.length) {
            newResults = await filterResults(newResults, genderFilter, 'gender');
        }
        if (ageFilter.length) {
            newResults = await filterResultsAge(newResults, ageFilter);
        }
        setResults(newResults);
    }

    return (
        <Container>
            <Header>
                <Title style={{marginLeft: '2rem'}}>Filters</Title>
            </Header>
            <Column>
                <Label>Job Title</Label>
                <StyledMultiSelect
                    value={titleFilter}
                    onChange={e => setTitleFilter(e)}
                    options={titleOptions}
                    styles={multiSelectStyles}
                    selectAllLabel='Select All'
                    overrideStrings={{
                        "allItemsAreSelected": "All selected"
                    }}
                />
            </Column>
            <Column>
                <Label>Age</Label>
                <StyledMultiSelect
                    value={ageFilter}
                    onChange={e => setAgeFilter(e)}
                    options={ageOptions}
                    styles={multiSelectStyles}
                    selectAllLabel='Select All'
                    overrideStrings={{
                        "allItemsAreSelected": "All selected"
                    }}
                />
            </Column>
            <Column>
                <Label>Gender</Label>
                <StyledMultiSelect
                    value={genderFilter}
                    onChange={e => setGenderFilter(e)}
                    options={genderOptions}
                    styles={multiSelectStyles}
                    disableSearch={true}
                    overrideStrings={{
                        "allItemsAreSelected": "All selected"
                    }}
                />
            </Column>
            <Row>
                <Button onClick={showFilteredResults}>Apply</Button>
            </Row>
        </Container>
    );
}

export default Filter;

const Container = styled.div`
    ${({ theme }) => theme.animations.fadeRight };
    display: flex;
    flex-flow: column;
    width: 15rem;
    height: 100%;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 2rem;
    margin-top: 1rem;
`

const StyledSelect = styled(Select)`
    width: 12rem;
    margin-top: .5rem;
`

const Label = styled.label`
    font-size: 1.1em;
    font-weight: 500;
`

const StyledMultiSelect = styled(MultiSelect)`
    ${ multiSelectStyles };
    margin-top: .5rem;
    width: 13rem;
    input {
        padding: 10px;
    }
    > div {
        border-radius: .5rem;
    }
    span {
        max-width: 10rem;
        text-overflow: ellipsis;
    }
`

const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Button = styled.button`
    color: #fff;
    margin-top: 1rem;
    padding: .15rem .75rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.primary };
    cursor: pointer;
    min-height: 2rem;
    min-width: 5rem;
    font-weight: 700;
`