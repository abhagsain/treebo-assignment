export function api(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
const BASE_URL = "http://www.mocky.io/v2";
export async function getHomepageHotels() {
  return new Promise((resolve, reject) => {
    const hotelsData = api(`${BASE_URL}/5a7f23442e00005000b56873`);
    const hotelPrices = api(`${BASE_URL}/5a7f24f02e00005200b56875`);
    Promise.all([hotelsData, hotelPrices])
      .then(([data, prices]) => {
        const concatinatedData = data.data.map((el) => {
          const item = prices.data.find((item) => item.id === el.id);
          return { ...el, ...item };
        });
        resolve(concatinatedData);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}
