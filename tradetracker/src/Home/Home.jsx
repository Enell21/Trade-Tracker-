import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const initialData = months.map((month) => ({ name: month, value: 0 }));

const Home = () => {
  const [data, setData] = useState(initialData);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [changeValue, setChangeValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMonth && changeValue) {
      setData((prevData) =>
        prevData.map((item) =>
          item.name === selectedMonth
            ? { ...item, value: item.value + parseInt(changeValue, 10) }
            : item
        )
      );
      setSelectedMonth('');
      setChangeValue('');
    }
  };

  return (
    <div className='p-4'>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='value'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <form onSubmit={handleSubmit} className='mt-4'>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className='border p-2 mr-2'
        >
          <option value=''>Select Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <input
          type='number'
          value={changeValue}
          onChange={(e) => setChangeValue(e.target.value)}
          placeholder='Change (+ for win, - for loss)'
          className='border p-2 mr-2'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Update Value
        </button>
      </form>
    </div>
  );
};

export default Home;
