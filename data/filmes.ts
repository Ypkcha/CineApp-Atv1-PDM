import type { ImageSourcePropType } from 'react-native';

export type Filme = {
  id: string; titulo: string; genero: string; ano: number;
  imagem: ImageSourcePropType; duracao: string; sinopse: string;
};

// Catálogo de clássicos sobre o espaço cadastrado no código. Os cartazes são ilustrações locais e autorais.
export const filmes: Filme[] = [
  { id: 'odisseia', titulo: '2001: Uma Odisseia no Espaço', genero: 'Ficção científica', ano: 1968,
    imagem: require('../assets/images/filmes/odisseia.png'), duracao: '2h 29min',
    sinopse: 'Um misterioso monólito negro surge na pré-história e reaparece na Lua, enviando um sinal até Júpiter. Durante a missão para investigá-lo, a tripulação da nave Discovery enfrenta o supercomputador HAL 9000, em uma jornada sobre a evolução da humanidade.' },
  { id: 'interestelar', titulo: 'Interestelar', genero: 'Ficção científica', ano: 2014,
    imagem: require('../assets/images/filmes/interestelar.png'), duracao: '2h 49min',
    sinopse: 'Com a Terra à beira do colapso, um ex-piloto da NASA lidera uma expedição através de um buraco de minhoca em busca de um novo lar para a humanidade. Cada hora longe de casa custa anos de espera para a filha que ele deixou para trás.' },
  { id: 'gravidade', titulo: 'Gravidade', genero: 'Suspense', ano: 2013,
    imagem: require('../assets/images/filmes/gravidade.png'), duracao: '1h 31min',
    sinopse: 'Durante uma caminhada espacial, uma engenheira e um astronauta veterano são atingidos por destroços de satélites e ficam à deriva em órbita. Sem comunicação com a Terra e com o oxigênio acabando, ela precisa encontrar forças para voltar para casa.' },
  { id: 'marte', titulo: 'Perdido em Marte', genero: 'Aventura', ano: 2015,
    imagem: require('../assets/images/filmes/marte.png'), duracao: '2h 24min',
    sinopse: 'Dado como morto após uma tempestade, um astronauta é abandonado sozinho em Marte. Com pouca comida, muita ciência e bom humor, ele improvisa para sobreviver enquanto a Terra planeja uma missão de resgate.' },
  { id: 'apollo', titulo: 'Apollo 13', genero: 'Drama', ano: 1995,
    imagem: require('../assets/images/filmes/apollo.png'), duracao: '2h 20min',
    sinopse: 'Baseado em fatos reais, conta a missão que deveria levar o homem à Lua pela terceira vez, mas sofre uma explosão a caminho. Com a nave em pane, tripulação e equipe em solo trabalham contra o tempo para trazer os três astronautas de volta com vida.' },
  { id: 'estrelas', titulo: 'Star Wars: Uma Nova Esperança', genero: 'Aventura espacial', ano: 1977,
    imagem: require('../assets/images/filmes/estrelas.png'), duracao: '2h 01min',
    sinopse: 'Em uma galáxia distante, um jovem fazendeiro se une a um cavaleiro Jedi, um piloto contrabandista e dois androides para resgatar uma princesa e entregar os planos de uma arma devastadora à Aliança Rebelde.' },
];
