/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
    overflow: hidden;
    background-color: #333;
    margin-left: 30px;
    border-radius: 10px;

    a {
        float: left;
        font-size: 16px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
`;

const DropBtn = styled.div`
`;

const Dropcontent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
    a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    a:hover {
        background-color: #ddd;
    }
`;

const Dropdown = styled.div`
    float: left;
    overflow: hidden;

    ${DropBtn} {
        font-size: 16px;  
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }

    ${NavBar} a:hover, :hover ${DropBtn} {
        background-color: blue;
    }

    :hover ${Dropcontent} {
      display: block;
    }
`;

const Nav = () => (
    <NavBar>
        <Link href="/books">Home</Link>
        <Dropdown>
            <DropBtn>Graphs</DropBtn>
            <Dropcontent>
                <Link href="/books/chart/year">Year Graph</Link>
                <Link href="/books/chart/month">Month Graph</Link>
                <Link href="/books/chart/yearByYear">Yearly Compare</Link>
            </Dropcontent>
        </Dropdown>
        <Dropdown>
            <DropBtn>List</DropBtn>
            <Dropcontent>
                <Link href="/books/lists/byrating">By Rating</Link>
                <Link href="/books/lists/byyear">By Year</Link>
            </Dropcontent>
        </Dropdown>
    </NavBar>
);

export default Nav;
