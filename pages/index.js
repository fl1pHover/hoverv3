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
                    ></Image>
               </Box>
               <Container
                    maxW={{ base: "100%", sm: "83%", md: "66%" }}
                    justifyContent="flex-end"
                    flexWrap="wrap"
                    px={0}
               >
                    <Heading
                         as="h1"
                         mt="1em"
                         mb="0.8em"
                         bg={useColorModeValue("undefined", "whiteAlpha.200")}
                         fontSize={{
                              base: "calc(1rem + 3vw)",
                              sm: "calc(2rem + 3vw)",
                              lg: "calc(1.5rem + 3vw)",
                         }}
                         variant="main"
                         // size="main-heading"
                         textAlign="left"
                         fontWeight="normal"
                    >
                         <span>Digital solutions</span> <br />
                         <span>based on human</span>
                         <br />
                         <span>understanding</span>
                    </Heading>
                    <Box
                         justifyContent="flex-end"
                         px={{ base: "0", md: "15px" }}
                         marginLeft={{ base: 0, sm: "50%" }}
                    >
                         <Text fontSize={12}>
                              Uden mennesker løser teknologi ingenting. Vi
                              matcher teknologi med menneskers behov og skaber
                              digitale løsninger, der giver mening, er lette at
                              forstå og anvende.
                         </Text>

                         <Button variant="main-btn" size="base" mt={3}>
                              Nmg dar sda
                         </Button>
                    </Box>

                    <Heading
                         as="h3"
                         variant="lead"
                         fontSize={{
                              base: "calc(8px + 1.2vw)",
                              md: "20px",
                         }}
                         mt="6em"
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
