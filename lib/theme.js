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

const customeTheme = extendTheme({
     breakpoints: {
          sm: "320px",
          md: "768px",
          lg: "960px",
          xl: "1400px",
          "2xl": "1900px",
     },
});

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
     // Container: {
     //      variants: {
     //           base: {
     //                maxWidth: "100%",
     //           },
     //           medium: {
     //                maxWidth: "80%",
     //           },
     //           "2xl": {
     //                maxWidth: "66%",
     //           },
     //      },
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
                    px: "25px",
                    py: "10px",
                    borderRadius: "0",
               },
               main: {
                    fontSize: "15px",
                    px: "25px",
                    py: "15px",
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
     Text: {
          variants: {
               font1: {},
          },
     },
};

const fonts = {
     heading: `'Darker Grotesque', sans-serif`,
     body: `'Roboto', sans-serif`,
};

const colors = {
     grassTeal: "#88ccca",
};

const config = {
     initialColorMode: "dark",
     useSystemColorMode: true,
};

// const textStyles = {
//      bannerWord: {
//           color: "red",
//           fontSize: ["calc(14px + 1.4vw)", "28px"],
//      },
// };

const theme = extendTheme({
     config,
     styles,
     components,
     fonts,

     colors,
     customeTheme,
});
export default theme;
