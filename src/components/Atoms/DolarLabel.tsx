import { Box, Heading, HStack, Image } from '@chakra-ui/react';
import { subTextStyle } from '../../constants/Theme';
import FlyDollar from '../../assets/expenses-icon.png';
import React from 'react';

function DolarLabel() {
    return (
        <Box p={5}>
            <HStack>
                <Image 
                    src={FlyDollar} alt="flyDollar"
                />
                <Heading sx={subTextStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Heading>
            </HStack>
        </Box>
    );
};

export default DolarLabel;
