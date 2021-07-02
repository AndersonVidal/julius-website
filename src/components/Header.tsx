import { Box, Image, VStack, Stack, Flex, Button, Spacer } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import './header.css';
import { buttonStyle } from '../constants/Theme';
import { getSpacers } from '../constants/Utils';

function Header() {
    return (
        <VStack p={5} height="12vh">
            <Flex w="90%" h="8vh">
                <Box boxSize="sm" h="6vh" w="10vw">
                    <Image 
                        src={logo} alt="logo" 
                        fallbackSrc="https://via.placeholder.com/150" 
                        maxWidth="300px" maxHeight="50px"
                    />
                </Box>
                {getSpacers(6)}
                <Box boxSize="sm" h="6vh" w="24vw">
                    <Stack 
                        direction={["column", "row"]} 
                        spacing="4vw"
                        p={4}
                    >   
                        <a className='linkStyle' href="#home">Home</a>
                        <a className='linkStyle' href="#features">Funcionalidades</a>
                        <a className='linkStyle' href="#prices">Preços</a>
                        
                    </Stack>
                </Box>
                <Spacer />
                <Box p={2} className="baixarBox">
                    <Button sx={buttonStyle}>
                        Baixe agora
                    </Button>
                </Box>
            </Flex>
        </VStack>
    )
}

export default Header;
