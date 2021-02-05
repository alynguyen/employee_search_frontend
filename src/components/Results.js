import React, { useContext } from 'react';
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
        if (!results.length) {
            return(
                <Table />
            )
        }
        return(
            <NoResults>No results found</NoResults>
        )
    }


    const Table = () => {
        return(
            <TableContainer>
                <StyledTable>
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
                    <tr>
                        <td>1</td>
                        <td>Nguyen</td>
                        <td>Aly</td>
                        <td>Software Engineer</td>
                        <td>aly@email.com</td>
                        <td>295023905</td>
                        <td>12/07/1989</td>
                        <td>M</td>
                    </tr>
                </StyledTable>
            </TableContainer>
        )
    }


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
    margin: 1rem;
    padding: 1rem;
    height: 100%;
`

const StyledTable = styled.table`
    text-align: center;
    border-spacing: 0;
    td, th {
        padding: .2rem .5rem;
        min-width: 4rem;
    };
    th {
        border-bottom: 1px solid #000;
    };
`