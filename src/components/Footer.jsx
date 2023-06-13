import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} px={'16'} py={['16', '8']} color={'whiteAlpha.900'} minH={'48'}>
        <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
            <VStack w={'full'} alignItems={['center', 'flex-start']}>
                <Text fontWeight={'bold'}>About Me</Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>I made this demo Crypto App project that provides every Crypto Coin Data in a very understanbale way.</Text>
            </VStack>
            
            <VStack>
                <Avatar boxSize={'28'} mt={['4', '0']}/>
                <Text>Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
