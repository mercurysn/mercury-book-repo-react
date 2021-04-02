import React from 'react';
import YearByYear from '../../../component/YearByYear';
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
        <h1>Year By Year Compare</h1>
        <YearByYear data={this.props.dailyStats} width={1000} />
      </StyleWrapper>
    );
  }
}

Year.propTypes = {
  dailyStats: PropTypes.array.isRequired,
};

export default Year;
