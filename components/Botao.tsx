import { Pressable, StyleSheet, Text } from 'react-native';
import { cores } from '../styles/tema';

type BotaoProps = {
  titulo: string;
  onPress: () => void;
  secundario?: boolean;
  selecionado?: boolean;
};

export default function Botao({ titulo, onPress, secundario = false, selecionado = false }: BotaoProps) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: selecionado }} onPress={onPress}
      style={({ pressed }) => [styles.botao, secundario && styles.secundario, selecionado && styles.selecionado, pressed && styles.pressionado]}>
      <Text style={[styles.texto, secundario && styles.textoSecundario, selecionado && styles.textoSelecionado]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: { backgroundColor: cores.destaque, paddingVertical: 15, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center', justifyContent: 'center', minHeight: 48 },
  secundario: { backgroundColor: cores.painel, borderWidth: 1, borderColor: cores.borda },
  selecionado: { borderColor: cores.dourado, backgroundColor: '#3D2B5C' },
  pressionado: { opacity: 0.65, transform: [{ scale: 0.98 }] },
  texto: { color: cores.fundo, fontWeight: '700', fontSize: 15, textAlign: 'center' },
  textoSecundario: { color: cores.texto },
  textoSelecionado: { color: cores.dourado },
});
