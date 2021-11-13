import { Platform } from "react-native";
export const localHost = "http://localhost:5001/mealstogo-d7e68/us-central1";
export const liveHost =
  "https://us-central1-mealstogo-d7e68.cloudfunctions.net";
export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
