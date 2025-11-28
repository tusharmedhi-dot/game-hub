import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar.tsx";
import GameGrid from "./components/gamegrid.tsx";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, // mobile: nav on top, main full width
          md: `"nav nav" "aside main"`, // desktop: nav on top, sidebar + main
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
          bg="green.300"
          display={{ base: "none", lg: "block" }} // hide on small screens
        >
          Sidebar
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
