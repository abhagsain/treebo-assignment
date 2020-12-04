import React from "react";
import { Link } from "react-router-dom";
import imagePlaceholder from "../../assests/img-placeholder.png";
import { Card, CardContent, CardMedia } from "../../components/Card";
import Heading from "../../components/Heading/Heading";
import "./home.css";
import HomeSkeleton from "./HomeSkeleton";
import useHotelList from "../../hooks/useHotelList";

export default function Home() {
  const { data, error } = useHotelList();
  if (!data.length) {
    return <HomeSkeleton />;
  }
  if (error) {
    return <div> Sorry there was an error</div>;
  }
  return (
    <>
      <div className="card-list">
        {data.map((hotel) => {
          const prices = Object.values(hotel.price);
          let minPrice = 0;
          let hasSoldOut = prices.every((price) => price === null);
          if (!hasSoldOut) {
            minPrice = Math.min(...prices.filter((el) => el !== null));
          }
          return (
            <Card key={hotel.id}>
              <Link to={`/${hotel.id}/details`}>
                <CardMedia
                  title={hotel.name}
                  className="card-image"
                  src={imagePlaceholder}
                />
              </Link>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <Link to={`/${hotel.id}/details`}>
                      <Heading variant="lg">{hotel.name}</Heading>
                    </Link>
                    <p>
                      {hotel.locality}
                      {` `} {hotel.city}
                    </p>
                  </div>
                  <p>
                    {hasSoldOut ? (
                      "Sold out"
                    ) : (
                      <span className="font-semibold">₹{minPrice}</span>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
