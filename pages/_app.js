import "../styles/globals.scss";
import Chakra from "../components/chakra";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout";

function MyApp({ Component, pageProps, router }) {
     return (
          <Chakra>
               <Layout>
                    <AnimatePresence>
                         <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
               </Layout>
          </Chakra>
     );
}

export default MyApp;
