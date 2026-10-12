import { router } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import { cores, estilos } from '../styles/tema';

export default function Sobre() {
  function voltar() {
    if (router.canGoBack()) router.back();
    else router.replace('/catalogo');
  }
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView contentContainerStyle={[estilos.conteudo, estilos.centro]}>
        <Cabecalho legenda="Sobre este projeto" />
        <View style={estilos.painel}>
          <Image source={require('../assets/images/cineapp-logo.png')} style={styles.logo} accessibilityLabel="Logotipo CineApp" />
          <Text style={estilos.etiqueta}>CINEMA PARA DESCOBRIR</Text>
          <Text style={estilos.titulo}>CineApp</Text>
          <Text style={estilos.texto}>Um catálogo de filmes estelares para explorar histórias de outro mundo, consultar informações e selecionar seus favoritos de forma simples.</Text>
        </View>
        <View style={estilos.painel}>
          <Text style={styles.subtitulo}>Atividade I</Text>
          <Text style={estilos.texto}>Programação para Dispositivos Móveis I{ '\n' }Fatec Registro{ '\n' }Professor Maylon H. Oliveira</Text>
          <Text style={estilos.texto}>Atividade avaliativa: componentes, Flexbox, eventos, estado, efeitos, navegação e Props.</Text>
        </View>
        <Botao titulo="← Voltar ao catálogo" onPress={voltar} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: { width: 88, height: 88 },
  versao: { color: cores.dourado, fontSize: 14, fontWeight: '700' },
  subtitulo: { color: cores.texto, fontSize: 21, fontWeight: '700' },
});
