import useGenre, { type Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  List, // This is the container component
  HStack,
  Image,
  Spinner,
  Link,
} from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error, loading } = useGenre();

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h6>
        <strong>Genre List</strong>
      </h6>
      <List.Root listStyleType="none">
        {data.map((g) =>
          g.id !== undefined && g.id !== null ? (
            <List.Item key={g.id} value={g.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
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
    </>
  );
};

export default GenreList;
