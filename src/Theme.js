import React from 'react';
import { ThemeProvider, css } from 'styled-components';


const fadeUp = css`
    opacity: 0;
    visibility: hidden;
    animation: 200ms ease-out 0s 1 fadeUp forwards;
    transform: translate(0, 20px);
    @keyframes fadeUp {
        100% {
            opacity: 1;
            visibility: visible;
            transform: translate(0, 0);
        }
    }
`;


export const theme = {
    colors: {
        primary: "#4597b7",
        secondary: "#6C757D;",
        text: "#424242",
        textSecondary: "#868ba1",
        link: "#17A2B8",
        bold: "#238fe7",
        buttonPrimary: "#4597b7",
        buttonSecondary: "#6C757D",
        navText: "#6c757d",
        toggleOff: "#BBBBBB",
        error: "#DC3545"
    },
    fonts: ["Poppins", "sans-serif"],
    animations: {
        fadeUp,
    }
};


const Theme = ({ children }) => (
    <ThemeProvider theme={theme} >{children}</ThemeProvider>
);


export default Theme;