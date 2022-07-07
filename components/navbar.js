import React from "react";
import NextLink from "next/link";
import {
     Container,
     Flex,
     Stack,
     VStack,
     Link,
     Box,
     useColorMode,
     Button,
     IconButton,
     useColorModeValue,
     Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const LinkItem = ({ href, children, target, props }) => {
     const { toggleColorMode } = useColorMode();

     return (
          <NextLink href={href}>
               <Link
                    target={target}
                    px={3}
                    py={2}
                    borderRadius="15"
                    textDecoration="none"
                    color={useColorModeValue("undefined", "#333")}
                    fontSize={12}
                    {...props}
                    _hover={{
                         textDecoration: "none",
                    }}
               >
                    {children}
               </Link>
          </NextLink>
     );
};
const Navbar = () => {
     // const { toggleColorMode } = useColorMode();

     return (
          <Box position="sticky" top={0} as="nav">
               <Container
                    maxW="container.xl"
                    display="flex"
                    justifyContent="space-between"
                    py={3}
                    px={0}
               >
                    <Flex align="center">
                         <LinkItem href="/" passHref>
                              <Image
                                   width={100}
                                   height={30}
                                   objectFit="cover"
                                   src="/images/hover.png"
                                   alt="Hover Logo"
                              />
                         </LinkItem>
                    </Flex>
                    <Stack
                         direction={{ base: "column", md: "row" }}
                         display={{ base: "none", md: "flex" }}
                         width={{ base: "full", md: "auto" }}
                         alignItems="center"
                    >
                         <Stack direction={{ base: "column", md: "row" }}>
                              <LinkItem href="/work" passHref>
                                   Vores mening
                              </LinkItem>
                              <LinkItem
                                   href="/resume"
                                   // key={useColorModeValue("under", "dark")}
                                   passHref
                              >
                                   {/* <button onClick={toggleColorMode}> */}
                                   Microsoft løsninger
                                   {/* </button> */}
                              </LinkItem>
                              <LinkItem href="/contact" passHref>
                                   Producter
                              </LinkItem>
                              <LinkItem href="/contact" passHref>
                                   Om os
                              </LinkItem>
                         </Stack>
                         <Stack>
                              <Image
                                   width={25}
                                   height={25}
                                   objectFit="cover"
                                   src="/icon/search.svg"
                                   alt="Search Icon"
                              />
                         </Stack>
                         <Box direction="row" gap="0" alignItems="center">
                              <Button
                                   variant="second-btn"
                                   size="base"
                                   height={6}
                              >
                                   Support
                              </Button>
                              <Button variant="main-btn" size="base">
                                   Contact
                              </Button>
                         </Box>
                    </Stack>
               </Container>
          </Box>
     );
};

export default Navbar;
