import useGenre, { type Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  List, // This is the container component
  HStack,
  Image,
  Spinner,
  Link,
  Box,
  Heading,
} from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Box>
        <Heading as="h1" marginBottom={3} marginTop={5}>
          Genres
        </Heading>
        <List.Root listStyleType="none" aria-label="Game Genres">
          {data.map((g) =>
            g.id !== undefined && g.id !== null ? (
              <List.Item key={g.id} value={g.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(g.image_background)}
                  />
                  <Link
                    fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                    fontSize="lg"
                    onClick={() => onSelectGenre(g)}
                  >
                    {g.name}
                  </Link>
                </HStack>
              </List.Item>
            ) : null
          )}
        </List.Root>
      </Box>
    </>
  );
};

export default GenreList;
