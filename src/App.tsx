import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar.tsx";
import GameGrid from "./components/gamegrid.tsx";
import GenreList from "./components/ui/GenreList.tsx";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre.ts";
import PlatformSelector from "./components/ui/PlatformSelector.tsx";
import type { Platform } from "./hooks/useGames.ts";
import SortSelector from "./components/ui/SortSelector.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // mobile: nav on top, main full width
          md: `"nav nav" "aside main"`, // desktop: nav on top, sidebar + main
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
        }}
        gridTemplateRows={{ base: "60px 1fr", md: "60px 1fr" }}
        gridTemplateColumns={{ base: "1fr", md: "200px 1fr" }} // mobile: single column
        gap="0"
        h="100vh"
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem
          area={"aside"}
          display={{ base: "none", lg: "block" }} // hide on small screens
          paddingX={3}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        {/* <GridItem area={"main"} bg="orange.300"></GridItem> */}
        <GridItem area={"main"}>
          <HStack paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
