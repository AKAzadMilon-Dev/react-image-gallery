import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./components/pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
