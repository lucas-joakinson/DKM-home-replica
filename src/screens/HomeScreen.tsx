import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { ActionButton } from "../components/ActionButton";
import { SectionCard } from "../components/SectionCard";
import { colors } from "../theme/colors";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Saldo */}
        <SectionCard>
          <Text
            style={styles.title}
            allowFontScaling
            maxFontSizeMultiplier={2}
          >
            Saldo conta digital
          </Text>
          <Text
            style={styles.balance}
            allowFontScaling
            maxFontSizeMultiplier={2}
          >
            R$ 10.000,00
          </Text>
        </SectionCard>

        {/* Ações rápidas */}
        <Text style={styles.sectionTitle}>Ações Rápidas</Text>

        <View style={styles.row}>
          <ActionButton title="Transferir" />
          <ActionButton title="Gerar QR Code" />
        </View>

        <View style={styles.row}>
          <ActionButton title="Cartões" />
          <ActionButton title="Mais" />
        </View>

        {/* Pix */}
        <SectionCard>
          <Text style={styles.sectionTitle}>Pix</Text>

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
          <Text style={styles.sectionTitle}>Investimentos</Text>
          <Text
            style={styles.description}
            allowFontScaling
            maxFontSizeMultiplier={2}
          >
            Compre, venda e acompanhe ativos digitais em tempo real.
          </Text>

          <ActionButton title="Acessar investimentos" />
        </SectionCard>

        {/* Cartão */}
        <SectionCard>
          <Text style={styles.sectionTitle}>Cartão</Text>
          <Text
            allowFontScaling
            maxFontSizeMultiplier={2}
          >
            Sem anuidade | Sem mensalidade
          </Text>

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
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.muted,
  },
  balance: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 8,
  },
  description: {
    marginBottom: 12,
    color: colors.muted,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});