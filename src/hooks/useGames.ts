import type { GameQuery } from "@/App";
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

const useGames = (
  gameQuery: GameQuery
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
) => {
  // FIX: Explicitly type queryConfig as Record<string, string>
  const queryConfig: Record<string, string> = {};

  if (gameQuery.genre) {
    // TypeScript now knows this object can have string properties like 'genres'
    queryConfig.genres = gameQuery.genre.id.toString();
  }

  if (gameQuery.platform) {
    // TypeScript now knows this object can have string properties like 'platform'
    queryConfig.parent_platforms = gameQuery.platform.id.toString();
  }

  // Pass the queryConfig object directly as the second argument.
  return useData<Game>("/games", queryConfig, undefined, [gameQuery]);
};

export default useGames;
