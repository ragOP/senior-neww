import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<First />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
