db.restaurantes.find().pretty()
db.restaurantes.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1}).pretty()
db.restaurantes.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0}).pretty()
db.restaurantes.find({"borough": "Bronx"}).pretty()
db.restaurantes.find({"borough": "Bronx"}).limit(5).pretty()
db.restaurantes.find({"borough": "Bronx"}).skip(5).limit(5).pretty()
db.restaurantes.find({"grades.score": {$gte: 90}}).pretty()
db.restaurantes.find({"grades":{$elemMatch:{"score": {$gt: 80, $lt: 100}}}}).pretty()
db.restaurantes.find( {name: /^Wil/}, { "restaurant_id" : 1, "name":1,"borough":1, "cuisine" :1 } ).pretty()
db.restaurantes.find({"borough": "Bronx" , $or: [{ "cuisine": "American "} , {"cuisine": "Chinese"}]}).pretty()
db.restaurantes.find({"borough": {$in: ["Staten Island", "Bronx", "Brooklyn", "Queens"]}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1}).pretty()
db.restaurantes.find({"borough": {$nin: ["Staten Island", "Bronx", "Brooklyn", "Queens"]}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1}).pretty()
db.restaurantes.find().sort({"name":-1}).pretty()
db.restaurantes.find({"address.street": {$exists: true}}).pretty()