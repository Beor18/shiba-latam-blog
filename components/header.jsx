import {
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Box>
      <Text
        textAlign={useBreakpointValue({ base: "center", md: "left" })}
        fontFamily={"heading"}
        color={useColorModeValue("gray.800", "white")}
      >
        <Link href="/">
          <a className="">Blog</a>
        </Link>
      </Text>
    </Box>
  );
};

export default Header;
