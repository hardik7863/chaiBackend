require('dotenv').config()

const express =require('express')
const app=express()
const port =4000
//on deploying the file it is possible you have deployed on port 3000
//but someone else who want to access having port 3000 busy then for that we will setup env folder 

const githubData={
    "login": "hardik7863",
    "id": 115218598,
    "node_id": "U_kgDOBt4Ypg",
    "avatar_url": "https://avatars.githubusercontent.com/u/115218598?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hardik7863",
    "html_url": "https://github.com/hardik7863",
    "followers_url": "https://api.github.com/users/hardik7863/followers",
    "following_url": "https://api.github.com/users/hardik7863/following{/other_user}",
    "gists_url": "https://api.github.com/users/hardik7863/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hardik7863/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hardik7863/subscriptions",
    "organizations_url": "https://api.github.com/users/hardik7863/orgs",
    "repos_url": "https://api.github.com/users/hardik7863/repos",
    "events_url": "https://api.github.com/users/hardik7863/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hardik7863/received_events",
    "type": "User",
    "site_admin": false,
    "name": "hardik batwal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-10-07T08:50:10Z",
    "updated_at": "2024-04-13T06:08:19Z"
  }
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

app.get('/github',(req,res)=>{
    res.json(githubData)
})


//additional changes required to setup the envir
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
})

//whenever you add something in the code then on going to that url 
//expected op will not be shown you need to stop the server and restart it 