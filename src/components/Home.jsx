import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import heroImg from '../assets/elonSpeech.png'
// import {motion} from 'framer-motion';

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
        <Image src={heroImg} w={'full'} h={'full'} objectFit={'contain'}/>
        <Text fontSize={'8xl'} textAlign={'center'} fontWeight={'extrabold'} color={'whiteAlpha.900'} pos={'absolute'} top={'5%'} left={['10%','25%']}>
          Crypto Watcher
        </Text>
    </Box>
  )
}

export default Home
