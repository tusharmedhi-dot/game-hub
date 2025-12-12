import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar.tsx";
import GameGrid from "./components/gamegrid.tsx";
import GenreList from "./components/ui/GenreList.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
          <GenreList />
        </GridItem>
        {/* <GridItem area={"main"} bg="orange.300"></GridItem> */}
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
