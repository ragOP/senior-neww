import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Unlo from "./pages/unlockk";
import Terms from "./pages/terms";
import Privacy from "./pages/Privacy";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/sfmedi-unlock" element={< Unlo/>} />
          <Route path="/terms-and-conditions" element={< Terms/>} />
          <Route path="/privacy-policy" element={< Privacy/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
