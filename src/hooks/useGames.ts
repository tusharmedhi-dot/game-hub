import useData from "./useData";
import type { Genre } from "./useGenre"; // Note: Removed the '.ts' suffix for clean import

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
  metacritic?: number;
}

const useGames = (selectedGenre: Genre | null) => {
  // FIX: Explicitly type queryConfig as Record<string, string>
  const queryConfig: Record<string, string> = {};

  if (selectedGenre) {
    // TypeScript now knows this object can have string properties like 'genres'
    queryConfig.genres = selectedGenre.id.toString();
  }

  // Pass the queryConfig object directly as the second argument.
  return useData<Game>("/games", queryConfig, undefined, [selectedGenre?.id]);
};

export default useGames;
