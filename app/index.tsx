import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import { cores, estilos } from '../styles/tema';

export default function Inicio() {
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView contentContainerStyle={[estilos.conteudo, estilos.centro]}>
        <Cabecalho legenda="Sua próxima viagem começa aqui" />
        <View style={styles.hero}>
          <Image source={require('../assets/images/hero-espaco.png')} style={styles.poster} resizeMode="cover" accessibilityLabel="Ilustração de um planeta com anéis, uma lua e um foguete em órbita em uma nebulosa roxa" />
          <View style={styles.selo}><Text style={styles.seloTexto}>UMA NOVA GALÁXIA A CADA PLAY</Text></View>
        </View>
        <View style={styles.chamada}>
          <Text style={estilos.etiqueta}>CONTAGEM REGRESSIVA. IGNIÇÃO. DESCOBERTA.</Text>
          <Text style={styles.titulo}>Grandes viagens.{ '\n' }Além das estrelas.</Text>
          <Text style={estilos.texto}>Explore nosso catálogo de clássicos do espaço, descubra os detalhes de cada missão e marque os filmes que merecem um lugar nos seus favoritos.</Text>
        </View>
        <Botao titulo="Decolar para o catálogo →" onPress={() => router.push('/catalogo')} />
        <Text style={estilos.rodape}>6 filmes · Clássicos do espaço sideral</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hero: { height: 240, overflow: 'hidden', borderRadius: 22, backgroundColor: cores.painel },
  poster: { width: '100%', height: '100%' },
  selo: { position: 'absolute', bottom: 16, left: 16, right: 16, backgroundColor: '#1A1033E6', borderRadius: 8, padding: 12 },
  seloTexto: { color: cores.dourado, fontSize: 10, letterSpacing: 2, textAlign: 'center', fontWeight: '700' },
  chamada: { gap: 14 },
  titulo: { color: cores.texto, fontSize: 37, lineHeight: 44, fontWeight: '800' },
});
