import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { AppText } from "./AppText";
import { colors } from "../theme/colors";

interface Props {
  title: string;
  style?: ViewStyle;
}

export const ActionButton = ({ title, style }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
    >
      <AppText
        variant="small"
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
    minHeight: 96,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    textAlign: "center",
    color: colors.secondaryText,
    fontWeight: "600",
  },
});
