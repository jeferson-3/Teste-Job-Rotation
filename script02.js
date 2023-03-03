//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const fatu_Mensal = {
  "Janeiro": [1560, 2200, 1800, null, null, null, null, 1900, 2210, 2430, 2300, 2600, 1900, 2220, 2000, 2100, 1850, 2300, 2500, 1900, 2200, 2000, 2100, 1800, 2300, 2500],
  "Fevereiro": [1255, 2200, 1500, 1100, null, null, null, 1900, 1850, 2400, 2000, 2300, 1800, 2100, 2000, 1900, 1700, 2200, 2400, 2000, 2100, 1900, 2000, 1700, 2200, 2500],
  "Março": [1320, 2100, 1700, null, null, null, null, 1900, 2200, 2330, 2200, 2500, 2000, 2110, 2000, 2100, 1900, 2240, 2400, 2000, 2100, 1800, 2000, 1900, 2300, 2500]
};
const mes = "Janeiro";
// menor valor de fatruramneto diario 
const menorValor = Math.min(...fatu_Mensal[mes].filter((valor) => valor !== null));
console.log(`Menor valor de fatruramneto diario : ${menorValor}`);

// maior valor de faturamento diario 
const maiorValor = Math.max(...fatu_Mensal[mes].filter((valor) => valor !== null));
console.log(`Maior Valor de faturamento diario: ${maiorValor}`);

// Dias que o faturamento diario foi superior a media mensal 
const fatu_Diario = fatu_Mensal[mes].filter((valor) => valor !== null);
const media_Mensal = fatu_Diario.reduce((acc, cur) => acc + cur) / fatu_Diario.length;
const diasAcima_Media = fatu_Diario.filter((valor) => valor > media_Mensal).length;

console.log(`O numero de dias em que o faturamento foi superior a media mensal foi: ${diasAcima_Media}`)