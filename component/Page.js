import React, {Component} from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, {createGlobalStyle} from 'styled-components';

const StyledPage = styled.div`
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Ubuntu', sans-serif;
  font: 'Ubuntu', Helvetica, Arial, sans-serif;
}
`;

export default class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>
          {this.props.children}
        </Inner>
        <GlobalStyle />
      </StyledPage>
    );
  }
}
