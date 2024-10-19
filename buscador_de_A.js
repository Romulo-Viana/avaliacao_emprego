palavra = 'FRASES'
quantidade = 0
c = 0

while (c < palavra.length){
    console.log(palavra[c])
    c ++
    if (palavra[c] == 'a' || palavra[c] == 'A'){
        quantidade = quantidade + 1
    }
}

console.log(`Foi encontrado na palavra (${palavra}) uma quantidade de ${quantidade} letras (A).`)