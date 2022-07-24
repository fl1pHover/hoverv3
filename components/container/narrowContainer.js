import React from "react";
import { Container } from "@chakra-ui/react";

const NarrowContainer = ({ children }) => {
     return (
          <>
               <Container
                    maxW={{
                         base: "100%",
                         // sm: "100%",
                         // md: "100%",
                         lg: "67%",
                         "2xl": "55%",
                    }}
                    justifyContent="flex-end"
                    flexWrap="wrap"
                    px="5vw"
               >
                    {children}
               </Container>
          </>
     );
};

export default NarrowContainer;
