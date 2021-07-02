import { Spacer } from "@chakra-ui/react";

export const getSpacers = (amount: number) => {
    let res = [];
    for (let i = 0; i < amount; i++) {
        res.push(<Spacer />);
    }
    return res;
}