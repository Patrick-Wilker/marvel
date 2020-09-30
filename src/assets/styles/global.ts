import {createGlobalStyle} from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        min-height: 100%;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;