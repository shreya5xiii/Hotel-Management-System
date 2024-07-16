import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootFile from "./components/RootFile";
import BeforeWelcome from "./components/BeforeWelcome";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootFile />} />
        <Route path="/welcome" element={<BeforeWelcome />} />
      </Routes>
    </Router>
  );
}

export default App;
