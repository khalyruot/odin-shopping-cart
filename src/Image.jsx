import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response[0].url);
        setImageURL(response[0].url);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

const Image = () => {
  const { imageURL, error, loading } = useImageURL();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
      <h1><Link to="/">Click here to go back Home</Link></h1>
    </>
  );
};

export default Image;
