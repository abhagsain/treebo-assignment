import React, { useEffect, useState } from "react";
import { getHotelDetails } from "../../utils";

export default function HotelDetails({ match: { params } }) {
  const [details, setDetails] = useState();
  useEffect(() => {
    getHotelDetails(params.id).then((res) => {
      setDetails(res);
    });
    return () => {};
  }, [params.id]);
  return <div>{JSON.stringify(details)}</div>;
}
