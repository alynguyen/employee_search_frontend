import React, { useContext, useCallback } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Filter from './Filter';
import { Title, Header } from '../Theme';
import ContextProvider from '../ContextProvider';
import { sortAsc, sortDsc } from '../utils';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const Results = () => {
    const { loading, results, setResults, sort, setSort } = useContext(ContextProvider);
    const themeContext = useContext(ThemeContext);

    const showResults = () => {
        if (loading) {
            return(
                <NoResults>
                    Loading..
                </NoResults>
            )
        }
        if (results.length) {
            return(
                <Table />
            )
        }
        return(
            <NoResults>No results found</NoResults>
        )
    }

    const showSortIcon = useCallback((header) => {
        if (header !== sort.value) {
            return(
                <IconWrapper 
                    onClick={() => {
                        setSort({ value: header, asc: true });
                        setResults(sortAsc(results, header));
                    }}
                >
                    <FaChevronUp 
                        size={12} 
                        color={themeContext.colors.lightGrey}
                    />
                </IconWrapper>
            )
        }
        if (sort.asc) {
            return(
                <IconWrapper
                    onClick={() => {
                        setSort({ value: header, asc: false });
                        setResults(sortDsc(results, header));
                    }}            
                >
                    <FaChevronUp 
                        size={12} 
                        color={themeContext.colors.primary}
                    />
                </IconWrapper>
            )
        } else {
            return(
                <IconWrapper
                    onClick={() => {
                        setSort({ value: header, asc: true });
                        setResults(sortAsc(results, header));
                    }}
                >
                    <FaChevronDown 
                        size={12} 
                        color={themeContext.colors.primary}
                    />
                </IconWrapper>
            )
        }
    }, [sort, results, setResults, setSort, themeContext])


    const Table = useCallback(() => {
        return(
            <TableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Employee ID {showSortIcon('id')}</th>
                            <th>Last Name {showSortIcon('lastName')}</th>
                            <th>First Name {showSortIcon('firstName')}</th>
                            <th>Job Title {showSortIcon('title')}</th>
                            <th>Email {showSortIcon('email')}</th>
                            <th>Phone Number {showSortIcon('phone')}</th>
                            <th>Date of Birth {showSortIcon('dob')}</th>
                            <th>Gender {showSortIcon('gender')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((r, idx) => (
                            <tr key={`results-${r.id}-${idx}`}>
                                <td>{r.id}</td>
                                <td>{r.lastName}</td>
                                <td>{r.firstName}</td>
                                <td>{r.title}</td>
                                <td>{r.email}</td>
                                <td>{r.phone}</td>
                                <td>{r.dob}</td>
                                <td>{r.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </TableContainer>
        )
    }, [results, showSortIcon])


    return (
        <Container>
            <Row>
                <Filter />
                <Column>
                    <Header>
                        <Title style={{marginLeft: '2rem'}}>Results</Title>
                        {/* <SortWrapper>
                            <Title style={{marginRight: '1rem'}}>Sort By: </Title>
                            <StyledSelect
                                value={sort}
                                onChange={(e) => {
                                    setSort(e);
                                    if (e.value === sort.value) {
                                        setResults(sortDsc(results, e.value));
                                        console.log('same')
                                    } else {
                                        setResults(sortDsc(results, e.value));
                                    }
                                }}
                                options={sortOptions}
                                isSearchable={false}
                                styles={selectStyles}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: '.5rem',
                                    colors: {
                                    ...theme.colors,
                                    primary25: themeContext.colors.lightGrey,
                                    primary: themeContext.colors.primary,
                                    },
                                })}
                            />
                        </SortWrapper> */}
                    </Header>
                    {showResults()}
                </Column>
            </Row>
        </Container>
    );
}

export default Results;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`

const Row = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    height: 50vh;
`

const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
`

const NoResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1.3em;
    font-weight: 500;
`

const TableContainer = styled.div`
    margin: 1.5rem 1rem 1rem 1rem;
    padding: 0 1rem 1rem 1rem;
    max-height: 80%;
    overflow-y: scroll;
`

const StyledTable = styled.table`
    ${({ theme }) => theme.animations.fadeUp };
    font-size: 1.1em;
    overflow: auto;
    text-align: left;
    border-spacing: 0;
    td, th {
        padding: .5rem;
        min-width: 4rem;
    };
    th {
        position: sticky;
        top: 0;
        background-color: #fff;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary };
        div {
            float: right;
            margin: auto auto auto 1rem;
            display: table-cell;
            vertical-align: middle;
        }
    };
    td {
        border-top: 1px solid grey;
    };
`

const IconWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`