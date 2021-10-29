import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Info,
  Rating,
  Section,
  SectionEnd,
  Open,
  Image15x15,
  RestaurantCard,
  RestaurantCardCover,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemp,
    placeId,
  } = restaurant;

  const ratingsArray = rating
    ? Array.from(new Array(Math.floor(rating)))
    : null;

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingsArray ? (
              ratingsArray.map((_, idx) => (
                <SvgXml
                  key={`star-${placeId}-${idx}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))
            ) : (
              <Text variant="error">{"No Ratings"}</Text>
            )}
          </Rating>
          <SectionEnd>
            {isClosedTemp && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image15x15 source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
