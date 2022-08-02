import React from 'react';
import { Image, Text, Heading } from '@chakra-ui/react';
import { VStack, Flex, Spacer, Link } from '@chakra-ui/layout';
import Container from "../components/Container";
import map from "../img/map.JPG";
import cat from "../img/catmanage.JPG"

function Projects() {
    return(
        <div>
					<VStack p={5} w="100%">
						<Heading color='teal'> My Projects </Heading>
            <Container>
              <Flex flexDir="column" w="800px">
                  <Flex
                    flexDir="column"
                    my={4}
                    border="1px solid teal"
                    p="5px"
                    borderRadius={5}
                  >
                    <Image 
                      src={cat} 
                      alt='Our Map'
                      objectFit='cover'
                      borderRadius='md'
                    />
                    <Text fontWeight="bold" color='teal.700' fontSize="2xl">
                      Cat Management (2022)
                    </Text>
                    <Text color='teal.600' fontSize="2xl">
                      (Chakra, Javascript, MongoDB, Cryptography) 
                    </Text>
                    <Text fontSize="2xl">
                      NextJS Pomodoro Website With Games and Accounts
                    </Text>
                    <Text>
                      -Uses MongoDB for login functionality and user specificity.
                    </Text>
                    <Text>
                      -Developed Google Recaptcha to stop DDOS attacks.
                    </Text>
                    <Text>
                      -Developed JWT authentication for added security.
                    </Text>
                    <Text>
                      -Developed customizable pomodoro timer.
                    </Text>
                    <Text>
                      -Developed javascript fishing game for taking pomodoro breaks.
                    </Text>
                  </Flex>
              </Flex>

              <Flex flexDir="column" w="800px">
                  <Flex
                    flexDir="column"
                    my={4}
                    border="1px solid teal"
                    p="5px"
                    borderRadius={5}
                  >
                    <Image 
                      src={map} 
                      alt='Our Map'
                      objectFit='cover'
                      borderRadius='md'
                    />
                    <Text fontWeight="bold" color='teal.700' fontSize="2xl">
                      Geographic Information System (2020)
                    </Text>
                    <Text color='teal.600' fontSize="2xl">
                      (C++, JSON, PNG) 
                    </Text>
                    <Text fontSize="2xl">
                      Team Leader of Mapping Software
                    </Text>
                    <Text>
                      -Uses optimization graphing algorithms like Dijkstra, Astar, and many others to graph relational data. 
                    </Text>
                    <Text>
                      -Performed faster than 70% than other graphing development teams.
                    </Text>
                    <Text>
                      -Customization of imported datasets and of the user interface.
                    </Text>
                  </Flex>
              </Flex>

            </Container>
					</VStack>
        </div>
    )
}

export default Projects;
