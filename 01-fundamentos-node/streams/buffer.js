// Docs do Buffer: https://nodejs.org/api/buffer.html
// Definição pelo ChatGPT:
// "Um buffer no Node.js representa uma sequência de bytes com um comprimento fixo. É uma estrutura de dados usada para manipular dados binários de forma eficiente, frequentemente usada em operações de leitura e escrita de arquivos, comunicação de rede, entre outros. A classe Buffer é uma subclasse da classe Uint8Array do JavaScript, estendida com métodos para diversos casos de uso. Buffers podem ser criados com conteúdo específico, como preenchidos com zeros, inicializados com bytes específicos ou contendo dados de arrays ou strings. As codificações de caracteres também são importantes ao converter entre Buffers e strings. Buffers oferecem uma maneira eficiente de lidar com dados binários, evitando conversões frequentes entre formatos de texto e binário."
// Definição do Diego da Rocketseat:
// O Buffer é uma representação de um espaço na mémoria do computador usado para transitar dados de mémoria muito rápido, ou seja, os dados armazenados em um Buffer são feitos para logo serem tratados e posteriormente remóvidos, sendo lidos de maneira performática.

const eae = Buffer.from("Eae, mundo!");

console.log(eae);
