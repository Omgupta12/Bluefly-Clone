import React from 'react'
import { Box, Image, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
// import image from "../../assets/categoryImage"

const CategoryPage = () => {
    const navigate =useNavigate()

    const data = [
        {
            id:1,
            title: "DRESSES",
         image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1ZEc0bu47SMzBJDkeK0G2Nkzn3WnelK3-25_large.jpg?v=1642112099"

        },
        {
            id:2,
            title: "PUMPS & HEELS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395698_RLLZ_1_360x.jpg?v=1661381815',
        },
        {
             id:3,
            title: "HANDBAGS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/466507BMJ1G1000-1_720x.jpg?v=1653594655',
        },
        {
             id:4,
            title: "SUNGLASSES",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/GG0956S-001-1_1512x.jpg?v=1637857425',

        },
        {
             id:5,
            title: "WOMENS'S SNEAKERS ",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313807526_RLLZ_1_360x.jpg?v=1660837243',
        },
        {
             id:6,
            title: "MENS'S SNEAKERS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2232557_540x.jpg?v=1649100955',
        },
        {
             id:7,
            title: "MENS'S T-SHIRTS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1cf51a05-da65-450c-a676-a342798b21df_360x.jpg?v=1607745936',

        },
        // {
        //      id:8,
        //     title: "WOMENS'S TOPS",
        //     image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411134678_RLLZ_1_0514cb83-0670-4dcc-9232-8eb86b13f64d_360x.jpg?v=1667306977',
        // },
        {
             id:9,
            title: "WOMENS'S DENIM",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411120178_RLLZ_1_360x.jpg?v=1661206958',
        },
        {
             id:10,
            title: "JEWELRY",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/pd6460y1_360x.jpg?v=1661347714',

        },

    ];

    const handleProduct =()=>{
navigate("/products")
    }

    return (
        <>
       <Text  mt={5} fontSize={{ base: 'xl', lg: '4xl' }}>SHOP BY CATEGORY</Text>

            <SimpleGrid mb={10} columns={[2, null, 5]}
                // border={"1px solid red"}
                p={4}
                spacingX='15px' spacingY='20px'>

                {data.map((el) => (
                    <Container key={el.id}
                    align='center'
                    cursor={"pointer"}
                    onClick={handleProduct}
                        // border={"1px solid red"}
                        size="container.lg" height="300px" display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                       
                             <Image src={el.image}  width={'fitContent'}  boxSize='300px' />
                           
                            <Text fontSize={{ base: 'sm', lg: 'md' }} letterSpacing={1}  >
                                {el.title}
                            </Text>
                  

                    </Container>

                ))}

            </SimpleGrid>
        </>
    )
}

export default CategoryPage;