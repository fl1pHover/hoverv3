import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";

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
               <Navbar />

               <Container maxW="container.xl">{children}</Container>
          </Box>
     );
};

export default Layout;
