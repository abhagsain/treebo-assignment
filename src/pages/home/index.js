import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { getHomepageHotels } from "../../utils";
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
    <div className="hotel-container">
      <div className="card-list">
        {data.map((hotel) => {
          const prices = Object.values(hotel.price);
          let minPrice = 0;
          let hasSoldOut = prices.some((price) => price === null);
          if (!hasSoldOut) {
            minPrice = Math.min(...prices.filter((el) => el !== null));
          }
          return (
            <div key={hotel.id}>
              <div className="card-item">
                <img
                  src="https://designshack.net/wp-content/uploads/placeholder-image.png"
                  alt={hotel.name}
                  className="card-image"
                  srcset="https://designshack.net/wp-content/uploads/placeholder-image.png"
                />
                <div className="card-body">
                  <div>
                    <div>
                      <h2>{hotel.name}</h2>
                      <p>{hotel.city}</p>
                    </div>
                    <p>{!hasSoldOut ? `₹${minPrice}/night` : "Sold out"}</p>
                  </div>
                </div>
                <Button onClick={() => history.push(`/${hotel.id}/details`)}>
                  Take a look
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
