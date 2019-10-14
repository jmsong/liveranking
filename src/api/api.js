import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  async function getStreamerListFrom(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.error(e);
      setErrors(e);
    }

    setLoading(false);
  }

  useEffect(() => {
    getStreamerListFrom(url);
  }, [url]);

  return { data, loading, errors };
};

export default useFetch;
