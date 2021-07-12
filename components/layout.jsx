import { Box } from "@chakra-ui/react"

import Intro from "./intro";
import Meta from "./meta";
import Footer from "./footer";

const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <Intro />
      <Box w="100%" p={12}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
