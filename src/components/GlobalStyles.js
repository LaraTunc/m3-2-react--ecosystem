import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* { 
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    box-sizing: border-box; 
    &:before, &:after {box-sizing: border-box};
}

body {
    margin: 0;
    padding: 0;
}

h1 { 
    font-size:30px;
}

main { 
    padding: 10px;
}
`

export default GlobalStyles; 