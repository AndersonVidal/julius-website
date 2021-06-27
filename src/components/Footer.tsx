import { Box, Image, Text, VStack } from '@chakra-ui/react';
import logo from '../assets/logoW.png';

function Footer() {
    const textStyle = {
        fontSize:"sm",
        fontFamily:"sans-serif",
        color:"#FAFAFA"
    };
    return (
        <Box bg="#444444" position="relative">
            <VStack p={4}>
                <Image 
                    src={logo} alt="logo" 
                    fallbackSrc="https://via.placeholder.com/150" 
                    maxWidth="300px" maxHeight="50px"
                />
                <Box paddingTop="2vh">
                    <Text sx={textStyle}>
                        contato@juliusbrasil.com.br
                    </Text>
                </Box>

                <Box paddingTop="5vh">
                    <Text sx={textStyle}>
                        Julius &copy; {new Date().getFullYear()}. Todos os direitos reservados.
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}

export default Footer
