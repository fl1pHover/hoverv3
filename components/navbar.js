import React, { useState } from "react";
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
import WideContainer from "./container/wideContainer";

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
     const [navbar, setNavbar] = useState(false);
     const changeBg = () => {
          if (window.scrollY >= 100) {
               setNavbar(true);
          } else {
               setNavbar(false);
          }
     };

     if (typeof window !== "undefined") {
          window.addEventListener("scroll", changeBg);
     }

     return (
          <Box
               id="navbar"
               className={navbar ? "navbar-scroll" : "navbar"}
               position="sticky"
               top={0}
               as="nav"
               px={0}
               py={5}
          >
               <WideContainer>
                    <Box display="flex" justifyContent="space-between">
                         <Flex align="center" px="0px">
                              <LinkItem href="/" px="0px" passHref>
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
                                        // height={6}
                                   >
                                        Support
                                   </Button>
                                   <Button variant="main-btn" size="base">
                                        Contact
                                   </Button>
                              </Box>
                         </Stack>
                    </Box>
               </WideContainer>
          </Box>
     );
};

export default Navbar;
