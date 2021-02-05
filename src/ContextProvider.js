import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [view, setView] = useState('results');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState('');

    const submitSearch = async() => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/search', {
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
                setResults(data);
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
                    loading,
                    setLoading,
                    submitSearch,
                    searchText,
                    setSearchText
                }}
            >
                {children}
            </Context.Provider>
        </ThemeProvider>
    );
}

export default Context;
