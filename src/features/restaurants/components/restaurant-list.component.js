import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  background-color: ${(props) => props.theme.colours.bg.secondary};
`;
