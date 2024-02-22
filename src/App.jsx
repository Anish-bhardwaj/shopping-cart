
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<div className="h-screen w-full flex justify-center items-center text-3xl font-bold ">Page Not Found</div>} />

      </Routes>
    
    </div>);
};

export default App;
