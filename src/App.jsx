import "./App.css";
import Product from "./Components/Product";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Static Route for Home */}
        <Route path="/products/:id" element={<Product />} />{" "}
        {/* Dynamic Route */}
      </Routes>
   
      
    </>
  );
}

export default App;
