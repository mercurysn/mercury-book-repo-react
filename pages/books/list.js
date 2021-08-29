import React from 'react';
import Book from '../../component/Book';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  background-color: blue;
  flex-grow: 1;
  border: 1px solid yellow;
`;

const RowLeft = styled.div`
  display: flex;
  background-color: red;
  flex: 0 0 10em;
`;

const RowRight = styled.div`
  display: flex;
  background-color: green;
  flex-grow: 5;
  flex-wrap: wrap;
`;

const RowRightItem = styled.div`
  display: flex;
  background-color: orange;
  border: 1px solid blue;
  align-items: baseline;  
  font: 15px, 'Ubuntu', Helvetica, Arial, sans-serif;
`;

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;
    const bookSlice = books.slice(0, 7);

    console.log(bookSlice);

    return (
      <div>
        <h1>Read Books (table)</h1>
        <Main>
          <Row>
            <RowLeft>
              <p>There is some text here</p>
            </RowLeft>
            <RowRight>
              {bookSlice.map(book => (
                <RowRightItem>
                  <Book coverUrl={book.CoverUrl} id={book.Id} bookTitle={book.Name}/>
                </RowRightItem>
              ))}
            </RowRight>
          </Row>
          <Row>
          <RowLeft>
              <p>There is some text here</p>
            </RowLeft>
            <RowRight>
              {books.slice(0,15).map(book => (
                <RowRightItem>
                  <Book coverUrl={book.CoverUrl} id={book.Id} bookTitle={book.Name}/>
                </RowRightItem>
              ))}
            </RowRight>
          </Row>
          <Row></Row>
        </Main>
      </div>
    );
  }
}

export default IndexPage;
