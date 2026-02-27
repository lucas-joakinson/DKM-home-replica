import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  AppState,
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
  const { width, fontScale } = useWindowDimensions();
  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const [, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        setUpdateTrigger(prev => prev + 1);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const toggleNotification = () => setIsNotificationOn(!isNotificationOn);

  const isSmallScreen = width < 480 || fontScale > 1.3;

  return (
    <View style={[styles.container, isSmallScreen && styles.containerSmall]}>
      {/* Esquerda / Centro */}
      <View style={[
        styles.leftContainer,
        isSmallScreen && styles.leftContainerCenter
      ]}>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={24} color={colors.primary} />
          </View>
        </TouchableOpacity>
        <AppText 
          style={[styles.userName, { fontSize: 16 * fontScale }]} 
          numberOfLines={1} 
          ellipsizeMode="tail"
        >
          Olá, {userName || "Carregando..."}
        </AppText>
      </View>

      {/* Direita */}
      <View style={[
        styles.rightActions, 
        isSmallScreen && styles.rightActionsColumn
      ]}>
        <TouchableOpacity 
          onPress={toggleNotification}
          style={[styles.actionButton, isSmallScreen && styles.actionButtonSmall]}
        >
          <Ionicons 
            name={isNotificationOn ? "notifications-outline" : "notifications-off-outline"} 
            size={22} 
            color={colors.text} 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={onToggleVisibility}
          style={[styles.actionButton, isSmallScreen && styles.actionButtonSmall]}
        >
          <Feather 
            name={isVisible ? "eye" : "eye-off"} 
            size={22} 
            color={colors.text} 
          />
        </TouchableOpacity>

        {onLogout && (
          <TouchableOpacity 
            onPress={onLogout}
            style={[styles.actionButton, isSmallScreen && styles.actionButtonSmall]}
          >
            <Ionicons 
              name="log-out-outline" 
              size={22} 
              color={colors.error} 
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
  containerSmall: {
    alignItems: "center",
  },
  profileButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 10,
  },
  leftContainerCenter: {
    justifyContent: "flex-start",
    marginRight: 0,
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
    flexShrink: 1,
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: 130,
  },
  rightActionsColumn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    minWidth: 44,
  },
  actionButton: {
    marginLeft: 12,
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 19,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionButtonSmall: {
    marginLeft: 0,
  },
});
