import type { Game } from "@/hooks/useGames";
import { CardBody, CardRoot, Heading } from "@chakra-ui/react";
import React from "react";

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
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
