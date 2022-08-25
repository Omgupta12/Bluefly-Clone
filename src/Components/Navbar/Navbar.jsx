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

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (

 
     <Box className={styles.Navbar}>
     
      <Flex >
        <Image  style={{ display: "block", marginLeft: "auto", marginRight: "auto",width:"200px",height:"30px",marginTop:"18px" }}
          src={"https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243"}/>

        <Stack direction={'row'} spacing={4} 
          py={{ base: 5 }}
          px={{ base: 1 }}
          mr={8}
          display={{ base: 'none', md: 'flex' }} >
          <BsSearch size={22} /><Text>SEARCH</Text>
          <AiOutlineUser size={22} />
          <BsBag size={22} />
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

  return (
    <Stack direction={'row'} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={4}
                noOfLines={1}
                href={navItem.href ?? '#'}
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
        
       
      <Stack direction={'row'} align={'center'} spacing={16} >
          <Text fontSize='sm'> {label} </Text>
          <Text fontSize='sm'>{label}</Text>
          {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
       
        {/* <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex> */}
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
    label: 'CLOTHING',
    children: 
    [
      { 
        heading1:"WOMEN'S CLOTHING",
        heading2:"MEN'S CLOTHING",
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
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
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
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
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
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
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
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
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
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
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
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
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },{
    label: 'CLOTHING',
    children: 
    [
      { 
        heading1:"WOMEN'S CLOTHING",
        heading2:"MEN'S CLOTHING",
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },{
    label: 'CLOTHING',
    children: 
    [
      { 
        heading1:"WOMEN'S CLOTHING",
        heading2:"MEN'S CLOTHING",
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work1',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy1',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Explore Design Work2',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy2',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },


];