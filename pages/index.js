import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
     Container,
     Center,
     Heading,
     useColorModeValue,
     Box,
     Text,
     Button,
     Image,
} from "@chakra-ui/react";
import Header from "../components/header";
// import { motion } from "framer-motion";

export default function Home() {
     return (
          <Box as="Header">
               <Box className="circles">
                    <Image
                         src="/images/orange-circle.svg"
                         position="absolute"
                         maxWidth="50vw"
                         zIndex="-1"
                    />
               </Box>
               <Container
                    maxW={{ base: "100%", sm: "100%", md: "80%", "2xl": "70%" }}
                    justifyContent="flex-end"
                    flexWrap="wrap"
                    px="2vw"
               >
                    <Heading
                         as="h1"
                         mt="1.2em"
                         mb="1em"
                         bg={useColorModeValue("undefined", "whiteAlpha.200")}
                         fontSize={{
                              base: "calc(1.5rem + 3vw)",
                              sm: "calc(2rem + 3vw)",
                              lg: "calc(1.9rem + 3vw)",
                         }}
                         variant="main"
                         // size="main-heading"
                         textAlign="left"
                         fontWeight="bold"
                    >
                         <span>Digital solutions</span> <br />
                         <span>based on human</span>
                         <br />
                         <span className="underline">understanding</span>
                    </Heading>
                    <Box
                         justifyContent="flex-end"
                         px={{ base: "0", md: "15px" }}
                         marginLeft={{ base: 0, sm: "50%" }}
                    >
                         <Text fontSize={16}>
                              Uden mennesker løser teknologi ingenting. Vi
                              matcher teknologi med menneskers behov og skaber
                              digitale løsninger, der giver mening, er lette at
                              forstå og anvende.
                         </Text>

                         <Button variant="main-btn" size="main" mt={3}>
                              {/* <Image width={10} src="/images/right-arrow.svg" /> */}
                              Nmg dar sda
                         </Button>
                    </Box>

                    <Heading
                         as="h3"
                         variant="lead"
                         fontSize={{
                              base: "calc(14px + 1.4vw)",
                              md: "28px",
                         }}
                         textStyle="bannerWord"
                         mt={{ base: "5em", md: "6em" }}
                         mb={{ base: "5em", md: "6em" }}
                    >
                         Vi tror på, at der skal mere end teknologi og
                         kode-skills til at udvikle digitale løsninger med
                         forretningsmæssig effekt. Blandt andet også evnen til
                         at lytte til og forstå de mennesker, der skal bruge
                         løsningerne. Det er vores tilgang til digitale
                         løsninger.
                    </Heading>
               </Container>
          </Box>
     );
}
