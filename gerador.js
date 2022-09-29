/* ESTE CÓDIGO GERA METADADOS PARA UMA COLEÇÃO INTEIRA DE NFT */
//VARIÁVEIS
const Metadados = []
var i = 0
var moedaDaSorte = ["ETH", "BTC", "SOL", "MATIC", "USDT"]
var habilidades = ["DAY TRADE", "ANÁLISE GRÁFICA", "VISÃO DE MERCADO"]
var personalidade = ["CALMO", "AGRESSIVO", "DIVERTIDO", "ALEGRE", "ANALÍTICO"]
//VARIÁVEIS DE FUNÇÃO
var MOEDA_DA_SORTE = gerar_moeda_aleatoria([])
var PODER_DO_ATRIBUTO = gerar_atributo_0_10([])
var HABILIDADE = gerar_habilidade([])
var PERSONALIDADE = gerar_personalidade([])
//CONSTANTES
const fs = require('fs')

//FUNÇÕES GERADORAS 
function gerar_moeda_aleatoria ([min=0, max=4]) {
    if (min>max) [min, max] = [max, min]
    const s = Math.random() * (max-min) + min
    return moedaDaSorte[Math.floor(s)]
}
function gerar_habilidade ([min=0, max=2]) {
    if (min>max) [min, max] = [max, min]
    const s = Math.random() * (max-min) + min
    return habilidades[Math.floor(s)]
}
function gerar_personalidade ([min=0, max=4]) {
    if (min>max) [min, max] = [max, min]
    const s = Math.random() * (max-min) + min
    return personalidade[Math.floor(s)]
}
function gerar_atributo_0_10 ([min=5, max=10]) {
    if (min>max) [min, max] = [max, min]
    const s = Math.random() * (max-min) + min
    return Math.floor(s)
}

//FUNÇÃO CALLBACK
function callback_geradores () {
    return (Metadados.forEach(() => PERSONALIDADE = gerar_personalidade([])),   
            Metadados.forEach(() => HABILIDADE = gerar_habilidade([])),   
            Metadados.forEach(() => MOEDA_DA_SORTE = gerar_moeda_aleatoria([])),   
            Metadados.forEach(() => PODER_DO_ATRIBUTO = gerar_atributo_0_10([])) )

} 
function gerarMetadados(n, nome) {
    for (i == 0; i<n; i++) {
        callback_geradores()
        Metadados[i] = {
            "name" : `${nome}#${i+1}`,
            "description": "Coleção exclusiva, lançamento Happy Ape. Contém 99 Apes únicos!",
            "image": `QmYNXbjk4GhTrEw4EgSNDQrxkKWHKmxXm1aSRQ6GXQp8Cd/NFT (${i+1}).png`,
            "attributes": [
                {"trait_type": "Sorte",
                 "value": `${PODER_DO_ATRIBUTO}`},

                {"trait_type": "Moeda da Sorte",
                 "value": `${MOEDA_DA_SORTE}`},

                {"trait_type": `${HABILIDADE}`,
                 "value": `${PODER_DO_ATRIBUTO}`},

                {"trait_type": "Personalidade",
                 "value": `${PERSONALIDADE}`}
            ],
        }
    }
    return Metadados
}

//FUNÇÃO SALVA JSON
function save(content, filePath) {
    const contentString = JSON.stringify(content)
    const contenFilePath = `metadados/${filePath}.json`
    return fs.writeFileSync(contenFilePath, contentString)
}
//FUNÇÃO CARREGA JSON
function load() {
    const fileBuffer = fs.readFileSync(contenFilePath, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    return contentJson
}
//EXPORTA MÓDULO
module.exports = {
    save, load
}
/*
function gerar (n) {
for (i = 0; i < n; i++) 
    Metadados[i] = [i],
    console.log(Metadados[i]) 
    Metadados.forEach(PODER_DO_ATRIBUTO => console.log(gerar_atributo_0_10([])))   
}

gerar(20)
*/


/* GERANDO OS METADADOS EM JSON  */
const Metadado_json = gerarMetadados(10, "Happy Ape")
Object.entries(Metadados).forEach(([valor]) => {save(Metadados[valor], valor)})
console.log(Metadados.length)
