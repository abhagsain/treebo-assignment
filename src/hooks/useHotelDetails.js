import { useEffect, useState } from "react";
import { getHotelDetails } from "../utils";

function useHotelDetails(hotelId) {
  const [details, setDetails] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      if (!hotelId) {
        throw new Error("Hotel Id is required");
      }
      getHotelDetails(hotelId)
        .then((res) => {
          setDetails(res);
        })
        .catch((err) => setError(err));
      return () => {};
    } catch (error) {
      console.log("🚀 ~ useEffect ~ error", error);
    }
  }, [hotelId]);
  return { details, error };
}
export default useHotelDetails;
