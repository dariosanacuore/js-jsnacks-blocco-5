const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const nameWithMap = names.map(function (name, indice) {
    return name;
});
console.log(nameWithMap);