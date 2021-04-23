import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TimeChart from '../../../component/TimeChart';

const StyleWrapper = styled.div`
  font-size: 13px;
`;

class Month extends React.Component {
  render() {
    return (
      <StyleWrapper>
        <h1>Monthly Book Reads</h1>
        <TimeChart data={this.props.monthStats} width={1000} />
      </StyleWrapper>
    );
  }
}

Month.propTypes = {
  monthStats: PropTypes.array.isRequired,
};

export default Month;
