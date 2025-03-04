import { useState } from "react";
import { useData } from "../context/DataContext";

import Chart from "./Chart";
import Form from "../Form/Form";
import Table from "../tabel/Tabel";

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
  const { trades } = useData();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <Chart data={data} />
        <Form />
        <Table data={trades} />
        {/* <CreateOrder data={data} setData={setData} /> */}
      </div>
    </div>
  );
};

export default Home;
