import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;
  const viewport = geometry.viewport;

  return { lat, lng, viewport };
};
