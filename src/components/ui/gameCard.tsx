import type { Game } from "@/hooks/useGames";
// Note: CardBody is removed from imports, Card is used for dot-notation
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./platformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    // 1. Change <Card> to <Card.Root>
    <Card.Root overflow="hidden" borderRadius={10}>
      <Image
        src={getCroppedImageUrl(game.background_image || "null")}
        alt={game.name}
      />

      {/* 2. Change <CardBody> to <Card.Body> */}
      <Card.Body>
        <HStack justifyContent="space-between" mb={2}>
          <Heading size="md">{game.name}</Heading>
          <CriticScore score={game.metacritic} />
        </HStack>

        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
