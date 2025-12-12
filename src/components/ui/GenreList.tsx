import useGenre from "@/hooks/useGenre";

const GenreList = () => {
  const { data, error, loading } = useGenre();

  if (loading) return <p>Loading genres...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h6 className="m-2">
        <strong>Genre List</strong>
      </h6>
      <ul className="m-1 p-1">
        {data.map((g) =>
          g.id !== undefined && g.id !== null ? (
            <li key={g.id} value={g.id} className="m-0 p-0">
              {g.name}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default GenreList;
