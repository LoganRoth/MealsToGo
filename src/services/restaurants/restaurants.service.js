import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedresults = results.map((restaurant) => {
    return {
      ...restaurant,
      rating: restaurant.rating ? restaurant.rating : 0,
      address: restaurant.vicinity,
      isClosedTemp: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });

  return camelize(mappedresults);
};
