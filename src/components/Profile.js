import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform, DiVim } from 'react-icons/di'
import { SiGoland } from 'react-icons/si';
import { VscAccount } from "react-icons/vsc";

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
                <Box alignSelf="center" px="32" py="16">
                    <Text fontWeigt='extrabold' color="cyan.500" fontSize='4xl' align='right'>
                        Lover of Animals
                    </Text>
                </Box>
                <Box alignSelf="left" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl"> Most Frequent Projects </Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiVim} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Vim Plugins
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={SiGoland} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Go
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={VscAccount} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Other Applications
                        </Text>
                    </Flex>
                </Flex>

            </Box>

        </Flex>
    )
}

export default Profile;