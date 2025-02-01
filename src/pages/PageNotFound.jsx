import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page not found / cinemate";
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white max-[400px]:text-5xl">
            404, oops!
          </p>
          <img
            className="rounded w-1/2 h-auto"
            src={PageNotFoundImage}
            alt="page not found image 404"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="click"
            className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg py-3"
          >
            <Link to="/">Back to Cinimate</Link>
          </button>
        </div>
      </section>
    </main>
  );
};
