import { Card } from "../components/Card";
import { useEffect } from "react";
import { useFetch } from "../hookss/useFetch";
export function MovieList({ apiPath, title }) {
  useEffect(() => {
    document.title = `${title}`;
  });
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap min-[360px] max-[1200px]:justify-evenly ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
