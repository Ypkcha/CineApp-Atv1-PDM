import { Image, StyleSheet, Text, View } from 'react-native';
import { cores } from '../styles/tema';

export default function Cabecalho({ legenda }: { legenda: string }) {
  return (
    <View style={styles.linha}>
      <Image source={require('../assets/images/cineapp-logo.png')} style={styles.logo} accessibilityLabel="Logotipo CineApp: claquete de cinema" />
      <View style={styles.textos}>
        <Text style={styles.nome}>CineApp<Text style={styles.ponto}>.</Text></Text>
        <Text style={styles.legenda}>{legenda}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logo: { width: 46, height: 46 },
  textos: { flex: 1 },
  nome: { color: cores.texto, fontSize: 25, fontWeight: '800' },
  ponto: { color: cores.destaque },
  legenda: { color: cores.secundario, fontSize: 12, marginTop: 3 },
});
