import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [view, setView] = useState('results');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    return (
        <ThemeProvider theme={theme}>
            <Context.Provider
                value={{
                    view,
                    setView,
                    results,
                    loading
                }}
            >
                {children}
            </Context.Provider>
        </ThemeProvider>
    );
}

export default Context;
