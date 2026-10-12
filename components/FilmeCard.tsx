import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import Botao from './Botao';
import { cores } from '../styles/tema';

type FilmeCardProps = {
  titulo: string; genero: string; ano: number;
  imagem: ImageSourcePropType; onDetalhes: (favorito: boolean) => void;
};

export default function FilmeCard({ titulo, genero, ano, imagem, onDetalhes }: FilmeCardProps) {
  // Cada card tem seu próprio estado. O catálogo permanece montado ao abrir detalhes.
  const [favorito, setFavorito] = useState(false);
  return (
    <View style={styles.card}>
      <Pressable accessibilityRole="button" accessibilityLabel={`Ver detalhes de ${titulo}`}
        onPress={() => onDetalhes(favorito)} style={({ pressed }) => [styles.selecao, pressed && styles.pressionado]}>
        <View style={styles.moldura}>
          <Image source={imagem} style={styles.poster} resizeMode="cover" accessibilityLabel={`Cartaz de ${titulo}`} />
        </View>
        <View style={styles.informacoes}>
          <Text style={styles.genero}>{genero.toUpperCase()}</Text>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.ano}>{ano} · Ver detalhes →</Text>
        </View>
      </Pressable>
      <View style={styles.acao}>
        <Botao titulo={favorito ? '★ Favorito' : '☆ Favoritar'} secundario selecionado={favorito}
          onPress={() => setFavorito((anterior) => !anterior)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexGrow: 1, flexBasis: '44%', minWidth: 140, maxWidth: 380, backgroundColor: cores.painel, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: cores.borda },
  selecao: { flex: 1 },
  pressionado: { opacity: 0.65 },
  moldura: { width: '100%', aspectRatio: 2 / 3 },
  poster: { width: '100%', height: '100%' },
  informacoes: { padding: 14, gap: 7 },
  genero: { color: cores.destaque, fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  titulo: { color: cores.texto, fontSize: 18, lineHeight: 23, fontWeight: '700' },
  ano: { color: cores.secundario, fontSize: 12, lineHeight: 18 },
  acao: { padding: 12, paddingTop: 0 },
});
