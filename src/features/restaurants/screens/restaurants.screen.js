import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { SafeContainer } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.component";

const CenterIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeContainer>
      <Search onToggle={setIsToggled} isToggled={isToggled} />

      {isLoading ? (
        <CenterIndicatorContainer>
          <ActivityIndicator
            size={50}
            animating={true}
            color={Colors.blue300}
          />
        </CenterIndicatorContainer>
      ) : (
        <>
          {isToggled && (
            <FavouritesBar
              favourites={favourites}
              goToDetail={navigation.navigate}
            />
          )}

          <RestaurantList
            data={restaurants}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item.item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <FadeInView>
                      <RestaurantInfoCard restaurant={item.item} />
                    </FadeInView>
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeContainer>
  );
};
