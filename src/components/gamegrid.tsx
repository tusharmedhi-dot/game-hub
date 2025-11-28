import useGames from "@/hooks/useGames";

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
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>
        {games.map((game) => (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} width="200" />
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
