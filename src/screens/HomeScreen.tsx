import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Header } from "../components/Header";
import { ActionButton } from "../components/ActionButton";
import { SectionCard } from "../components/SectionCard";
import { AppText } from "../components/AppText";
import { colors } from "../theme/colors";

export const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <SafeAreaView style={styles.safe}>
      <Header isVisible={isVisible} onToggleVisibility={toggleVisibility} />
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
          <ActionButton title="Transferir" />
          <ActionButton title="Gerar QR Code" />
          <ActionButton title="Cartões" />
          <ActionButton title="Mais" />
        </View>

        {/* Pix */}
        <SectionCard>
          <AppText variant="sectionTitle">Pix</AppText>

          <View style={styles.row}>
            <ActionButton title="Transferir Pix" />
            <ActionButton title="Pagar QR Code" />
          </View>

          <View style={styles.row}>
            <ActionButton title="Gerar QR Code" />
          </View>
        </SectionCard>

        {/* Investimentos */}
        <SectionCard>
          <AppText variant="sectionTitle">Investimentos</AppText>
          <AppText variant="description">
            Compre, venda e acompanhe ativos digitais em tempo real.
          </AppText>

          <ActionButton title="Acessar investimentos" />
        </SectionCard>

        {/* Cartão */}
        <SectionCard>
          <AppText variant="sectionTitle">Cartão</AppText>
          <AppText variant="description">
            Sem anuidade | Sem mensalidade
          </AppText>

          <ActionButton title="Solicitar" />
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
