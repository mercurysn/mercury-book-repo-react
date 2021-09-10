/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const sumAllValues = (previousValue, currentValue) => previousValue + currentValue;


const RowLeftTable = (props) => {
  const RowLeftTable = styled.table`
  border: 1px solid grey;
  background-color: lightskyblue;
`;

  
  return (
    <RowLeftTable>
      <tr>
        <td>
          {props.books.length} books
        </td>
      </tr>
      <tr>
        <td>
          {props.books.map(x => x.Minutes).reduce(sumAllValues)} minutes
        </td>
      </tr>
      <tr>
        <td>
          {props.books.map(x => x.Pages).reduce(sumAllValues)} pages
        </td>
      </tr>
    </RowLeftTable>
  );
};

RowLeftTable.propTypes = {
  books: PropTypes.array.isRequired,
};

export default RowLeftTable;
