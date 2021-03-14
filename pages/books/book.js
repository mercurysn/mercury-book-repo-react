import React from 'react';
import Link from 'next/link';
import Book from '../../component/Book';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  font: 15px Helvetica, Arial, sans-serif;
`;

class BookPage extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <StyleWrapper>
        <Link href="/">
          <Book coverUrl={books[1].CoverUrl} />
        </Link>
      </StyleWrapper>
    );
  }
}

export default BookPage;
