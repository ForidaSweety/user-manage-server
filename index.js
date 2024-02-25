const express = require('express');
const cors = require('cors');
const app = express();

const port =process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

const users =[
    {id:1,name:'Ami',email:'ami@gmail.com'},
    {id:2,name:'Tumi',email:'tumi@gmail.com'},
    {id:3,name:'She',email:'she@gmail.com'}
]

app.get('/', (req, res) => {
    res.send("sweet..!! server is running");
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})


app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});