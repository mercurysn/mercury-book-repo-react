/* eslint-disable react/react-in-jsx-scope */
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
  {
    name: 'Jan 09',
    uv: 4000,
  },
  {
    name: 'Jan 10',
    uv: 3000,
  },
  {
    name: 'Page C',
    uv: 2000,
  },
  {
    name: 'Page D',
    uv: 2780,
  },
  {
    name: 'Page E',
    uv: 1890,
  },
  {
    name: 'Page F',
    uv: 2390,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
  {
    name: 'Page G',
    uv: 3490,
  },
];

const MonthChart = () => (
  <BarChart
    width={800}
    height={500}
    data={data}
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
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
);

export default MonthChart;
