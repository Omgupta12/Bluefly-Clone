import React from 'react'
import { Box, Image, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'


const CategoryPage = () => {

    const data = [
        {
            id:1,
            title: "DRESSES",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/570941-xja36-9699__1_1f037d49-4444-4620-8fa7-454261f5ab39_360x.jpg?v=1661275286',

        },
        {
            id:2,
            title: "PUMPS & HEELS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395698_RLLZ_1_360x.jpg?v=1661381815',
        },
        {
             id:3,
            title: "HANDBAGS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/81d40zlefzl._ul1500_8fd5cf1b-76f6-467e-8b47-ea50b438d814_540x.jpg?v=1654138029',
        },
        {
             id:4,
            title: "SUNGLASSES",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111936211_RLLZ_1_1080x.jpg?v=1659992700',

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
        {
             id:8,
            title: "WOMENS'S TOPS",
            image: 'https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411349805_RLLZ_1_360x.jpg?v=1660461696',
        },
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


    return (
        <>
       <Text  mt={5} fontSize={{ base: 'xl', lg: '4xl' }}>SHOP BY CATEGORY</Text>

            <SimpleGrid mb={5} columns={[2, null, 5]}
                // border={"1px solid red"}
                p={4}
                spacingX='15px' spacingY='20px'>

                {data.map((el) => (
                    <Container key={el.id}
                    align='center'
                        // border={"1px solid red"}
                        size="container.lg" height="300px" display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                       
                             <Image src={el.image} width={'fitContent'}  boxSize='300px' />
                           
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