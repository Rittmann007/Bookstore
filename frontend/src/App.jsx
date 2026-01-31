import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import Createbook from "../pages/Createbook"
import Showbook from "../pages/Showbook"
import Editbook from "../pages/Editbook"
import Deletebook from "../pages/Deletebook"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/books/create" element={<Createbook/>}></Route>
        <Route path="/books/details/:id" element={<Showbook/>}></Route>
        <Route path="/books/edit/:id" element={<Editbook/>}></Route>
        <Route path="/books/delete/:id" element={<Deletebook/>}></Route>
      </Routes>
    </>
  )
}

export default App
