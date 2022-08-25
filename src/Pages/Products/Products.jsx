import { Container, SimpleGrid ,Image, Box} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://bluefly-api.herokuapp.com/product").then((res) => {
      console.log(res.data)
      setProducts(res.data)
    })
  }, [])
  return (
    <>
      <SimpleGrid>
        {products.map((el) => (
          <Container key={el._id}>
            <Box >
            <Image src={el.img1}/>
            </Box>

            <Image src={el.img1}/>

          </Container>
        ))}

      </SimpleGrid>

    </>
  )
}

export default Products

// code: "BF-100821764-6QT6"
// color: "White"
// createdAt: "2022-05-07T04:46:29.284Z"
// des: "This classic womens diamond ring features 15 round brilliant cut natural diamonds. All diamonds are set in solid white gold. .25ct total diamond weight. The band features an 8x2mm gap."
// discounted_price: 537
// id: 1
// img1: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/mr1228wlarge2_7c8a1a8a-004f-44e5-9d6e-5c0cfc8d206d_large.jpg?v=1650985441"
// img2: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/mr1228wlarge1_54fe8c85-8eed-422f-a5d6-6041dbbc0e54_large.jpg?v=1650985441"
// img3: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wr320010k-1_20_1_360x.jpg?v=1651571050"
// img4: "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/WR320010k_360x.jpg?v=1651571047"
// owner: "POMPEII3"
// price: 298.5
// qty: 5
// saveupto: 44
// size: (4) [4, 5, 6, 7]
// title: ".25Ct Curved Real Diamond Notched Wedding Ring Enhancer 10K White Gold 10 Karat"
// type: "ring"
// updatedAt: "2022-07-27T07:57:08.044Z"
// _id: "6275f9a513cacb1cfa5d0890"