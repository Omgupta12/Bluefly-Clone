import './App.css';
import { Text } from '@chakra-ui/react'
import { Footer } from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes/AllRoutes';


function App() {


  return (
    <div className="App" >
      <Navbar />
      <Text bg={'black'} color='white' letterSpacing={2} py={3}>WELCOME TO BLUEFLY : Luxuary brands at discounted prices</Text>
      
      <AllRoutes />

      <Footer />


    </div>
  );
}

export default App;
