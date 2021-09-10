import React from 'react';
import Book from '../../../component/Book';
import RowLeftTable from '../../../component/RowLeftTable';
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
  flex-direction: column;
`;

const RowLeftHead = styled.div`
  display: flex;
`;

const RowLeftBody = styled.div`
  display: flex;
  font-size: 10px;
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

// const RowLeftTable = styled.table`
//   border: 1px solid grey;
//   background-color: lightskyblue;
// `;

const getYears = (limit) => {
  let currentYear = new Date().getFullYear();
  let years = [];

  while (currentYear !== limit) {
    years.push(currentYear);
    currentYear--;
  }

  return years;
};

class ByYearPage extends React.Component {
  render() {
    const {books} = this.props;
    const uniqueBooks = books.filter((v,i,a)=>a.findIndex(t=>(t.Name === v.Name && t.Author[0] === v.Author[0]))===i)
    const years = getYears(2008);

    return (
      <div>
        <h1>Year</h1>
        <Main>
          {years.map(year => {
            return <Row>
            <RowLeft>
              <RowLeftHead>
                <p>{year}</p>
              </RowLeftHead>
              <RowLeftBody>
                <RowLeftTable books={uniqueBooks.filter(x => new Date(x.DateCompleted).getFullYear() === year)} />
                {/* <RowLeftTable>
                  <tr>
                    <td>
                      {uniqueBooks.filter(x => new Date(x.DateCompleted).getFullYear() === year).length} books
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {uniqueBooks.filter(x => new Date(x.DateCompleted).getFullYear() === year).map(x => x.Minutes).reduce((previousValue, currentValue) => previousValue + currentValue)} minutes
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {uniqueBooks.filter(x => new Date(x.DateCompleted).getFullYear() === year).map(x => x.Pages).reduce((previousValue, currentValue) => previousValue + currentValue)} pages
                    </td>
                  </tr>
                </RowLeftTable> */}
              </RowLeftBody>
            </RowLeft>
            <RowRight>
              {uniqueBooks.filter(x => new Date(x.DateCompleted).getFullYear() === year).map(book => (
                <RowRightItem>
                  <Book coverUrl={book.CoverUrl} extrasmall id={book.Id}/>
                </RowRightItem>
              ))}
            </RowRight>
          </Row>
          })}
        </Main>
      </div>
    );
  }
}

export default ByYearPage;
