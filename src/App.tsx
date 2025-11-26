import { Grid, GridItem } from "@chakra-ui/react";

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
        gap="4"
        h="100vh"
      >
        <GridItem area={"nav"} bg="blue.300">
          Navigation
        </GridItem>
        <GridItem
          area={"aside"}
          bg="green.300"
          display={{ base: "none", lg: "block" }} // hide on small screens
        >
          Sidebar
        </GridItem>
        <GridItem area={"main"} bg="orange.300">
          Main Content
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
