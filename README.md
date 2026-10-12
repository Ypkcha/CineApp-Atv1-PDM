# CineApp - ATV1 de PDM

- **Aluno:** Yuri Pignotti Koyama
- **Aplicativo:** CineApp
- **Professor:** Maylon H. Oliveira.

- O CineApp é um app protótipo de catálogo de filmes clássicos(debatível) sobre o espaço, onde é possível navegar entre as telas vendo informações básicas sobre cada filme, como ano, duração, gênero e uma sinopse sobre ele, além da funcionabilidade de favoritar individualmente cada filme onde essa informação se mantém durante a execução do app

## Executar

Pré-requisitos: Node.js compatível com Expo SDK 54 (20.19 ou superior), npm e um dispositivo ou navegador para testar.

```bash
npm install
npx expo start
```

Leia o QR Code com uma versão do Expo Go compatível com SDK 54, na mesma rede do computador. No terminal, pressione `a` para abrir um emulador Android configurado ou `w` para executar no navegador. Também é possível usar `npm run web`.

## Funcionalidades

1. Início: logo, nome, descrição e botão para explorar o catálogo.
2. Catálogo: seis filmes com título, cartaz, gênero, ano e botão de favorito.
3. Favoritos: `☆ Favoritar` alterna para `★ Favorito`, com mudança de cor e estrela.
4. Detalhes: cartaz, título, gênero, ano, duração, sinopse e status favorito ou não ao clicar no filme.
5. Navegação: início → catálogo → detalhes/sobre → voltar.

Os favoritos permanecem ao navegar entre as telas como abrir os detalhes de um filme ou ao ir para o "sobre" e voltar usando os botões de voltar, pois o catálogo continua montado na pilha, sendo um estado de memória. Entretanto ao sair do catálogo para o início, recarregar ou fechar a aplicação, voltam ao valor inicial. O enunciado não exige armazenamento permanente. A alteração de favoritos é realizada no catálogo.

Os filmes são clássicos reais sobre o espaço; as sinopses são textos próprios e os cartazes são ilustrações autorais geradas por `scripts/criar-imagens.py`, para demonstração acadêmica. Todas as imagens são locais; não há API, login ou dependência de internet para carregar o catálogo.
"# CineApp-Atv1-PDM" 
