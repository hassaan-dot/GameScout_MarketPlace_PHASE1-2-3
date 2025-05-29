import { Platform } from "react-native";

export const IsMobileView: boolean =
  Platform.OS === "ios" || Platform.OS === "android";
