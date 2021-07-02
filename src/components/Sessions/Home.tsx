import { Box, Button, Center, Grid, GridItem, Heading, Image, VStack } from '@chakra-ui/react';
import JuliusHome from '../../assets/julius-home.png';
import CampusMobile from '../../assets/campus-mobile.png';
import Lift from '../../assets/lift.png';
import { h1Style, subTextStyle, buttonStyle, colors } from '../../constants/Theme';

function Home() {
    return (
        <VStack paddingBlockStart={20} bg={colors.white.normal}>
            <Grid w="90%" h="85vh" templateColumns="repeat(4, 1fr)" templateRows="repeat(3, 1fr)" gap={4}>
                <GridItem p={5} h="55vh" colSpan={2} rowSpan={2}>
                    <Box>
                        <Heading as="h1" size="lg" sx={h1Style}>
                            Domine suas finanças
                        </Heading>
                        <Heading as="h1" size="lg" sx={h1Style}>
                            de uma vez por todas
                        </Heading>
                    </Box>
                    <Box paddingBlockStart={10}>
                        <Heading as="h1" size="lg" sx={subTextStyle}>
                            Controle financeiro prático como um caderno e poderoso
                        </Heading>
                        <Heading as="h1" size="lg" sx={subTextStyle}>
                            como uma planilha.
                        </Heading>
                    </Box>
                    <Box paddingBlockStart={20}>
                        <Button size="lg" sx={buttonStyle}>
                            Quero usar o app
                        </Button>
                    </Box>
                </GridItem>
                <GridItem h="55vh" colSpan={2} rowSpan={2}>
                    <Center>
                        <Image src={JuliusHome} alt="julius-home" fallbackSrc="https://via.placeholder.com/500" />
                    </Center>
                </GridItem>
                <GridItem h="30vh" colSpan={4} rowSpan={1}>
                    <Center paddingBlockStart={20}>
                        <Image paddingRight={20} src={CampusMobile} alt="CampusMobile" fallbackSrc="https://via.placeholder.com/250" />
                        <Image paddingLeft={20} src={Lift} alt="LIFT" fallbackSrc="https://via.placeholder.com/250" />
                    </Center>
                </GridItem>
            </Grid>
        </VStack>
    );
};

export default Home;
