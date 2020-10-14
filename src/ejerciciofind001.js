//db.basedatos.insertMany() se usa para insertar varios documentos al mismo tiempo.
db.deudas.insertMany([
    {objeto:"Pedro", cantidad:"100", estado:"YP"},
    {objeto:"Jose", cantidad:"300", estado:"NP"},
    {objeto:"Ramon", cantidad:"40", estado:"YP"},
    {objeto:"Laura", cantidad:"130", estado:"NP"},
    {objeto:"Lydia", cantidad:"340", estado:"NP"},
    {objeto:"Mario", cantidad:"110", estado:"YP"}
]);