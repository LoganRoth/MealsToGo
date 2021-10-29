import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFav = favourites.find((r) => {
    return r.placeId === restaurant.placeId;
  });
  return (
    <FavouriteButton
      onPress={() => {
        isFav ? removeFromFavourites(restaurant) : addToFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        size={24}
        color={isFav ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
