import React from 'react';
import Book from '../../../component/Book';
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
  flex: 0 0 5em;
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

function getYears() {
  const currentYear = new Date().getFullYear();
  const firstYear = 2009;

  const years = [];

  for (var i = currentYear; i >= firstYear; i--) {
    years.push(i);
  }
  return years;
}

class ByYearPage extends React.Component {
  render() {
    const {books} = this.props;
    const uniqueBooks = books.filter((v, i, a) => a.findIndex(t => (t.Name === v.Name && t.Author[0] === v.Author[0])) === i);
    const years = getYears();

    return (
      <div>
        <h1>Year Read</h1>
        <Main>
          {years.map(year => {
            return <Row>
            <RowLeft>
              <p>{year}</p>
            </RowLeft>
            <RowRight>
              {uniqueBooks.filter(x => new Date(x.DateCompleted).getFullYear() === year).map(book => (
                <RowRightItem>
                  <Book coverUrl={book.CoverUrl} extrasmall id={book.Id} book={book}/>
                </RowRightItem>
              ))}
            </RowRight>
          </Row>;
          })}
        </Main>
      </div>
    );
  }
}

export default ByYearPage;
