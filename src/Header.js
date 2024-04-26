import React from 'react'
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Catalog from './Catalog';
export default function Header() {
  return (
    <>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Catalog/>}>
     <Route path='product' element={<Link to='/product'>Product</Link>}>Product</Route>
    </Route>
   </Routes>
    </BrowserRouter>
    </>
  )
}
