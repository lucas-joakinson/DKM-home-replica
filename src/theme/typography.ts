import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

export const scaleFont = (size: number) => {
  return size * fontScale;
};