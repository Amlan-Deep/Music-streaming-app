import "./output.css";
import LoginComponent from "./routes/Login.js";
import { BrowserRouter,Routes, Route, Switch } from "react-router-dom";
import {Icon} from "@iconify/react";
import SignupComponent from "./routes/Signup.js";

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hi</div>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/signup" element={<SignupComponent/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;