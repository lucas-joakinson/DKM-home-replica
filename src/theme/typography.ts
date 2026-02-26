import { useWindowDimensions } from "react-native";

/**
 * Hook para obter o fator de escala de fonte atual de forma reativa.
 * Se o usuário mudar a configuração do sistema enquanto o app está aberto,
 * este hook irá disparar um re-render.
 */
export const useResponsiveFontSize = () => {
  const { fontScale } = useWindowDimensions();
  
  const scale = (size: number) => {
    return size * fontScale;
  };

  return { scale, fontScale };
};

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
  huge: 32,
};
