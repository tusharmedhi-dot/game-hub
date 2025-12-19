import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./ui/gameCard";
import GameCardContainer from "./ui/GameCardContainer";
import type { GameQuery } from "@/App";

// interface Game {
//   id: number;
//   name: string;
//   background_image?: string;
// }

interface GameGridProps {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  // const [games, setGames] = React.useState<Game[]>([]);
  // const [error, setError] = React.useState<string | null>(null);

  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={10}
        padding="20px"
      >
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCard
                game={{
                  id: skeleton,
                  name: "Loading...",
                }}
              />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>

          // <div key={game.id}>
          //   <h2>{game.name}</h2>
          //   <img src={game.background_image} alt={game.name} width="200" />
          // </div>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
