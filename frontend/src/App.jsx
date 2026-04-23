import { Routes, Route } from "react-router-dom";
import QRPage from "./pages/QRPage";
import Sucursales from "./pages/Sucursales";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QRPage />} />
      <Route path="/sucursales" element={<Sucursales />} />
    </Routes>
  );
}

export default App;