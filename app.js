const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('index');
});

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});