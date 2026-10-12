import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import { filmes } from '../data/filmes';
import { cores, estilos } from '../styles/tema';

export default function Detalhes() {
  const { id, favorito } = useLocalSearchParams<{ id: string; favorito: string }>();
  const filme = filmes.find((item) => item.id === id);
  function voltar() {
    if (router.canGoBack()) router.back();
    else router.replace('/catalogo');
  }
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView contentContainerStyle={estilos.conteudo}>
        <Cabecalho legenda="Cada filme tem uma história" />
        <Botao titulo="← Voltar ao catálogo" secundario onPress={voltar} />
        {filme ? (
          <>
            <Image source={filme.imagem} style={styles.poster} resizeMode="contain" accessibilityLabel={`Cartaz de ${filme.titulo}`} />
            <View style={{ gap: 12 }}>
              <Text style={estilos.etiqueta}>{filme.genero.toUpperCase()}</Text>
              <Text style={estilos.titulo}>{filme.titulo}</Text>
              <Text style={estilos.texto}>{filme.ano} · {filme.duracao}</Text>
              <Text style={styles.favorito}>{favorito === 'true' ? '★ Nos seus favoritos' : '☆ Ainda não favoritado'}</Text>
            </View>
            <View style={estilos.painel}>
              <Text style={styles.subtitulo}>A história</Text>
              <Text style={estilos.texto}>{filme.sinopse}</Text>
            </View>
            <Text style={estilos.rodape}>Marque ou desmarque seus favoritos no catálogo.</Text>
          </>
        ) : (
          <View style={estilos.painel}>
            <Text style={estilos.titulo}>Filme não encontrado</Text>
            <Text style={estilos.texto}>Retorne ao catálogo e escolha um dos filmes disponíveis.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  poster: { width: '100%', height: 380, borderRadius: 18, backgroundColor: cores.painel },
  favorito: { color: cores.dourado, fontSize: 15, fontWeight: '600' },
  subtitulo: { color: cores.texto, fontWeight: '700', fontSize: 21 },
});
