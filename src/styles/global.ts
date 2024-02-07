import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


:root {
    --gray: #86888d
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #10141e;
    color: #ffff;
}

button, input {
    font-family: 'Poppins',sans-serif;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

img {
    display: block;
}
`;
