import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./ui/gameCard";

// interface Game {
//   id: number;
//   name: string;
//   background_image?: string;
// }

const GameGrid = () => {
  // const [games, setGames] = React.useState<Game[]>([]);
  // const [error, setError] = React.useState<string | null>(null);

  // useEffect(() => {
  //   const fetchGames = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.rawg.io/api/games?key=12811374eced43dbb6731e6d86bfb390"
  //       );
  //       const data = await response.json();
  //       setGames((data.results as Game[]) || []);
  //     } catch (err) {
  //       setError("Failed to fetch games");
  //     }
  //   };

  //   fetchGames();
  // }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }
  // if (games.length === 0) {
  //   return <div>Loading...</div>;
  // }
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          gap={10}
          padding="20px"
        >
          {loading &&
            skeletons.map((skeleton) => (
              <GameCard
                key={skeleton}
                game={{
                  id: skeleton,
                  name: "Loading...",
                }}
              />
            ))}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
            // <div key={game.id}>
            //   <h2>{game.name}</h2>
            //   <img src={game.background_image} alt={game.name} width="200" />
            // </div>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default GameGrid;
