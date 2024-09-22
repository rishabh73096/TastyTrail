import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Sucess from "./Pages/Sucess.jsx";
import Home from "./Pages/Home.jsx";
import Error from "./Pages/Error.jsx";

const App=()=> {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sucess" element={<Sucess />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
