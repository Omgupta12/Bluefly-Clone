import React, { useEffect, useState } from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import CategoryPage from '../../Components/CategoryPage'
import DivComponents from '../../Components/DivComponents'
import axios from "axios"

const Home = () => {


 
  return (
    <>
      <Carousel />
   
      <DivComponents />
  
      <CategoryPage />
    
      <Carousel />

    </>
  )
}
export default Home