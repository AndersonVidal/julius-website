import { Box, Button, Center, Grid, GridItem, Heading, Image, VStack } from '@chakra-ui/react';
import JuliusHome from '../../assets/julius-home.png';
import CampusMobile from '../../assets/campus-mobile.png';
import Lift from '../../assets/lift.png';

function Home() {
    const titleStyle = {
        fontStyle: 'sans-serif',
        fontWeight: '55px',
        fontSize: '50',
        color: '#444444'
    }

    const subtitleStyle = {
        fontSize: '22',
        color: '#777777',
        fontWeight: '31.5px'
    }

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

    return (
        <VStack paddingBlockStart={20} paddingBlockEnd={20} bg="#FAFAFA">
            <Grid w="90%" templateColumns="repeat(4, 1fr)" templateRows="repeat(3, 1fr)" gap={4}>
                <GridItem p={5} colSpan={2} rowSpan={2}>
                    <Box>
                        <Heading as="h1" size="lg" sx={titleStyle}>
                            Domine suas finanças
                        </Heading>
                        <Heading as="h1" size="lg" sx={titleStyle}>
                            de uma vez por todas
                        </Heading>
                    </Box>
                    <Box paddingBlockStart={10}>
                        <Heading as="h1" size="lg" sx={subtitleStyle}>
                            Controle financeiro prático como um caderno e poderoso
                        </Heading>
                        <Heading as="h1" size="lg" sx={subtitleStyle}>
                            como uma planilha.
                        </Heading>
                    </Box>
                    <Box paddingBlockStart={20}>
                        <Button backgroundColor="#6456E2" color="#FAFAFA" size="lg" sx={buttonStyle}>
                            Quero usar o app
                        </Button>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} rowSpan={2}>
                    <Center>
                        <Image src={JuliusHome} alt="julius-home" fallbackSrc="https://via.placeholder.com/500" />
                    </Center>
                </GridItem>
                <GridItem h="35vh" colSpan={4} rowSpan={1}>
                    <Center paddingBlockStart={10}>
                        <Image paddingRight={20} src={CampusMobile} alt="CampusMobile" fallbackSrc="https://via.placeholder.com/250" />
                        <Image paddingLeft={20} src={Lift} alt="LIFT" fallbackSrc="https://via.placeholder.com/250" />
                    </Center>
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default Home;
