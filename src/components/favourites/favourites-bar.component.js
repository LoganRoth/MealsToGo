import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, goToDetail }) => {
  return (
    <FavouritesWrapper>
      <Text>{favourites.length ? "Favourites" : "No Favourites Yet"}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((res) => {
          const key = res.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  goToDetail("RestaurantDetail", { restaurant: res })
                }
              >
                <CompactRestaurantInfo restaurant={res} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
