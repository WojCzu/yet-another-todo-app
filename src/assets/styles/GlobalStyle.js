import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::after, *::before{
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    button, a {
        font-family: 'Roboto', sans-serif;
    }
    h1{
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
