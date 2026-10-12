import { StyleSheet } from 'react-native';

export const cores = {
  fundo: '#1A1033', painel: '#2A1B4D', borda: '#47327D', texto: '#FAF8F5',
  secundario: '#C9BFE6', destaque: '#FF795E', dourado: '#FFD078',
};

export const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { width: '100%', maxWidth: 820, alignSelf: 'center', padding: 24, gap: 24 },
  centro: { flexGrow: 1, justifyContent: 'center' },
  etiqueta: { color: cores.destaque, fontSize: 12, fontWeight: '700', letterSpacing: 3 },
  titulo: { color: cores.texto, fontSize: 32, fontWeight: '800', lineHeight: 39 },
  texto: { color: cores.secundario, fontSize: 16, lineHeight: 25 },
  painel: { padding: 24, borderRadius: 20, backgroundColor: cores.painel, borderWidth: 1, borderColor: cores.borda, gap: 16 },
  linha: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' },
  grade: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  rodape: { color: cores.secundario, fontSize: 12, lineHeight: 20, textAlign: 'center' },
});
