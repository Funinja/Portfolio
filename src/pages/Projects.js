import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import { VStack, Flex, Spacer } from '@chakra-ui/layout';

function Projects() {
    return(
        <div>
					<VStack p={5} w="100%">
						<Heading color='teal'> My Projects </Heading>
					</VStack>
        </div>
    )
}

export default Projects;
