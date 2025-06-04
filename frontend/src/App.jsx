import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/test" element={<Test/>}/>
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*"         element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
