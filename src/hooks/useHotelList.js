import { useEffect, useState } from "react";
import { getHomepageHotels } from "../utils";

function useHotelList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getHomepageHotels()
      .then((result) => {
        setData(result);
      })
      .catch((err) => setError(err));
  }, []);
  return { data, error };
}
export default useHotelList;
