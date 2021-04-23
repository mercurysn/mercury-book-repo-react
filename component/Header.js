/* eslint-disable react/react-in-jsx-scope */
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 2em;
  margin-left:2rem;
  position: relative;
  z-index: 2;
  /* transform: skew(-20deg); */
  background-color: blue;
  color: white;
  padding: 20px;
`;

const Header = () => (
  <header>
    <Logo>Mercury Book Library</Logo>
    <Nav />
  </header>
);

export default Header;
