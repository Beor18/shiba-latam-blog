import { Container } from "@chakra-ui/react";

const ContainerComponent = ({ children }) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export default ContainerComponent;
