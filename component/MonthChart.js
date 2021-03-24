/* eslint-disable react/react-in-jsx-scope */
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import PropTypes from 'prop-types';

const MonthChart = (props) => (

  <BarChart
    width={800}
    height={500}
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

MonthChart.propTypes = {
  yearStats: PropTypes.array.isRequired,
};

export default MonthChart;
