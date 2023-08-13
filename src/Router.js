import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './Form/Form';
import Home from './Home/Home';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router