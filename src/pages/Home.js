import React, { useEffect, useState } from "react";
import { api, getHomepageHotels } from "../utils";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getHomepageHotels()
      .then((result) => {
        setData(result);
      })
      .catch((err) => setError(err));
  }, []);
  if (error) {
    return <div> Sorry there was an error</div>;
  }
  return <div>{data.map((hotel) => hotel.city)}</div>;
}
