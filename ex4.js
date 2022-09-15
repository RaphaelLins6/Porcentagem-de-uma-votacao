let valido = Number(prompt('Digite o total de votos válidos: '))
let nulo = Number(prompt('Digite o total de votos nulos: '))
let branco = Number(prompt('Digite o total de votos brancos: '))
let totalvotos = valido + nulo + branco
let percval = (valido*100)/totalvotos.toFixed(2)
let percnul = (nulo*100)/totalvotos.toFixed(2)
let percbra = (branco*100)/totalvotos.toFixed(2)

alert('O percentual do votos brancos é: ' + percval + '%, o dos nulos é: ' + percnul +
'% e os brancos deram: ' + percbra + '%!')