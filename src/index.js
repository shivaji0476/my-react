import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About1 from "./Components/Aboutus/About1";
import Contactus from "./Components/Contactus/Contactus";
import Blog from "./Components/Blog/Blog";
import Search from "./Components/Search/Search";
import Reacthook from "./Reacthook/Reacthook";
// import PackersMoversControllers from "../Controllers/PackersMoversControllers"

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/hooks" element={<Reacthook/>} />
        {/* <Route path="/packers-movers/store" element={<PackersMoversControllers/>} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default Index;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
