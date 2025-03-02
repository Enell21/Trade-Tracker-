import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header";
import Table from "./tabel/Tabel";
import Home from "./Home/Home";
import CreateOrder from "./Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        {/* <Route path="/form" element={<CreateOrder />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
