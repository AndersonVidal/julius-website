import { Box, Center, Grid, GridItem, Heading, Image, VStack } from '@chakra-ui/react'
import { h2Style, subTextStyle } from '../../constants/Theme';
import DolarLabel from '../Atoms/DolarLabel';
import JuliusFeatures from '../../assets/julius-features.png';
import React from 'react'

function Features() {
    return (
        <VStack paddingBlockStart={20} paddingBlockEnd={20}>
            <Grid w="90%" templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem p={5} colSpan={2}>
                    <Box>
                        <Heading as="h2" size="lg" sx={h2Style}>
                            Praticidade para anotar e acompanhar os seus gastos
                        </Heading>
                    </Box>
                    <Box paddingBlockStart={10} paddingBlockEnd={20}>
                        <Heading as="h3" size="md" sx={subTextStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at condimentum augue, eget vehicula lectus. Nam et massa sit amet sapien volutpat sollicitudin.
                        </Heading>
                    </Box>
                    <DolarLabel />
                    <DolarLabel />
                </GridItem>
                <GridItem p={5} colSpan={2}>
                    <Center>
                        <Image src={JuliusFeatures} alt="julius-features" fallbackSrc="https://via.placeholder.com/500" />
                    </Center>
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default Features
