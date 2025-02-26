const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send("hi form before")
});

app.listen(5000, () => console.log('Webhook server running on port 5000'));
