import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Card, CardContent, CardMedia } from "../../components/Card";
import Heading from "../../components/Heading/Heading";
import { getHomepageHotels } from "../../utils";
import imagePlaceholder from "../../assests/img-placeholder.png";
import "./home.css";
export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();
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
                {/* <Button
                className="w-full mt-2 cursor-pointer"
                onClick={() => history.push(`/${hotel.id}/details`)}
              >
                Take a look
              </Button> */}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
