import type { Game } from "@/hooks/useGames";
import { CardBody, CardRoot, Heading } from "@chakra-ui/react";
import PlatformIconList from "./platformIconList";

interface GameCardProps {
  // Define props here as needed
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <CardRoot>
      {/* <h2>{game.name}</h2> */}
      <img src={game.background_image} alt={game.name} />
      <CardBody overflow="hidden" borderRadius={10}>
        {/* Additional card content can go here */}
        <Heading size="md">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms?.map((p) => p.platform)}
        />
        {/* {game.parent_platforms && (
          <pla
        )} */}
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
