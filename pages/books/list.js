import React from 'react';
import Book from '../../component/Book';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
`;

const Row = styled.div`
  display: flex;
  flex-grow: 1;
`;

const RowLeft = styled.div`
  display: flex;
  flex: 0 0 10em;
  padding: 10px;
`;

const RowRight = styled.div`
  display: flex;
  flex-grow: 5;
  flex-wrap: wrap;
  border: 1px solid grey;
`;

const RowRightItem = styled.div`
  display: flex;
  align-items: baseline;  
  font: 15px, 'Ubuntu', Helvetica, Arial, sans-serif;
`;

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;
    const uniqueBooks = books.filter((v,i,a)=>a.findIndex(t=>(t.Name === v.Name && t.Author[0] === v.Author[0]))===i)

    return (
      <div>
        <h1>Ratings</h1>
        <Main>
          <Row>
            <RowLeft>
              <p>5 Stars</p>
            </RowLeft>
            <RowRight>
              {uniqueBooks.filter(x => x.Ratings === 5).map(book => (
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
