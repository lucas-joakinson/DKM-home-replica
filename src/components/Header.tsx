import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { AppText } from "./AppText";

interface HeaderProps {
  isVisible: boolean;
  onToggleVisibility: () => void;
  userName?: string;
  onLogout?: () => void;
}

export const Header = ({ isVisible, onToggleVisibility, userName, onLogout }: HeaderProps) => {
  const [isNotificationOn, setIsNotificationOn] = useState(true);

  const toggleNotification = () => setIsNotificationOn(!isNotificationOn);

  return (
    <View style={styles.container}>
      {/* Esquerda */}
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={24} color={colors.primary} />
          </View>
        </TouchableOpacity>
        <AppText style={styles.userName}>Olá, {userName || "Carregando..."}</AppText>
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

        {onLogout && (
          <TouchableOpacity 
            onPress={onLogout}
            style={styles.actionButton}
          >
            <Ionicons 
              name="log-out-outline" 
              size={24} 
              color={colors.error || "#FF3B30"} 
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
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
  leftContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
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
  userName: {
    marginLeft: 12,
    fontWeight: "600",
    color: colors.text,
  },
  rightActions: {
    flex: 1,
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
