import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { sortAsc, getFilters, getAgeFilters } from './utils';

export const Context = createContext();

// Switch to localhost URL if running on local

const URL = 'http://18.222.252.17:3001/search';
// const URL = 'http://localhost:3001/search';


export const ContextProvider = ({ children }) => {
    const [view, setView] = useState('search');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sort, setSort] = useState({ value: 'id', label: 'Employee ID'});
    const [originalResults, setOriginalResults] = useState(null);
    const [titleOptions, setTitleOptions] = useState([]);
    const [genderOptions, setGenderOptions] = useState([]);
    const [titleFilter, setTitleFilter] = useState([]);
    const [genderFilter, setGenderFilter] = useState([]);
    const [ageFilter, setAgeFilter] = useState([]);
    const [ageOptions, setAgeOptions] = useState([]);
    const [error, setError] = useState(false);

    const clearFilters = () => {
        setAgeFilter([]);
        setTitleFilter([]);
        setGenderFilter([]);
        setResults(sortAsc(originalResults, sort));
    }

    const submitSearch = async() => {
        if (!searchText) {
            setError(true);
            return;
        }
        setError(false);
        setLoading(true);
        try {
            const res = await fetch(URL, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    searchText,
                })
            })
            if (res.status === 200) {
                const data = await res.json();
                setOriginalResults(sortAsc(data, sort));
                setResults(sortAsc(data, sort));
                setView('results');
                setGenderOptions(getFilters(data, 'gender'));
                setTitleOptions(getFilters(data, 'title'));
                setAgeOptions(getAgeFilters(data));
            }
        }
        catch(err) {
            console.log('Error submitting search', err)
            setResults([]);
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Context.Provider
                value={{
                    view,
                    setView,
                    results,
                    setResults,
                    loading,
                    setLoading,
                    submitSearch,
                    searchText,
                    setSearchText,
                    sort,
                    setSort,
                    titleFilter,
                    setTitleFilter,
                    genderFilter,
                    setGenderFilter,
                    titleOptions,
                    genderOptions,
                    originalResults,
                    ageFilter,
                    setAgeFilter,
                    ageOptions,
                    setAgeOptions,
                    clearFilters,
                    error
                }}
            >
                {children}
            </Context.Provider>
        </ThemeProvider>
    );
}

export default Context;
