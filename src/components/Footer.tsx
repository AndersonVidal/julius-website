import { Box, BoxProps, Image, Text, VStack } from '@chakra-ui/react';
import logo from '../assets/logoW.png';
import { textStyle, colors } from '../constants/Theme';

const Footer = (props: BoxProps) => {
    return (
        <Box bg={colors.gray.strong} {...props}>
            <VStack p={4} height="185px">
                <Image 
                    src={logo} alt="logo" 
                    fallbackSrc="https://via.placeholder.com/150" 
                    maxWidth="300px" maxHeight="50px"
                    paddignTop="1rem" position='absolute'
                />
                <Box paddingTop="4rem" position='absolute'>
                    <Text sx={textStyle}>
                        contato@juliusbrasil.com.br
                    </Text>
                </Box>
                <Box paddingTop="8rem" position='absolute'>
                    <Text sx={textStyle}>
                        Julius &copy; {new Date().getFullYear()}. Todos os direitos reservados.
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}

export default Footer
