import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, original_title: title, overview, poster_path: image } = movie;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={
            image
              ? `https://image.tmdb.org/t/p/w500/${image}`
              : `https://image.tmdb.org/t/p/w500/backdrop_path`
          }
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
