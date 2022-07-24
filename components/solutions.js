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
import WideContainer from "./container/wideContainer";

const LinkItem = ({ href, children, target, ...props }) => {
     return (
          <NextLink href={href} passHref scroll={false}>
               <Link target={target} _hover={{ textDecoration: "none" }}>
                    <Heading fontSize="calc(1rem + 1.3vw)" lineHeight="1.35">
                         {children}
                    </Heading>
               </Link>
          </NextLink>
     );
};

const Solutions = () => {
     return (
          <Box id="solutions" as="section">
               <WideContainer maxW="100%" px="2vw">
                    <Grid
                         templateColumns={{
                              base: "repeat(1, 1fr)",
                              md: "repeat(2, 1fr)",
                         }}
                         gap={{ base: "20px", md: "100px" }}
                    >
                         <GridItem
                              w="100%"
                              display="flex"
                              alignItems="center"
                              mb="30px"
                         >
                              <Stack display="block">
                                   <Text textStyle="title" as="h6">
                                        Mirosoft solutions
                                   </Text>
                                   <Stack display="flex" pt="1em" pb="1.2em">
                                        <LinkItem href="/home">
                                             Modern Workplace
                                        </LinkItem>
                                        <LinkItem href="/home">
                                             Customer Engagement
                                        </LinkItem>
                                        <LinkItem href="/home">
                                             Data og analyse
                                        </LinkItem>
                                        <LinkItem href="/home">
                                             Specialudvikling
                                        </LinkItem>
                                   </Stack>
                                   <Button
                                        className="main__btn"
                                        variant="main-btn"
                                        size="main"
                                        mt="1em"
                                   >
                                        Se alle
                                   </Button>
                              </Stack>
                         </GridItem>
                         <GridItem>
                              <Image src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                         </GridItem>
                    </Grid>

                    <Heading
                         as="h2"
                         variant="lead"
                         fontSize={{
                              base: "calc(0.8rem + 3.9vw)",
                              sm: "calc(1rem + 3.9vw)",
                              md: "4.1em",
                         }}
                         textStyle="bannerWord"
                         mt={{ base: "2em", md: "3em" }}
                         // mb={{ base: "5em", md: "6em" }}
                    >
                         Uanset hvor gode digitale løsninger er, vil de fejle,
                         hvis ingen <span className="underline">forstår</span>{" "}
                         at bruge dem
                    </Heading>
               </WideContainer>
          </Box>
     );
};

export default Solutions;
