import React, { useMemo } from "react";
import { Text, TextProps, StyleSheet, useWindowDimensions } from "react-native";
import { colors } from "../theme/colors";

interface AppTextProps extends TextProps {
  variant?: "title" | "balance" | "sectionTitle" | "description" | "body" | "small";
  children: React.ReactNode;
}

export const AppText = ({
  variant = "body",
  style,
  allowFontScaling = true,
  
  children,
  ...props
}: AppTextProps) => {
  const { fontScale } = useWindowDimensions();

  const variantStyle = useMemo(() => {
    const baseSizes: Record<string, number> = {
      title: 16,
      balance: 28,
      sectionTitle: 18,
      description: 14,
      body: 16,
      small: 14,
    };

    const fontSize = baseSizes[variant] || 16;

    const scaledFontSize = allowFontScaling 
      ? fontSize * Math.min(fontScale)
      : fontSize;

    return {
      fontSize: scaledFontSize,
      ...styles[variant],
    };
  }, [variant, fontScale, allowFontScaling]);

  return (
    <Text
      style={[styles.base, variantStyle, style]}
      allowFontScaling={false}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: colors.text,
  },
  title: {
    fontWeight: "600",
    color: colors.muted,
  },
  balance: {
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    fontWeight: "700",
    marginVertical: 8,
  },
  description: {
    color: colors.muted,
    marginBottom: 12,
  },
  body: {
    // Default
  },
  small: {
    fontWeight: "600",
  },
});
