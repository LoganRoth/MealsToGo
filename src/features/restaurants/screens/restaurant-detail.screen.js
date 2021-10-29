import React, { useState } from "react";

import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeContainer } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [fruhstuckOffnen, setFruhstuckOffnen] = useState(false);
  const [mittagessenOffnen, setMittagessenOffnen] = useState(false);
  const [abendessenOffnen, setAbendessenOffnen] = useState(false);
  const [getrankeOffnen, setGetrankeOffnen] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Frühstuck"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={fruhstuckOffnen}
          onPress={() => setFruhstuckOffnen(!fruhstuckOffnen)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Mittagessen"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={mittagessenOffnen}
          onPress={() => setMittagessenOffnen(!mittagessenOffnen)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Abendessen"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={abendessenOffnen}
          onPress={() => setAbendessenOffnen(!abendessenOffnen)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Getränke"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={getrankeOffnen}
          onPress={() => setGetrankeOffnen(!getrankeOffnen)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeContainer>
  );
};
