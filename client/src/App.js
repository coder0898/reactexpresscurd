import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route,Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="add" element={<AddEdit/>} />
        <Route path="edit/:id" element={<AddEdit/>} />
        <Route path="view/:id" element={<View/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
