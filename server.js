const exprees =require('express');

const app = exprees();
const port = 5000;

app.get('/',(req,res)=>{
    res.send('hi donya');
});
app.listen(port,()=>{
    Console.log(`server is running on port ${port}`);

});