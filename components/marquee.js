import React from "react";
import Marquee from "react-fast-marquee";
import { Heading, Box, Image } from "@chakra-ui/react";

const Marquees = () => {
     return (
          <Marquee speed="40" pauseOnHover>
               <Heading
                    fontSize={{
                         base: "calc(1rem + 3.9vw)",
                         sm: "calc(1.2rem + 3.9vw)",
                         md: "5rem",
                    }}
                    display="flex"
                    gap="1em"
                    fontWeight="normal"
                    my={{ base: "2rem", sm: "3rem", md: "4rem", lg: "5rem" }}
               >
                    <span>Vores proces</span>
                    <Image
                         src="/images/accesories/right-arrow.svg"
                         width="1em"
                    />
                    <span>Vores proces</span>
                    <Image
                         src="/images/accesories/right-arrow.svg"
                         width="1em"
                    />
                    <span>Vores proces</span>
                    <Image
                         src="/images/accesories/right-arrow.svg"
                         width="1em"
                    />
                    <span>Vores proces</span>
                    <Image
                         src="/images/accesories/right-arrow.svg"
                         width="1em"
                    />
                    <span>Vores proces</span>
                    <Image
                         src="/images/accesories/right-arrow.svg"
                         width="1em"
                         mr="1em"
                    />
               </Heading>
          </Marquee>
     );
};

export default Marquees;
