import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../navbar";
import Solutions from "../solutions";
import { Box, Container } from "@chakra-ui/react";
import Understand from "../understand";
import Marquees from "../marquee";

const Layout = ({ children }) => {
     return (
          <Box as="main" pb={8} position="relative">
               <Head>
                    <meta
                         name="viewport"
                         content="width=device-width, initial-scale=1"
                    />
                    <meta name="description" content="Hover's Website" />
                    <meta name="author" content="fl1pHover" />
                    <meta name="author" content="Hover" />

                    <title>Hover - Website</title>
               </Head>

               {/* <Container maxW={{ base: "100%", "2xl": "80%" }} px="3vw"> */}
               <Navbar />
               {children}
               <Solutions />
               <Understand />
               <Marquees />
               {/* </Container> */}
          </Box>
     );
};

export default Layout;
