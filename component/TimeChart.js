/* eslint-disable react/react-in-jsx-scope */
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import PropTypes from 'prop-types';

const TimeChart = (props) => (

  <BarChart
    width={props.width ? props.width : 800}
    height={props.height ? props.height : 500}
    data={props.data}
    layout={'horizontal'}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }
  }
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="field" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#03dffc" animationDuration={3000} />
  </BarChart>
);

TimeChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.int,
  height: PropTypes.int,
};

export default TimeChart;
