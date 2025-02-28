import { useState } from "react";

import Chart from "./Chart";
import CreateOrder from "./Create";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Initial Data Structure for Chart
const initialData = months.map((month) => ({ name: month, value: 0 }));

const Home = () => {
  const [data, setData] = useState(initialData);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <Chart data={data} />
        <CreateOrder data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Home;
