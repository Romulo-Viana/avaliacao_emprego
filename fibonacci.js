n = 100

n1 = 0
n2 = 1
soma = 0

while (soma <= n) {
    soma = n1 + n2  
    console.log(soma)
    n1 = n2
    n2 = soma
    if (n1 == n || n2 == n){
        res = "PERTENCE"
    } else 
        res = 'NÃO PERTENCE'
}

console.log(`${res} a sequencia.`)
