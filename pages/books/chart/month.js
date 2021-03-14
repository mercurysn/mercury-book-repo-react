import React from 'react';
import MonthChart from '../../../component/MonthChart';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font: 15px 'Ubuntu', Helvetica, Arial, sans-serif;
`;

class Month extends React.Component {
  render() {
    return (
      <StyleWrapper>
        <h1>Books by Month</h1>
        <MonthChart />
      </StyleWrapper>
    );
  }
}

export default Month;
