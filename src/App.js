import './App.css';
import { VStack, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
	  <div className="App">
      <VStack p={5} w="100%">
				<Navbar />
        <Header />
				<VStack m={30} w="500px">
					<Button w="100%"  colorScheme='blue' size='lg' variant='ghost'> 
						<Link to="/Projects">
						<Heading > Projects </Heading> 
						</Link>
					</Button>
					<Button w="100%" colorScheme='blue' size='lg' variant='ghost'> 
						<Heading> 
							<a href="https://github.com/Funinja/Current-NeoVim"> Neovim Setup </a>
						</Heading> 
					</Button>
					<Button w="100%" colorScheme='blue' size='lg' variant='ghost'> 
						<Heading> <a href="mailto:denwt.lam@outlook.com"> Contact Me </a></Heading> 	
					</Button>
				</VStack>  
		</VStack>
    </div>
  );
}

export default App;
