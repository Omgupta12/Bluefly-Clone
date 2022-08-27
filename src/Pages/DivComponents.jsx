import React from 'react'
import { Box, Button, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'


const DivComponents = () => {

  const data = [
    {
      id:1,
      heading: "DRESSES FOR EVERY OCCASION",
      discount: 'UP TO 94% OFF',
      text:
        "Featuring BCBGMaxazria, Halston, Kay Unger & More",
      btn_text: "SHOP DESIGNER BOUTIQUE",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/asapimage---533-x-644-px_540x.jpg?v=1650550832',

    },
    {
      id:2,
      heading: "DESIGNER BOUTIQUE",
      discount: 'UP TO 84% OFF',
      text:
        "Best-Selling Styles from: Gucci, Valentino, Balenciaga, Stuart Weitzman & More",
      btn_text: "SHOP DRESSES",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/WEB_ASSET_2_540x.jpg?v=1650894933',
    },
    {
      id:3,
      heading: "TRENDING TOPS FOR THE NEW SEASON",
      discount: 'UP TO 85% OFF',
      text:
        "Featuring Gracia, Theory, Trina Turk & More ",
      btn_text: "SHOP WOMEN'S TOPS",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/womens_tops_2_720x.jpg?v=1630508297',
    },
  ];


  return (
    <>
      <SimpleGrid columns={[1, null, 3]}
        // border={"1px solid red"}
        p={4}
        spacingX='15px' spacingY='20px'>

        {data.map((el) => (
          <Container key={el.id}
           color={'white'}
            //  border={"1px solid red"}
            size="container.lg" height="500px" position="relative"
            backgroundImage={`url(${el.image})`}>

            <Stack
              align='center'
              // border={"1px solid red"}
              spacing={4}
              w={'full'}
              ml="-4"
              // maxW={'lg'}
              position="absolute"
              top="45%"
            >
              <Text as='b' fontSize={{ base: 'md', lg: 'xl' }} letterSpacing={1} >
                {el.heading}
              </Text>
              <Heading maxW={'6xl'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                {el.discount}
              </Heading>
              <Text as='b' letterSpacing={1} fontSize={{ base: 'md', lg: 'xl' }}  >
                {el.text}
              </Text>
              <Button letterSpacing={1} align='center' w={'fitContent'} color={'black'}>{el.btn_text}</Button>
            </Stack>
          </Container>

        ))}

      </SimpleGrid>
    </>
  )
}
export default DivComponents;