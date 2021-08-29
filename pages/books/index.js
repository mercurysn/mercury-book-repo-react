import React from 'react';
import Book from '../../component/Book';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  font: 15px, 'Ubuntu', Helvetica, Arial, sans-serif;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Item = styled.div`
  display: flex;
  align-items: baseline;
`;

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Read Books</h1>
        <Main>
          {books.map(book => (
              <Item>
                <Book coverUrl={book.CoverUrl} id={book.Id} bookTitle={book.Name}/>
              </Item>
          ))}
        </Main>
      </div>
    );
  }
}

export default IndexPage;
