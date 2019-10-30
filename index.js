const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('*',(req,res)=>{
    return res.status(200).send();
});

const PORT = process.env.PORT || 3000
module.exports = app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});
