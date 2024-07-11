const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3000;

const PUBLIC = path.join(_dirname,'public');
const CONFIG = path.join(_dirname,'config','test.json');

app.use(express.static(PUBLIC));
app.use(express.json());

const testConfig = JSON.parse(fs.readFileSync(CONFIG));

app.get('/',(req,res)=>{
    res.sendFile(path.join(PUBLIC,'home.html'));
});

app.get('/config', (req, res) => {
    res.json(testConfig);
})

app.listen(PORT, () =>{
    console.info(`Server running in port ${PORT}`)
});