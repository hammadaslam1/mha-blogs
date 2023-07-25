// import logo from './logo.svg';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/addnew" element={<Create />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
