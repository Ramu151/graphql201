const express = require("express")
const app = new express();
const crypto = require("crypto")
const cors = require("cors")
const bodyParser = require("body-parser")
// const app = new express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({origin: true, credentials: true}));


const posts = {}

//create a get api to get all posts
app.get("/posts", function(req, res) {
    res.send(posts)
})

//create a post api to create a post
app.post("/posts", function(req, res) {
    const { title } = req.body;
    console.log("title", title)
    const postId = crypto.randomBytes(4).toString('hex');
    posts[postId] = { postId, title }
    console.log("posts", posts)

    res.status(201).send(posts[postId])
})

app.listen(3002, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 3002");
})



// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.use(cors());
