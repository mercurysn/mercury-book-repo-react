/* eslint-disable react/react-in-jsx-scope */
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import PropTypes from 'prop-types';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const renderYearLine = (year) => {
  return (
    <Line dataKey={year} stroke={getRandomColor()} dot={false} />
  );
};

const YearByYear = (props) => {
  const date = new Date();
  var year = date.getFullYear();

  let years = [];

  for (var i = 2008; i <= year; i++) {
    years.push(i);
  }

  return (
  <LineChart
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
    <XAxis dataKey="name" />
    <YAxis domain={[0, 70]} />
    <Tooltip />
    <Legend />
    {years.map(year => renderYearLine(year))}
  </LineChart>
  );
};

YearByYear.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.int,
  height: PropTypes.int,
};

export default YearByYear;
