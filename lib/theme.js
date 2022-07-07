import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
     global: (props) => ({
          body: {
               bg: mode("#000000", "#ececec")(props),
               color: mode("#ececec", "#000000")(props),
          },
     }),
     // global: {
     //      body: {
     //           backgroundColor: "#ececec",
     //      },
     // },
};

const sizes = {
     sizes: {
          max: "max-content",
          min: "min-content",
          full: "100%",
          "3xs": "14rem",
          "2xs": "16rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
          "8xl": "90rem",
          // container: {
          //      sm: "640px",
          //      md: "768px",
          //      lg: "1024px",
          //      xl: "1350px",
          // },
     },
};

const components = {
     // Heading: {
     //      variants: {
     //           "section-title": {
     //                textDecoration: "underline",
     //                fontSize: 20,
     //                textUnderlineOffset: 6,
     //                textDecorationColor: "#525252",
     //                textDecorationThickness: 4,
     //                marginTop: 3,
     //                marginBottom: 4,
     //           },
     //      },
     // },
     // Link: {
     //      baseStyle: (props) => ({
     //           color: mode("#3d7aed", "#ff63c3")(props),
     //           textUnderlineOffset: 3,
     //      }),
     // },
     Button: {
          variants: {
               "main-btn": {
                    backgroundColor: "#000",
                    color: "#ffffff",
               },
               "second-btn": {
                    backgroundColor: "#fff",
                    color: "#000",
               },
          },
          sizes: {
               base: {
                    fontSize: "12px",
                    px: "15px",
                    py: "10px",
                    borderRadius: "0",
               },
          },
     },
     Heading: {
          variants: {
               lead: {
                    fontWeight: "normal",
               },
          },
          sizes: {
               // "main-heading": {
               //      fontSize: "calc(1rem + 3vw)",
               // },
               second: {
                    fontSize: "120px",
               },
          },
     },
};

const fonts = {
     heading: "Darker Grotesque, sans-serif",
     body: "Roboto, sans-serif",
};

const colors = {
     grassTeal: "#88ccca",
};

const config = {
     initialColorMode: "dark",
     useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, sizes, colors });
export default theme;
