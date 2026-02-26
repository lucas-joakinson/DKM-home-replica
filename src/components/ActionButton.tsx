import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { AppText } from "./AppText";
import { colors } from "../theme/colors";

interface Props {
  title: string;
  iconName?: any;
  iconFamily?: "Feather" | "MaterialIcons";
  style?: ViewStyle;
}

export const ActionButton = ({ 
  title, 
  iconName, 
  iconFamily = "Feather",
  style 
}: Props) => {
  const { fontScale } = useWindowDimensions();
  
  const dynamicMinHeight = 84 * fontScale;
  const iconSize = 24 * fontScale;

  const IconComponent = iconFamily === "MaterialIcons" ? MaterialIcons : Feather;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { minHeight: dynamicMinHeight }, style]}
    >
      {iconName && (
        <IconComponent 
          name={iconName} 
          size={iconSize} 
          color={colors.primary} 
          style={styles.icon}
        />
      )}
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
    padding: 10,
    margin: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    marginBottom: 6,
  },
  text: {
    textAlign: "center",
    color: colors.secondaryText,
    fontWeight: "600",
  },
});
