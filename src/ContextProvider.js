import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [view, setView] = useState('search');

    return (
        <ThemeProvider theme={theme}>
            <Context.Provider
                value={{
                    view,
                    setView
                }}
            >
                {children}
            </Context.Provider>
        </ThemeProvider>
    );
}

export default Context;
