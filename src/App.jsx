import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
