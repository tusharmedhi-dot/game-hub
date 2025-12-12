import type { Game } from "@/hooks/useGames";
import { CardBody, CardRoot, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface GameCardProps {
  // Define props here as needed
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot>
      {/* <h2>{game.name}</h2> */}
      <img
        src={getCroppedImageUrl(game.background_image || "null")}
        alt={game.name}
      />
      <CardBody overflow="hidden" borderRadius={10}>
        {/* Additional card content can go here */}
        <Heading size="md">{game.name}</Heading>
        <HStack justifyContent="space-between" marginTop={2}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
