import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error));
  }, []);
  

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
        <h1>
        <Link to="/">Click here to go back Home</Link>
        </h1>
      </>
    )
  );
};

export default Image;
