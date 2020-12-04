export function api(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
const BASE_URL = "https://www.mocky.io/v2";
export async function getHotelDetails(hotelId) {
  return new Promise((resolve, reject) => {
    const hotelPrices = api(`${BASE_URL}/5a7f24f02e00005200b56875`);
    const hotelDetail = api(`${BASE_URL}/5a7f265b2e00005d00b56877`);
    // If we couldn't get details we can still show prices and same for the prices
    Promise.allSettled([hotelDetail, hotelPrices])
      .then(([details, prices]) => {
        const item = prices.value.data.find(
          (price) => price.id === Number(hotelId),
        );
        let detailWithPrice = {};
        if (prices.status !== "rejected") {
          detailWithPrice = { ...item, ...detailWithPrice };
        }
        if (details.status !== "rejected") {
          detailWithPrice = {
            details: { ...details.value.data },
            ...detailWithPrice,
          };
        }
        resolve(detailWithPrice);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}
export async function getHomepageHotels() {
  return new Promise((resolve, reject) => {
    const hotelsData = api(`${BASE_URL}/5a7f23442e00005000b56873`);
    const hotelPrices = api(`${BASE_URL}/5a7f24f02e00005200b56875`);
    // If we couldn't get prices of the hotels then
    // We don't show anything
    Promise.all([hotelsData, hotelPrices])
      .then(([data, prices]) => {
        const dataWithPrices = data.data.map((el) => {
          const item = prices.data.find((price) => price.id === el.id);
          return { ...el, ...item };
        });
        resolve(dataWithPrices);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}
