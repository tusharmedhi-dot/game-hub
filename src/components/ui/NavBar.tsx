import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "./color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text fontSize="2xl" fontWeight="bold">
        Game Hub
      </Text>
      <Flex justify="flex-end" flex="1">
        <ColorModeButton />
      </Flex>
    </HStack>
  );
};

export default NavBar;
