import { useData } from "../context/DataContext";

import Chart from "./Chart";
import Form from "../Form/Form";
import Table from "../tabel/Tabel";

const Home = () => {
  const { trades, chartData } = useData();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <Chart data={chartData} />
        <Form />
        <Table data={trades} />
      </div>
    </div>
  );
};

export default Home;
