import logo from './logo.svg';
import './App.css';
import { VStack, Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <VStack p={5} w="100%">

        <Flex w="100%">

          <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">
            My Portfolio
          </Heading>

          <Spacer/>
          <IconButton icon={<FaLinkedin/>} isRound="true" onClick={() => openInNewTab('https://www.linkedin.com/in/dennis-lam-824871203')}></IconButton>
          <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={() => openInNewTab('https://www.instagram.com/dennis.lamerice/')}></IconButton>
          <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={() => openInNewTab('https://github.com/Funinja')}></IconButton>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>

        </Flex>
        <Header />
        <Profile />
        <Social />
      </VStack>
    </div>
  );
}

export default App;
