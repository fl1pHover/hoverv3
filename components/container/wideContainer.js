import React from "react";
import { Container } from "@chakra-ui/react";

const WideContainer = ({ children }) => {
     return (
          <>
               <Container
                    maxW={{
                         base: "100%",
                         sm: "100%",
                         md: "100%",
                         "2xl": "80%",
                    }}
                    px="5vw"
               >
                    {children}
               </Container>
          </>
     );
};

export default WideContainer;
