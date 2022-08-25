import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Navbar from '../Navbar/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
 
  const [slider, setSlider] = React.useState({Slider});
  const navigate =useNavigate()

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

function handleProducts(){
  navigate("/products")
}

  const cards = [
    {
      title: 'WORLD OF VALENTELO',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_2056290722_1944x.jpg?v=16603372',
    },
    {
      title: 'GUCCI',
      text:
        " THIS ICONIC BRAND IS REPRESENTED WITH GREAT DESIGN & CONTEMPORARY LIFESTYLE",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_1207523875_1944x.jpg?v=1660338294',
    },
    {
      title: 'FENDI',
      text:
        "A TOP FASHION BRAND THAT CULTIVATES THE MOST ELEVATED DESIGN OF STYLES",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_1464509732_1_1944x.jpg?v=1660342703',
    },
    {
      title: 'PRADA',
      text:
        " AN ITALIAN FASHION HOUSE MADE WITH CLASSIC & ECCENTRIC STYLE",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_324325775_1_1944x.jpg?v=1660337720',
    },
    {
      title: 'World Of Valentino',
      text:
        " Shop Handbags, Shoes, Apparel, Accessories & More",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_773947222_97e3ce6e-89fa-4a0f-a5d5-d0d373ae995e_1944x.jpg?v=1660340662',
    },
    {
      title: ' LUXE HANDBAGS',
      text:
        "Styles from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi & More",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_390723769_4_7_1944x.jpg?v=1660348351',
    },
    {
      title: ' DESIGNER SHOES',
      text:
        "Step Into The New Season With New Designer Shoes",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_442324294_1944x.jpg?v=1660338965',
    },
    {
      title: 'ICONIC SUNGLASSES',
      text:
        "Featuring Dior, Tom Ford, Fendi & More",
      image:
        'https://cdn.shopify.com/s/files/1/0248/3473/6191/files/shutterstock_1161591199_1944x.jpg?v=1660339761',
        
    },
  ];

  return (
    <Box
    // border={"1px solid red"}

      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}
      // marginTop={"150px"}
      >

      {/* CSS files for react-slick */}
   
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        color={'white'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        color={'white'}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            color={'white'}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>

            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.2xl" height="600px" position="relative">
              <Stack align='center'
                  // border={"1px solid red"}
                spacing={5}
                w={'full'}
                maxW={'xl'}
                position="absolute"
                top="40%"
                transform="translate(0, -50%)">
                <Heading   maxW={'6xl'} fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'xl' }} color="WHITE">
                  {card.text}
                </Text>
                <Button  align='center' w={'10rem'} color={'black'} onClick={handleProducts}>SHOP NOW</Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}