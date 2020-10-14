//$eq para los campos con un valor iqual al especificado.
db.deudas.find({estado:{$eq:"YP"}})

//$gt para los campos que tiene un valor mayor al especificado.
db.deudas.find({cantidad:{$gt:"200"}})

//$gte para los campos que tiene un valor mayor o igual al especificado.
db.deudas.find({cantidad:{$gte:"300"}})

//$lt para los campos que tiene un valor menor al especificado.
db.deudas.find({cantidad:{$lt:"200"}})

//$lte para los campos que tiene un valor menor o igual al especificado.
db.deudas.find({cantidad:{$lte:"90"}})