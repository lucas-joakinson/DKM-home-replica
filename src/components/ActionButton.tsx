import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import { AppText } from "./AppText";
import { colors } from "../theme/colors";

interface Props {
  title: string;
  style?: ViewStyle;
}

export const ActionButton = ({ title, style }: Props) => {
  const { fontScale } = useWindowDimensions();
  
  // Adjust minHeight based on fontScale to prevent text clipping
  const dynamicMinHeight = 72 * fontScale;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { minHeight: dynamicMinHeight }, style]}
    >
      <AppText
        variant="mini"
        style={styles.text}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary, 
    flex: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    textAlign: "center",
    color: colors.secondaryText,
    fontWeight: "600",
  },
});
