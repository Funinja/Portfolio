import './App.css';
import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
	  <div className="Home">
      <VStack p={5} w="100%">

        <Flex w="100%">

          <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">
						Portfolio
          </Heading>

          <Spacer/>
  
          <IconButton icon={<FaLinkedin/>} isRound="true" onClick={() => openInNewTab('https://www.linkedin.com/in/dennis-lam-824871203')}></IconButton>
          <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={() => openInNewTab('https://www.instagram.com/dennis.lamerice/')}></IconButton>
          <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={() => openInNewTab('https://github.com/Funinja')}></IconButton>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
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
