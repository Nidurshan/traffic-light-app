import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Action from "./pages/Action/Action";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/action" element={<Action/>} />
      </Routes>
    </Router>
  );
}

export default App;
