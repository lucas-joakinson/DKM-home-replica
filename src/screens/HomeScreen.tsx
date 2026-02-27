import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../components/Header";
import { ActionButton } from "../components/ActionButton";
import { SectionCard } from "../components/SectionCard";
import { AppText } from "../components/AppText";
import { colors } from "../theme/colors";
import { getUserProfile } from "../services/api";

export const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        if (token) {
          const profile = await getUserProfile(token);
          setUserData(profile);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do perfil.");
      }
    };

    fetchUser();
  }, []);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <SafeAreaView style={styles.safe}>
      <Header 
        isVisible={isVisible} 
        onToggleVisibility={toggleVisibility} 
        userName={userData?.name || "Usuário"} 
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Saldo */}
        <SectionCard>
          <AppText variant="title">
            Saldo conta digital
          </AppText>
          <AppText variant="balance">
            {isVisible ? "R$ 10.000,00" : "R$ ••••••••"}
          </AppText>
        </SectionCard>

        {/* Ações rápidas */}
        <AppText variant="sectionTitle">Ações Rápidas</AppText>

        <View style={styles.row}>
          <ActionButton title="Transferir" iconName="send" />
          <ActionButton title="QR Code" iconName="maximize" />
          <ActionButton title="Cartões" iconName="credit-card" />
          <ActionButton title="Mais" iconName="plus-circle" />
        </View>

        {/* Pix */}
        <SectionCard>
          <AppText variant="sectionTitle">Pix</AppText>

          <View style={styles.row}>
            <ActionButton 
              title="Transferir" 
              iconName="pix" 
              iconFamily="MaterialIcons" 
            />
            <ActionButton title="Pagar QR" iconName="camera" />
            <ActionButton title="Gerar QR" iconName="maximize" />
          </View>
        </SectionCard>

        {/* Investimentos */}
        <SectionCard>
          <AppText variant="sectionTitle">Investimentos</AppText>
          <AppText variant="description">
            Compre, venda e acompanhe ativos digitais em tempo real.
          </AppText>

          <ActionButton title="Acessar investimentos" iconName="trending-up" />
        </SectionCard>

        {/* Cartão */}
        <SectionCard>
          <AppText variant="sectionTitle">Cartão</AppText>
          <AppText variant="description">
            Sem anuidade | Sem mensalidade
          </AppText>

          <ActionButton title="Solicitar novo cartão" iconName="credit-card" />
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
