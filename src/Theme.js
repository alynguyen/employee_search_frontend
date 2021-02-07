import React from 'react';
import { ThemeProvider, css } from 'styled-components';
import styled from 'styled-components';

export const Title = styled.div`
    font-size: 1.5em;
    font-weight: 700;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 0;
    justify-content: space-between;
    height: 4rem;
`

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

const fadeRight = css`
    opacity: 0;
    visibility: hidden;
    animation: 200ms ease-out 0s 1 fadeRight forwards;
    transform: translate(-20px, 0);
    @keyframes fadeRight {
        100% {
            opacity: 1;
            visibility: visible;
            transform: translate(0, 0);
        }
    }
`;


const spin = css`
    animation: spin 1s infinite linear;
    @-webkit-keyframes spin {
        0% {
            -webkit-transform:rotate(0deg);
            transform:rotate(0deg)
        }
        100% {
            -webkit-transform:rotate(359deg);
            transform:rotate(359deg)
        }
    }
    @keyframes spin {
        0% {
            -webkit-transform:rotate(0deg);
            transform:rotate(0deg)
        }
        100% {
            -webkit-transform:rotate(359deg);
            transform:rotate(359deg)
        }
    }
`

export const selectStyles = {
    control: (base, state) => ({
        ...base,
        boxShadow: 'none',
        border: '2px solid ' + theme.colors.primary,
        borderColor: '#fff',
        '&:hover': theme.colors.primary
    }),
    option: (base, state) => ({
        ...base,
        margin: 'auto',
        textTransform: 'capitalize',
    }),
    menuList: (base, state) => ({
        ...base,
        maxHeight: '10rem',
        textTransform: 'capitalize',
    }),
    menu: (base, state) => ({
        ...base,
        color: theme.colors.text
    })
};


export const theme = {
    colors: {
        primary: "#6F6F6F",
        secondary: "#6C757D;",
        text: "#424242",
        lightGrey: "#BBB",
        error: "#DC3545"
    },
    fonts: 'Roboto, sans-serif',
    animations: {
        fadeUp,
        fadeRight,
        spin
    }
};


export const multiSelectStyles = css`
  --rmsc-main: ${theme.colors.primary};
  --rmsc-primary: ${theme.colors.primary};
  --rmsc-hover: ${theme.colors.lightGrey};
  --rmsc-selected: ${theme.colors.lightGrey};
  --rmsc-border: ${theme.colors.primary};
  --rmsc-gray: #aaa;
  --rmsc-background: #fff;
  --rmsc-spacing: 0px 5px;
  --rmsc-border-radius: .5rem;
  --rmsc-height: 38px;
`;


const Theme = ({ children }) => (
    <ThemeProvider theme={theme} >{children}</ThemeProvider>
);


export default Theme;