import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import { Title } from '../Theme';
import ReactLoading from 'react-loading';
import ContextProvider from '../ContextProvider';


const Results = () => {
    const { loading, results } = useContext(ContextProvider);

    const showResults = () => {
        if (loading) {
            return(
                <NoResults>
                    <ReactLoading type={'bubbles'} color={'#6F6F6F'} height={'10%'} width={'10%'} />
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


    const Table = useCallback(() => {
        return(
            <TableContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
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
    }, [results])


    return (
        <Container>
            <Row>
                <Filter />
                <Column>
                    <Header>
                        <Title>Results</Title>
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

const Header = styled.div`
    align-self: flex-start;
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
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
    };
    td {
        border-top: 1px solid grey;
    };
    tbody {

    }
`