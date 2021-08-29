import React from 'react';
import Book from '../../component/Book';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  font: 15px, 'Ubuntu', Helvetica, Arial, sans-serif;
`;

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
  flex-grow: 1;
  width: 200px;
`;

const RowRight = styled.div`
  display: flex;
  background-color: green;
  flex-grow: 5;
  flex-wrap: wrap;
`;

const RowRightItem = styled.div`
  display: flex;
  background-color: pink;
  border: 1px sold blue;
`;

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Read Books (table)</h1>
        <Main>
          <Row>
            <RowLeft>
              <p>There is some text here</p>
            </RowLeft>
            <RowRight>
              {books.map(book => (
                <RowRightItem>
                  <StyleWrapper>
                    <Book coverUrl={book.CoverUrl} id={book.Id} bookTitle={book.Name}/>
                  </StyleWrapper>
                </RowRightItem>
              ))}
            </RowRight>
          </Row>
          <Row></Row>
          <Row></Row>
        </Main>
      </div>
    );
  }
}

export default IndexPage;
