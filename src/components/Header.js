import React from 'react';
import { Stack, Circle, Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import me from '../img/my_pic.jpg';

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

    return(
        <Stack>

            <Flex direction={isNotSmallerScreen ? "column" : "row"} spacing="200px" p={isNotSmallerScreen ? "32" : "0" } alignSelf="flex-start" alignItems='left'>

                
                <Box mr={20} mt={isNotSmallerScreen ? 0 : 16} align='flex-start' alignItems='left'>
                    
                    <Text align='left' fontSize='5xl' fontWeight="semibold" alignSelf='left'> Hello, I am </Text>
                    <Text align='left' fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'> Dennis Lam </Text>
                    <Text align='left' color={isDark ? "gray.200" : "gray.500"}> I like coding frameworks, optimization algorithms, and distrubuted systems </Text>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src={me} />
            </Flex>
        </Stack>
    )
}

export default Header;