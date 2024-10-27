# posts account data
curl http://localhost:2309/accounts -H "Content-Type: application/json" -X POST -d '{"balance":100, "name":"checking"}' -i
curl http://localhost:2309/accounts -H "Content-Type: application/json" -X POST -d '{"balance":200, "name":"saving"}' -i
# gets account data
curl http://localhost:2309/accounts -i
# updates account data at a specified id
curl http://localhost:2309/accounts/0 -H "Content-Type: application/json" -X PUT -d '{"balance":300, "name":"saving"}' -i
# gets account data
curl http://localhost:2309/accounts -i
# deletes account data and a specified id
curl http://localhost:2309/accounts/0 -X DELETE -i
# gets account data
curl http://localhost:2309/accounts -i