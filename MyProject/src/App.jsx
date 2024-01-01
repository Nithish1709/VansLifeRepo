import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Vans from "./pages/Vans.jsx";
import Host from "./pages/Host.jsx";
import Dashboard from "./pages/hostContents/Dashbord.jsx"
import Income from "./pages/hostContents/Income.jsx"
import HostVans from "./pages/hostContents/HostVans.jsx"
import Reviews from "./pages/hostContents/Reviews.jsx"


export default function App(){
    return(
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />} >

            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />}/>
              <Route path="income" element={<Income />}/>
              <Route path="vans" element={<HostVans />}/>
              <Route path="Reviews" element={<Reviews />}/>
            </Route>
            <Route path="vans" element={<Vans />}/>

          </Route>

        </Routes>

      </BrowserRouter>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)