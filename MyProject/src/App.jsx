import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";
import Host from "./pages/Host.jsx";

export default function App(){
    return(
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />} >

            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="host" element={<Host />}/>
            <Route path="vans" element={<Vans />}/>

          </Route>

        </Routes>

      </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)