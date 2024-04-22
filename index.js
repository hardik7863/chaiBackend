require('dotenv').config()

const express =require('express')
const app=express()
const port =4000
//on deploying the file it is possible you have deployed on port 3000
//but someone else who want to access having port 3000 busy then for that we will setup env folder 

app.get('/',(req,res)=>{
    res.send('Hello World!')
})


app.get('/Twitter',(req,res)=>{
     res.send('batwal_hardik');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code </h1>')
})
 
app.get('/youtube',(req,res)=>{
    res.send("<h2> Chai aur code</h2>")
})
// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);
// })

//additional changes required to setup the envir
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
})

//whenever you add something in the code then on going to that url 
//expected op will not be shown you need to stop the server and restart it 