import React from 'react';
import Book from '../component/Book';

class IndexPage extends React.Component {
  render() {
    const {books} = this.props;

    return (
      <div>
        <h1>Hello</h1>
        {books.map(book => (

            // <Book bookTitle={book.Name} author={book.Author[0]} coverUrl={book.CoverUrl} />
            <Book coverUrl={book.CoverUrl} id={book.Id} />
        ))}
      </div>
    );
  }
}

export default IndexPage;
