const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('short'));

app.get('*',(req,res)=>{
    return res.status(200).send();
});

module.exports = app.listen(3000,()=>{
    console.log('server listening');
});
