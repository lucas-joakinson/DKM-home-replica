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
      {/* Esquerda: Ícone de Perfil */}
      <TouchableOpacity style={styles.leftSide}>
        <Ionicons name="person-circle-outline" size={32} color={colors.primary} />
      </TouchableOpacity>

      {/* Centro: Espaço para Imagem (Logo) */}
      <View style={styles.center}>
        <View style={styles.logoPlaceholder}>
          <Ionicons name="diamond-outline" size={24} color={colors.primary} />
        </View>
      </View>

      {/* Direita: Notificações e Olho */}
      <View style={styles.rightSide}>
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
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background,
  },
  leftSide: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rightSide: {
    flexDirection: "column",
    alignItems: "center",
    width: 80,
    justifyContent: "flex-end",
  },
  actionButton: {
    marginLeft: 12,
  },
});
