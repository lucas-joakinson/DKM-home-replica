import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";

interface HeaderProps {
  isVisible: boolean;
  onToggleVisibility: () => void;
}

export const Header = ({ isVisible, onToggleVisibility }: HeaderProps) => {
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  const toggleNotification = () => setIsNotificationOn(!isNotificationOn);

  return (
    <View style={styles.container}>
      {/* Esquerda */}
      <TouchableOpacity style={styles.profileButton}>
        <View style={styles.profileCircle}>
          <Ionicons name="person-outline" size={24} color={colors.primary} />
        </View>
      </TouchableOpacity>

      {/* Centro */}
      <View style={styles.logoContainer}>
        <View style={styles.logoPlaceholder}>
          <Ionicons name="diamond" size={26} color={colors.primary} />
        </View>
      </View>

      {/* Direita */}
      <View style={styles.rightActions}>
        <TouchableOpacity 
          onPress={toggleNotification}
          style={styles.actionButton}
        >
          <Ionicons 
            name={isNotificationOn ? "notifications-outline" : "notifications-off-outline"} 
            size={24} 
            color={colors.text} 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={onToggleVisibility}
          style={styles.actionButton}
        >
          <Feather 
            name={isVisible ? "eye" : "eye-off"} 
            size={24} 
            color={colors.text} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.background, 
  },
  profileButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
  },
  logoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionButton: {
    marginLeft: 16,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
