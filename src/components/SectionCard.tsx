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
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
});