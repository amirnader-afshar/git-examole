const exprees =require('express');

const app = exprees();

app.get('/',(req,res)=>{
    res.send('hi donya');
});
app.listen(3000,()=>{
    Console.log('server is running');

});