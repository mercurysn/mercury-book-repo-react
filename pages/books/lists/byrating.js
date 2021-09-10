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

class ByRatingsPage extends React.Component {
  render() {
    const {books} = this.props;
    const uniqueBooks = books.filter((v,i,a)=>a.findIndex(t=>(t.Name === v.Name && t.Author[0] === v.Author[0]))===i)
    const stars = [5, 4.5, 4, 3.5, 3, 2.5, 2]

    return (
      <div>
        <h1>Ratings</h1>
        <Main>
          {stars.map(star => {
            return <Row>
            <RowLeft>
              <p>{star} Stars</p>
            </RowLeft>
            <RowRight>
              {uniqueBooks.filter(x => x.Ratings === star).map(book => (
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

export default ByRatingsPage;
