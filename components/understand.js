import React from "react";
import {
     Box,
     Heading,
     Text,
     Switch,
     Center,
     VStack,
     Stack,
     Image,
} from "@chakra-ui/react";
import NarrowContainer from "./container/narrowContainer";

const Understand = () => {
     // const { toggleColorMode } = useColorMode();

     // const colorScheme = useColorModeValue("red.500", "red.200");

     return (
          <Box
               id="understanding"
               as="section"
               my={{ base: "4em", sm: "6em", md: "8em" }}
          >
               <NarrowContainer>
                    <Heading
                         as="h3"
                         variant="lead"
                         fontSize={{
                              base: "calc(14px + 1.4vw)",
                              md: "28px",
                         }}
                         textStyle="bannerWord"
                         pt={{ base: "1em", md: "2em" }}
                         mb={{ base: "4em", md: "4em" }}
                    >
                         Kun hver 3. digitale løsning leverer den værdi, der var
                         lovet. Det er ikke mangel på gode intentioner, den er
                         gal med. Det er nærmere manglen på interaktion med de
                         mennesker og den organisation, der skal bruge
                         løsningen. Vi tror på, at magien opstår i mødet mellem
                         mennesker og teknologi.
                    </Heading>
                    <VStack className="switch__wrapper" mb="4.5em">
                         <Text textStyle="title" as="h6" mb="20px">
                              Human understanding
                         </Text>

                         <Switch
                              colorScheme="blackAlpha"
                              className="switch"
                              size="lg"
                              transform="scale(1.8)"
                         />
                    </VStack>
                    <Stack className="understanding">
                         <Image src="/images/understanding.svg" />
                    </Stack>
               </NarrowContainer>
          </Box>
     );
};

export default Understand;
