import { useSearchParams } from "react-router";
import { useFetch } from "../hookss/useFetch";
import { useEffect } from "react";
import { Card } from "../components/Card";
export const Search = ({ apiPath }) => {
  useEffect(() => {
    document.title = `${queryTerm}`;
  });
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);
  console.log(movies);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for ${queryTerm}`
            : `result for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
