//Operador OR '||'
let varTest = 0

let varAssing = varTest || 'Sin valor' //OR interpreta el 0 como boolean FALSE

console.log(varAssing);

//Operador Nullish '?'
let varWhiteNullish = varTest ?? 'Sin valor' //Nullish interpreta el 0 como INTEGER
console.log(varWhiteNullish);

varWhiteNullish = null ?? 'Sin valor'
console.log(varWhiteNullish);

//varWhiteNullish = notDefined ?? 'Sin valor' Genera un error 
//console.log(varWhiteNullish); 

//Validacion de variable no definida
varWhiteNullish = (typeof notDefined != 'undefined') ? notDefined : 'Sin valor' //Operador Ternario
console.log(varWhiteNullish);