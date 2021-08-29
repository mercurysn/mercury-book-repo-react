import React from 'react';
import Book from '../../component/Book';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  font: 15px, 'Ubuntu', Helvetica, Arial, sans-serif;
`;

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Read Books</h1>
        {books.map(book => (
            <StyleWrapper>
              <Book coverUrl={book.CoverUrl} id={book.Id} bookTitle={book.Name}/>
            </StyleWrapper>
        ))}
      </div>
    );
  }
}

export default IndexPage;
