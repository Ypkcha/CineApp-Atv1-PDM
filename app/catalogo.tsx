import { useEffect } from 'react';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../components/Botao';
import Cabecalho from '../components/Cabecalho';
import FilmeCard from '../components/FilmeCard';
import { filmes } from '../data/filmes';
import { estilos } from '../styles/tema';

export default function Catalogo() {
  // Executa uma vez ao montar esta tela, registrando o acesso ao catálogo.
  useEffect(() => { console.log('Catálogo carregado: 6 filmes disponíveis.'); }, []);
  return (
    <SafeAreaView style={estilos.tela}>
      <ScrollView contentContainerStyle={estilos.conteudo}>
        <Cabecalho legenda="Uma seleção para a sua próxima decolagem" />
        <View style={estilos.linha}>
          <Botao titulo="← Início" secundario onPress={() => router.canGoBack() ? router.back() : router.replace('/')} />
          <Botao titulo="Sobre o app" secundario onPress={() => router.push('/sobre')} />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={estilos.etiqueta}>EM CARTAZ NO SEU CATÁLOGO</Text>
          <Text style={estilos.titulo}>Escolha sua próxima história.</Text>
          <Text style={estilos.texto}>Toque em um cartaz para saber mais ou na estrela para favoritar.</Text>
        </View>
        <View style={estilos.grade}>
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} titulo={filme.titulo} genero={filme.genero} ano={filme.ano} imagem={filme.imagem}
              onDetalhes={(favorito) => router.push({ pathname: '/detalhes', params: { id: filme.id, favorito: String(favorito) } })} />
          ))}
        </View>
        <Text style={estilos.rodape}>6 filmes, um universo de possibilidades.{ '\n' }Clássicos do espaço no catálogo do projeto de PDM.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
