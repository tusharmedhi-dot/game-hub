import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  // Define props here as needed
  score?: number;
}
const criticScore = ({ score }: CriticScoreProps) => {
  let colorScheme =
    score !== undefined
      ? score >= 90
        ? "green"
        : score >= 80
        ? "yellow"
        : "red"
      : "gray";

  return (
    <Badge colorPalette={colorScheme} fontSize="14px" borderRadius="4px" px={3}>
      {score ?? "N/A"}
    </Badge>
  );
};

export default criticScore;
