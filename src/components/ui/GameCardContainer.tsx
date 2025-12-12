import { Box } from "@chakra-ui/react";
interface GameCardContainerProps {
  // Define props here as needed
  children?: React.ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
