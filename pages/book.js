import React from "react";
import Link from "next/link";
import Book from "../component/Book";

class BookPage extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        {}
        <Link href="/">
          <Book coverUrl={books[1].CoverUrl} />
        </Link>
      </div>
    );
  };
}

export default BookPage;