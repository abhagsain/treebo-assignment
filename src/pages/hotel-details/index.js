import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import { getHotelDetails } from "../../utils";
import "./hotel-details.css";
export default function HotelDetails({ match: { params } }) {
  const [details, setDetails] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    getHotelDetails(params.id)
      .then((res) => {
        setDetails(res);
      })
      .catch((err) => setError(err));
    return () => {};
  }, [params.id]);
  if (!details) return <div>Loading</div>;
  if (error) return <div>There's an error! Please refresh the page</div>;
  const { details: hotelDetail, price } = details;
  const Price = ({ children }) => {
    return <span className="text-2xl font-semibold">{children}</span>;
  };
  return (
    <div>
      {price && (
        <div className="details-section">
          <Heading variant="xl" className="mb-2 font-semibold ">
            Type
          </Heading>
          <div className="flex justify-between">
            {Object.entries(price).map(([key, value]) => {
              return (
                <div key={key}>
                  <Heading variant="lg" className="capitalize">
                    {key}
                  </Heading>
                  <p className="mt-2">
                    {!!value ? (
                      <span>
                        ₹<Price>{value}</Price>
                      </span>
                    ) : (
                      <Price>Sold Out</Price>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {hotelDetail && (
        <div className="details-section">
          {Object.entries(hotelDetail).map(([key, value]) => {
            return (
              <div className="flex justify-between mt-4 flex-column" key={key}>
                <Heading variant="xl" className="mb-2 font-semibold capitalize">
                  {key}
                </Heading>
                <div className="flex justify-between mt-2">
                  {value.map((essentialItem) => (
                    <div key={essentialItem}>{essentialItem}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
