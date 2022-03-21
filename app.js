const express = require('express')
const app = express()

const port = 3000
/// magic point  in  this we used router action name is same but the
//method name is different   then also work same but if action name and method name is same its not go throught to the next 




//Respond with Hello World! on the homepage:



app.get('/poi', function (req, res) {
res.send('Hello World!')
})
//Respond to POST request on the root route (/), the application’s home page:

app.post('/iol', function (req, res) {
res.send('Got a POST request')
})
//Respond to a PUT request to the /user route:

app.put('/user', function (req, res) {
res.send('Got a PUT request at /user')
})
//Respond to a DELETE request to the /user route:

app.delete('/users', function (req, res) {
res.send('Got a DELETE request at /user')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

