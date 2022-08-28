import "./Products.css";

import { Box, Container, SimpleGrid, Image, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  img1,
  img2,
  img3,
  img4,
  title,
  owner,
  price,
  discounted_price,
  saveupto,
}) => {


  return (

    <SimpleGrid columns={[1, null, 3]} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} px={8} py={5} >

      <Link to={{pathname: `/products/${id}`}} key={id} >

          <Box  >
            <Center>
              <Image src={img1} alt={'img1'} boxSize={200} />
            </Center>

          </Box>

          <Box className="text" >
            <Text className="owner">{owner}</Text>
            <Text className="tit">{title}</Text>
            <Box className="flex">
              <Text className="price">${price}</Text>
              <Text className="dis_price">${discounted_price}</Text>
              <Text className="save">Save {saveupto}%</Text>
            </Box>
          </Box>
     

      </Link>
    </SimpleGrid>

  );
};

export default ProductCard;