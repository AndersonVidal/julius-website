import { Box, Image, VStack, Flex } from "@chakra-ui/react"
import logo from "../assets/logo.png"

function Header() {
    return (
        <VStack p={5}>
            <Flex w="100%">
                <Box boxSize="sm">
                    <Image 
                        src={logo} alt="logo" 
                        fallbackSrc="https://via.placeholder.com/150" 
                        maxWidth="300px" maxHeight="50px"
                    />
                </Box>
            </Flex>
        </VStack>
    )
}

export default Header
