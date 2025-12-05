import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image?: string;
  parent_platforms?: { platform: { id: number; name: string } }[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=12811374eced43dbb6731e6d86bfb390"
        );
        const data = await response.json();
        setGames((data.results as Game[]) || []);
      } catch (err) {
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);
  return { games, error, loading };
};

export default useGames;
