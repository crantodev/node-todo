const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({message: "App is up an running"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`API is running in PORT ${PORT}`)
});