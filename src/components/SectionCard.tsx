import React, { ReactNode } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { colors } from "../theme/colors";

interface Props {
  children: ReactNode;
}

export const SectionCard = ({ children }: Props) => {
  const { fontScale } = useWindowDimensions();
  
  // Scale padding slightly with fontScale to maintain visual balance
  const responsivePadding = 12 * Math.min(fontScale, 1.5);

  return <View style={[styles.container, { padding: responsivePadding }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginVertical: 6,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
