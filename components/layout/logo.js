import React from "react";
import NextLink from "next/link";
import Image from "next/image";

const Logo = () => {
     const hoverImg = `/images/hover${useColorModeValue("", "-dark")}.png`;

     return (
          <NextLink>
               <a>
                    <Image src={hoverImg}></Image>
               </a>
          </NextLink>
     );
};

export default Logo;
