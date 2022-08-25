import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ImageSlider } from './Components/ImageSlider/ImageSlider';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import Signup from './Pages/Signup/Signup';

function App() {
//   const[data,setData]=useState([])
//   useEffect(()=>{
//     fetch("https://blueflyapp.herokuapp.com/Data/")
//     .then((res)=>res.json())
//     .then((data)=>{
//         // console.log(data)
//     setData(data)
//   })
//     .catch((err)=>console.log(err))

// console.log(data)
// },[])

  return (
    <div className="App">
    <Navbar/>
    {/* <Signup/>
    <ImageSlider/> */}
    
    {/* {data?.map((ele)=>(
      <div key={ele.id}>
  
        <h3>{ele.title}</h3>
    <img src={ele.images1.bottom} height="200" width="200"/>
    <p>{ele.brand}</p>
    <p>{ele.price}</p>

    <Button>Add to Cart</Button> */}
      
      {/* </div>
    ))} */}

    </div>
  );
}

export default App;
