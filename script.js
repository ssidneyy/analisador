let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []      // (indice) vetor vazio criado chamado de valores (será usado para analisar os dados)

function isNumero(n) {                       // função que verifica se é um numero (numero de 1 a 100)
    if(Number(n) >= 1 && Number(n) <= 100) { // se o numero de "n" for mair ou igual a 1 e menor ou igual a 100
        return true                          // retorno "true" (nao vai fazer nada (escrever) na tela)
    } else {
        return false
    }
}

function inLista(n, l) {              // recebe dois paramentros (um numero e uma lista) // funcao que verifica se o numero esta na lista
    if (l.indexOf(Number(n)) != -1) { // se na lista o number de n for diferente de -1 (não foi encontrado)
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {   // vai adicionar() 'se' for um numero e se nao estiver em inLista
        valores.push(Number(num.value))        // valores(indice).push = adicionar um elemento no vetor(numero que esta dentro de num)
        let item = document.createElement('option') // cria um item(que vai ser adicionado na caixa). cria elemento com a tag 'option'
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''   // quando eu conseguir adicionar um elemento(numero) ele tem que limpar o resultado (dps de finalizar e ja tiver um resultado, pois apos adicionar um novo numero eu tenho que finalizar novamente e ele me retornar um novo resultado)
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = '' // num.value recebe ' ' vazio (isso faz com que ao digitar na caixa ela limpe o que foi digitado)
    num.focus()    // como se clica-se na caixa, fazendo com que o cursor volte para caixa automaticamente
}

function finalizar() {
    if (valores.length == 0) {        // se o vetor(valores) estiver vazio ou seja igual a 0
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length      // variavel total = saber quantos elementos ela tem
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {     // para cada posicao em valores
            soma += valores[pos]      // soma o valor atual (começa no zero) e vai somado os valores seguidos(o 1º valor, dps o 2º...)
            if (valores[pos] > maior) // se o valores na posicao pos for maior do que o maior valor
                maior = valores[pos]  // o maior valor passa a ser valores pos (deixa de ser o anterior e passa a ser esse)
            if (valores[pos] < menor) // se o valores na posicao pos for menor do que o menor valor
                menor = valores[pos]  // o menor valor passa a ser valores pos (deixa de ser o anterior e passa a ser esse)
        }
        media = soma / tot            // sabendo a soma e o total de elementos, simplismente faço a soma divido pelo total de elementos
        res.innerHTML = ''            // res(resultado) recebe vazio (isso faz com que zere/apague o resultado)
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    }
}