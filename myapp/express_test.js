const express = require('express');
const app = express();
const port = 3000

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});