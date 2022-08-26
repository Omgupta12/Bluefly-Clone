import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Products from '../Pages/Products/Products'
import Signup from '../Pages/Signup/Signup'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'
import { Cart } from './Cart'
import { Payment } from './Payment'
import { PaymentDetails } from './PaymentDetails'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/paymentdetails/:id" element={<PaymentDetails/>}/>
    </Routes>
  )
}

export default AllRoutes