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
		<div></div>
	)

}

export default Profile;
