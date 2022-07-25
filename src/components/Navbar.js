import {  Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useColorMode } from "@chakra-ui/color-mode";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
		<div className="navbar">

			<Flex spacing="200px" w="100%">
				<Box>
					<Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">
						Portfolio
					</Heading>
				</Box>
				<Spacer/>

				<Spacer />
				<Box>
					<IconButton icon={<FaLinkedin/>} isRound="true" onClick={() => openInNewTab('https://www.linkedin.com/in/dennis-lam-824871203')}></IconButton>
					<IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={() => openInNewTab('https://www.instagram.com/dennis.lamerice/')}></IconButton>
					<IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={() => openInNewTab('https://github.com/Funinja')}></IconButton>
					<IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
				</Box>	
		</Flex>
		</div>
  );
}

export default Navbar;
