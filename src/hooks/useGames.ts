import { useEffect, useState } from "react";
import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
