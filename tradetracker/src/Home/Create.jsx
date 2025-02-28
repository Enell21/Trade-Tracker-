import { useState } from "react";

// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const initialData = months.map((month) => ({ name: month, value: 0 }));

const CreateOrder = ({ data, setData }) => {
  //   const [data, setData] = useState(initialData);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [changeValue, setChangeValue] = useState("");

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
      setSelectedMonth("");
      setChangeValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="">Select Month</option>
        {data.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={changeValue}
        onChange={(e) => setChangeValue(e.target.value)}
        placeholder="Change (+ for win, - for loss)"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Update Value
      </button>
    </form>
  );
};

export default CreateOrder;
