const app = require("express")()
const crypto = require("crypto")
const bodyParser = require("body-parser")
// const app = new express();
app.use(bodyParser.json({ limit: '50mb' }));

const posts = []

//create a get api to get all posts
app.get("/posts", function(req, res) {
    res.send("testing")
})

//create a post api to create a post
app.post("/posts", function(req, res) {
    const { title } = req.body;
    const postId = crypto.randomBytes(4).toString('hex');
    posts.push({id : postId, title })
    res.send(posts)
})
app.listen(4000)