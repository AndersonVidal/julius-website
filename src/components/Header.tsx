import { Box, Image, VStack, Stack, Flex, Button, Spacer } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import './header.css';

function Header() {
    const buttonStyle = {
        "&:hover": {
            backgroundColor: "#8278E2",
            color:"#FFFFFF"
        },
        "&:active": {
            backgroundColor: "#4B3EBD",
            color:"#FFFFFF"
        }
    };

    const getSpacers = (amount: number) => {
        let res = [];
        for (let i = 0; i < amount; i++) {
            res.push(<Spacer />);
        }
        return res;
    }

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
                    <Button backgroundColor="#6456E2" color="#FAFAFA" sx={buttonStyle}>
                        Baixe agora
                    </Button>
                </Box>
            </Flex>
        </VStack>
    )
}

export default Header;
