import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { SafeContainer } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { FadeInView } from "../../../components/animations/fade.animation";

import { LocationContext } from "../../../services/location/location.context";
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
  const { restaurants, isLoading, resError } = useContext(RestaurantsContext);
  const { locError } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!resError || !!locError;
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
          {hasError && (
            <Spacer size="large" position="left">
              <Text variant="error">
                Something went wrong retrieving the data
              </Text>
            </Spacer>
          )}
          {!hasError && (
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
          )}
        </>
      )}
    </SafeContainer>
  );
};
