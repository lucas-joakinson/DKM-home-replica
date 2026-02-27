import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { colors } from "../theme/colors";
import { AppText } from "../components/AppText";
import { login } from "../services/api";

export const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formatCPF = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
  };

  const handleCpfChange = (text: string) => {
    setCpf(formatCPF(text));
  };

  const handleLogin = async () => {
    const cleanCpf = cpf.replace(/\D/g, "");

    if (cleanCpf.length !== 11 || !password) {
      Alert.alert("Erro", "Insira um CPF válido (11 dígitos) e sua senha");
      return;
    }

    setLoading(true);
    try {
      const data = await login(cleanCpf, password);
      
      const token = data.access_token || data.acess_token;

      if (data && token) {
        await AsyncStorage.setItem("access_token", token);
        navigation.replace("Home");
      } else {
        Alert.alert("Erro", "Falha na autenticação: Token não recebido");
      }
    } catch (error: any) {
      console.error("Login Error:", error);
      const message = error.message || "Usuário ou senha incorreta";
      Alert.alert("Erro", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <AppText variant="balance" style={styles.title}>
              Bem-vindo
            </AppText>
            <AppText variant="description">
              Faça login para acessar sua conta
            </AppText>
          </View>

          <View style={styles.form}>
            <AppText variant="small" style={styles.label}>CPF</AppText>
            <TextInput
              style={styles.input}
              placeholder="000.000.000-00"
              placeholderTextColor={colors.muted}
              value={cpf}
              onChangeText={handleCpfChange}
              keyboardType="numeric"
              autoCapitalize="none"
              maxLength={14}
            />

            <AppText variant="small" style={styles.label}>Senha</AppText>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={colors.muted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <AppText style={styles.buttonText}>Entrar</AppText>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    color: colors.primary,
    marginBottom: 8,
  },
  form: {
    backgroundColor: colors.card,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    marginBottom: 8,
    color: colors.muted,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.background,
  },
  button: {
    backgroundColor: colors.primary,
    height: 54,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },
});
