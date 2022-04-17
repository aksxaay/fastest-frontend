import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Easy from "./pages/easy.jsx";

function App() {
  return (
    <>
      {/* EASY PAGE */}
      <Router>
        <Routes>
          <Route exact path="/easy" element={<Easy />} />
        </Routes>
      </Router>
      <h1>APP</h1>
    </>
  );
}

export default App;
