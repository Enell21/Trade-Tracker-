import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

import "./App.css";

import Table from "./tabel/Tabel";
import Home from "./Home/Home";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          {/* <Route path="/form" element={<CreateOrder />} /> */}
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
