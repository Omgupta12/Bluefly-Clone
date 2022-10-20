import { Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import CategoryPage from '../../Pages/CategoryPage/CategoryPage'
import DivComponents from '../../Pages/DivComponents'


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