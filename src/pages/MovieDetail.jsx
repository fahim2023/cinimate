import { useParams } from "react-router";
import { useState, useEffect } from "react";

export const MovieDetail = ({ title }) => {
  useEffect(() => {
    document.title = `${data.title}`;
  });
  const movie = useParams();
  const [data, setData] = useState({});
  const formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "USD", // Replace with the desired currency
  });

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          movie.id
        }?api_key=81d83e663f05e2c421643f278ba1cdf7&pages=${4}`
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    }
    fetchMovie();
  }, [movie.id]);
  const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} alt={data.title} className="w-full rounded-lg" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white min-[600px]: p-3">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data.title}
          </h1>
          <p className="my-4 min-[600px]: text-[1.4rem]">{data.overview}</p>
          {data.genres ? (
            <p className="flex flex-wrap gap-2">
              {data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-200 p-3 rounded dark:border-gray-600"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          <div className="my-5">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                {data.vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                {data.vote_count}
              </span>
            </div>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime</span>
            <span>{data.runtime} minutes</span>
          </p>
          {data.budget ? (
            <p className="my-4">
              <span className="mr-2 font-bold">Budged</span>
              <span>{formatter.format(Number(data.budget))} </span>
            </p>
          ) : (
            ""
          )}

          <p className="my-4">
            <span className="mr-2 font-bold">Revenue</span>
            <span>{formatter.format(data.revenue)} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date</span>
            <span>{data.release_date} </span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code</span>
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}`}
              target="_blank"
            >
              {data.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
