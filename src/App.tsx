import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Home, Editor } from "routes";
import { breakpoints as bp } from "styled";

const App: React.FC = () => {
  return (
    <Wrapper>
      <CSSReset />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={Editor} />
      </Switch>
    </Wrapper>
  );
};

const CSSReset = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;    
  }  
  
  html {
    box-sizing: border-box;
    font-size: 62.5% !important; /*1 rem = 10px */    

    @media only screen and (max-width: ${bp.largest}) {
      font-size: 50% !important;
    }
  }

  body {
    font-family: ${props => props.theme.font.text} !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.4rem; 
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};   
  }  
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export default App;
