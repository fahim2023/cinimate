import { useState, useEffect } from "react";
export function useFetch(apiPath, queryTerm = "") {
  const [data, setData] = useState([]);
  const apiKey = "81d83e663f05e2c421643f278ba1cdf7";

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}&pages=${pages}`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchData();
  }, [url]);
  return { data };
}
