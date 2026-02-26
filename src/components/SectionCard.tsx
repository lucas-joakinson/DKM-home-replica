import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

interface Props {
  children: ReactNode;
}

export const SectionCard = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
