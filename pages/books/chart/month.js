import React from 'react';
import MonthChart from '../../../component/MonthChart';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font: 15px 'Ubuntu', Helvetica, Arial, sans-serif;
`;

class Month extends React.Component {
  render() {
    return (
      <StyleWrapper>
        <h1>Year by Year Book Reads</h1>
        <MonthChart data={this.props.yearStats} />
      </StyleWrapper>
    );
  }
}

Month.propTypes = {
  yearStats: PropTypes.array.isRequired,
};

export default Month;
