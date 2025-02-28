import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Table from './tabel/Tabel';
import Home from './Home/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Table />
    </>
  );
}

export default App;
