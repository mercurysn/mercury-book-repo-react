import React from 'react';
import TimeChart from '../../../component/TimeChart';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font: 15px 'Ubuntu', Helvetica, Arial, sans-serif;
`;

class Year extends React.Component {
  render() {
    return (
      <StyleWrapper>
        <h1>Yearly Book Reads</h1>
        <TimeChart data={this.props.yearStats} />
      </StyleWrapper>
    );
  }
}

Year.propTypes = {
  yearStats: PropTypes.array.isRequired,
};

export default Year;
