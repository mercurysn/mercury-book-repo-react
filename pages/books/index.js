import React from 'react';
import Book from '../../component/Book';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  font: 15px Helvetica, Arial, sans-serif;
`;

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Hellos</h1>
        {books.map(book => (
            <StyleWrapper>
              <Book coverUrl={book.CoverUrl} id={book.Id} />
            </StyleWrapper>
        ))}
      </div>
    );
  }
}

export default IndexPage;
