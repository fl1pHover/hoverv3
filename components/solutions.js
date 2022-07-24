import React from "react";
import {
     Container,
     Grid,
     GridItem,
     Text,
     Stack,
     Link,
     Button,
     Image,
     Heading,
     Box,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Solutions = () => {
     return (
          <Box id="solutions" as="section">
               <Container maxW="100%" px="2vw">
                    <Grid templateColumns="repeat(2, 1fr)" gap={150}>
                         <GridItem w="100%" display="flex" alignItems="center">
                              <Stack display="block">
                                   <Text
                                        fontSize="xs"
                                        letterSpacing="2px"
                                        textTransform="uppercase"
                                        as="Heading"
                                   >
                                        Mirosoft solutions
                                   </Text>
                                   <Stack display="flex" py="1em">
                                        <NextLink href="/home" passHref>
                                             <Link>
                                                  <Heading fontSize="calc(1rem + 1.3vw)">
                                                       Modern Workplace
                                                  </Heading>
                                             </Link>
                                        </NextLink>
                                        <NextLink href="/home" passHref>
                                             <Link>
                                                  <Heading fontSize="calc(1rem + 1.3vw)">
                                                       Customer Engagement
                                                  </Heading>
                                             </Link>
                                        </NextLink>
                                        <NextLink href="/home" passHref>
                                             <Link>
                                                  <Heading fontSize="calc(1rem + 1.3vw)">
                                                       Data og analyse
                                                  </Heading>
                                             </Link>
                                        </NextLink>
                                        <NextLink href="/home" passHref>
                                             <Link>
                                                  <Heading fontSize="calc(1rem + 1.3vw)">
                                                       Specialudvikling
                                                  </Heading>
                                             </Link>
                                        </NextLink>
                                   </Stack>
                                   <Button variant="main-btn" size="main">
                                        Se alle
                                   </Button>
                              </Stack>
                         </GridItem>
                         <GridItem>
                              <Image src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                         </GridItem>
                    </Grid>
               </Container>
          </Box>
     );
};

export default Solutions;
