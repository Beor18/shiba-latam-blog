import {
  Box,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

import ContainerComponent from "./container";

const Intro = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={3}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          boxSize="90px"
          objectFit="cover"
          src="https://shibaswap.com/static/media/shibaswap-icon.ee749b42.png"
          alt="Segun Adebayo"
        />
        <Text>SHIBA LATINOAMERICA</Text>
        <Stack direction={"row"} spacing={6}>
          {/* <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default Intro;
