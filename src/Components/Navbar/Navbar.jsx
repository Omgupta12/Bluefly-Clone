import {
  Box,
  Image,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import styles from "./Navbar.module.css"

import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const navigate =useNavigate()

  const handleLogin=()=>{
    navigate("/login")
  }
 
 

  return (

 
     <Box className={styles.Navbar} border='1px solid red'>
     
      <Flex >
        <Image  style={{ display: "block", marginLeft: "auto", marginRight: "auto",width:"200px",height:"30px",marginTop:"18px" }}
          src={"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243"}/>

        <Stack direction={'row'} spacing={4} 
          py={{ base: 5 }}
          px={{ base: 1 }}
          mr={8}
          display={{ base: 'none', md: 'flex' }} >
        <Link><BsSearch size={22}>SEARCH</BsSearch></Link>
        <Link onClick={handleLogin} ><AiOutlineUser size={22} /></Link> 
         <Link  > <BsBag size={22} /></Link>
        </Stack>
      </Flex>

      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>

        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <DesktopNav />
          </Flex>
     
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      </Box>
    
  );

}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  // const navigate =useNavigate()

  // function handleJewelry(){
  //   navigate("/products")
  // }
  return (
    <Stack direction={'row'} spacing={3}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={4}
                noOfLines={1}
                href={navItem.href ?? '/products'}
                fontSize={'md'}
                fontWeight={400}
                color={linkColor}
                _hover={{
                  textDecoration: 'underline',
                  color: linkHoverColor,
                
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel,heading1,heading2 }: NavItem) => {
  return (
    <>
  
     <Link  _hover={{ textDecoration:"none" }} style={{display:"flex" ,flexDirection: "row",justifyContent:"space-around"}}>
        <Text as='b' fontSize='sm'>{heading1}</Text>
        <Text as='b' fontSize='sm'>{heading2}</Text>
        </Link>
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={1}
      rounded={'md'}
      _hover={{ textDecoration:"none" }}>
        
       
      <Stack direction={'row'} justifyContent={'space-evenly'}  >
          <Text fontSize='sm'> {label} </Text>
          <Text fontSize='sm'>{subLabel}</Text>
      </Stack>
    </Link>
        </>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
                
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  heading1:string;
  heading2:string;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> =
 [

  {
    label: 'JEWELRY & WATCHES',
    children: 
    [
      { 
        heading1:"JEWELRY",
        heading2:"WATCHES",
        label: 'Shop All',
        subLabel: 'Shop All',
        href: '#',
      },
      {
        label: 'Rings',
        subLabel: 'Armani',
        href: '#',
      },
      {
        label: 'Bracelets',
        subLabel: 'Calvin Klein',
        href: '#',
      },
      {
        label: 'Earrings',
        subLabel: 'Casio',
        href: '#',
      },
      {
        label: 'Necklaces',
        subLabel: 'Diesel',
        href: '#',
      },
      {
        label: 'Brooches',
        subLabel: 'Gucci',
        href: '#',
      },
      {
        label: 'Rings',
        subLabel: 'Armani',
        href: '#',
      },
      {
        label: 'Bracelets',
        subLabel: 'Calvin Klein',
        href: '#',
      },
      {
        label: 'Earrings',
        subLabel: 'Casio',
        href: '#',
      },
    ],
  },
  {
    label: 'CLOTHING',
    children: 
    [
      { 
        heading1:"WOMEN'S CLOTHING",
        heading2:"MEN'S CLOTHING",
        label: 'Activewear',
        subLabel: 'Activewear',
        href: '#',
      },
      {
        label: 'Sports Coats',
        subLabel: 'Pants',
        href: '#',
      },
      {
        label: 'Dresses',
        subLabel: 'Polo Shirts',
        href: '#',
      },
      {
        label: 'Shorts',
        subLabel: 'Dress Shirts',
        href: '#',
      },
      {
        label: 'Skirts',
        subLabel: 'T-Shirts',
        href: '#',
      },
      {
        label: 'Jeans & Denim',
        subLabel: 'Sweaters',
        href: '#',
      },
      {
        label: 'Sports Coats',
        subLabel: 'Pants',
        href: '#',
      },
      {
        label: 'Dresses',
        subLabel: 'Polo Shirts',
        href: '#',
      },
      {
        label: 'Shorts',
        subLabel: 'Dress Shirts',
        href: '#',
      },
    ],
  },
  {
    label: 'SHOES',
    children: 
    [
      { 
        heading1:"WOMEN'S SHOES",
        heading2:"MEN'S SHOES",
        label: 'Shop All',
        subLabel: 'Shop All',
        href: '#',
      },
      {
        label: 'Sneakers',
        subLabel: 'Boots',
        href: '#',
      },
      {
        label: 'Boots',
        subLabel: 'Sneakers',
        href: '#',
      },
      {
        label: 'Slippers',
        subLabel: ' Derby Shoes',
        href: '#',
      },
      {
        label: ' Derby Shoes',
        subLabel: 'Loafers',
        href: '#',
      },
      {
        label: 'Flats',
        subLabel: 'Slippers',
        href: '#',
      },
      {
        label: 'Sneakers',
        subLabel: 'Boots',
        href: '#',
      },
      {
        label: 'Boots',
        subLabel: 'Sneakers',
        href: '#',
      },
      {
        label: 'Slippers',
        subLabel: ' Derby Shoes',
        href: '#',
      },
    ],
  },
  {
    label: 'HANDBAGS & ACCESSORIES',
    children: 
    [
      { 
        heading1:"ALL HANDBAGS",
        heading2:"TOP DESIGNERS",
        label: 'Shop All',
        subLabel: 'Shop All',
        href: '#',
      },
      {
        label: 'Backpacks',
        subLabel: 'Parada',
        href: '#',
      },
      {
        label: 'Bucket Bags',
        subLabel: 'Gucci',
        href: '#',
      },
      {
        label: 'Hobo Bags',
        subLabel: 'Fendi',
        href: '#',
      },
      {
        label: 'Satchels',
        subLabel: 'Chloe',
        href: '#',
      },
      {
        label: 'Toe Bags',
        subLabel: 'Celine',
        href: '#',
      },
      {
        label: 'Backpacks',
        subLabel: 'Parada',
        href: '#',
      },
      {
        label: 'Bucket Bags',
        subLabel: 'Gucci',
        href: '#',
      },
      {
        label: 'Hobo Bags',
        subLabel: 'Fendi',
        href: '#',
      },
    ],
  },
  {
    label: 'DESIGNERS',
    children: 
    [
      { 
        heading1:"FEATURED DESIGNERS",
        heading2:"By A-Z",
        label: 'Balenciaga',
        subLabel: 'A',
        href: '#',
      },
      {
        label: 'Bottega',
        subLabel: 'B',
        href: '#',
      },
      {
        label: 'Burberry',
        subLabel: 'C',
        href: '#',
      },
      {
        label: 'Celine',
        subLabel: 'D',
        href: '#',
      },
      {
        label: 'Dior',
        subLabel: 'E',
        href: '#',
      },
      {
        label: 'Fendi',
        subLabel: 'Z',
        href: '#',
      },
      {
        label: 'Bottega',
        subLabel: 'B',
        href: '#',
      },
      {
        label: 'Burberry',
        subLabel: 'C',
        href: '#',
      },
      {
        label: 'Celine',
        subLabel: 'D',
        href: '#',
      },
    ],
  },
  {
    label: 'SUNGLASSES',
    children: 
    [
      { 
        heading1:"WOMEN'S SUNGLASSES",
        heading2:"MEN'S SUNGLASSES",
        label: 'Shop All',
        subLabel: 'Shop All',
        href: '#',
      },
      {
        label: 'Burberry',
        subLabel: 'Chloe',
        href: '#',
      },
      {
        label: 'Chanel',
        subLabel:  'Fendi',
        href: '#',
      },
      {
        label: 'Chloe',
        subLabel: 'Burberry',
        href: '#',
      },
      {
        label: 'Fendi',
        subLabel: 'Gucci',
        href: '#',
      },
      {
        label: 'Gucci',
        subLabel: 'Chanel',
        href: '#',
      },
      {
        label: 'Burberry',
        subLabel: 'Chloe',
        href: '#',
      },
      {
        label: 'Chanel',
        subLabel:  'Fendi',
        href: '#',
      },
      {
        label: 'Chloe',
        subLabel: 'Burberry',
        href: '#',
      },
    ],
  },
 
  {
    label: 'UNDER $ 50',
    children: 
    [
      { 
        heading1:"BY PRICEPOINT",
        heading2:"BY CATEGORY",
        label: 'Under $25',
        subLabel: 'Men',
        href: '#',
      },
      {
        label: '$25-$49.99',
        subLabel: 'Women',
        href: '#',
      },
      {
        label: 'Shop All Under $50',
        subLabel: 'Shoes',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Jewelry',
        href: '#',
      },
     
    ],
  },{
    label: 'BEAUTY',
    children: 
    [
      { 
        heading1:"SKINCARE",
        heading2:"HAIRCARE",
        label: 'Shop All',
        subLabel: 'Shop All',
        href: '#',
      },
      
    ],
  },{
    label: 'CLEARANCE',
    children: 
    [
      { 
        heading1:"WOMEN'S ",
        heading2:"MEN'S ",
        label: 'Accessories',
        subLabel: 'Accessories',
        href: '#',
      },
      {
        label: 'Dresses',
        subLabel: 'Pants',
        href: '#',
      },
      {
        label: 'Jewelry',
        subLabel: 'Polo Shirts',
        href: '#',
      },
      {
        label: 'Shoes',
        subLabel: 'Sweaters',
        href: '#',
      },
      {
        label: 'Sunglasses',
        subLabel: 'Watches',
        href: '#',
      },
      {
        label: 'Tops',
        subLabel: 'Shoes',
        href: '#',
      },
    ],
  },


];