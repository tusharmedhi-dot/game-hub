import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "./color-mode";
import SeachInput from "./SeachInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text fontSize="2xl" fontWeight="bold" whiteSpace="nowrap">
        Game Hub
      </Text>
      <SeachInput onSearch={onSearch} />
      <Flex justify="flex-end" flex="1">
        <ColorModeButton />
      </Flex>
    </HStack>
  );
};

export default NavBar;
