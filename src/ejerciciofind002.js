//$eq para los campos con un valor iqual al especificado.
db.deudas.find({estado:{$eq:"YP"}})
/*Resultado:
{ "_id" : ObjectId("5f864bcf192683fc0955c304"), "objeto" : "Pedro", "cantidad" : "100", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c306"), "objeto" : "Ramon", "cantidad" : "40", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c309"), "objeto" : "Mario", "cantidad" : "110", "estado" : "YP" }*/

//$gt para los campos que tiene un valor mayor al especificado.
db.deudas.find({cantidad:{$gt:"200"}})
/*Resultado:
{ "_id" : ObjectId("5f864bcf192683fc0955c305"), "objeto" : "Jose", "cantidad" : "300", "estado" : "NP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c306"), "objeto" : "Ramon", "cantidad" : "40", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c308"), "objeto" : "Lydia", "cantidad" : "340", "estado" : "NP" }*/

//$gte para los campos que tiene un valor mayor o igual al especificado.
db.deudas.find({cantidad:{$gte:"300"}})
/*Resultado:
{ "_id" : ObjectId("5f864bcf192683fc0955c305"), "objeto" : "Jose", "cantidad" : "300", "estado" : "NP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c306"), "objeto" : "Ramon", "cantidad" : "40", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c308"), "objeto" : "Lydia", "cantidad" : "340", "estado" : "NP" }*/

//$lt para los campos que tiene un valor menor al especificado.
db.deudas.find({cantidad:{$lt:"200"}})
/*Resultado:
{ "_id" : ObjectId("5f864bcf192683fc0955c304"), "objeto" : "Pedro", "cantidad" : "100", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c307"), "objeto" : "Laura", "cantidad" : "130", "estado" : "NP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c309"), "objeto" : "Mario", "cantidad" : "110", "estado" : "YP" }*/

//$lte para los campos que tiene un valor menor o igual al especificado.
db.deudas.find({cantidad:{$lte:"90"}})
/*Resultado:
{ "_id" : ObjectId("5f864bcf192683fc0955c304"), "objeto" : "Pedro", "cantidad" : "100", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c305"), "objeto" : "Jose", "cantidad" : "300", "estado" : "NP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c306"), "objeto" : "Ramon", "cantidad" : "40", "estado" : "YP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c307"), "objeto" : "Laura", "cantidad" : "130", "estado" : "NP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c308"), "objeto" : "Lydia", "cantidad" : "340", "estado" : "NP" }
{ "_id" : ObjectId("5f864bcf192683fc0955c309"), "objeto" : "Mario", "cantidad" : "110", "estado" : "YP" }*/
