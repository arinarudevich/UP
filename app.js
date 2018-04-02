const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');
const memory = require('./public/script');

app.use(bodyParser.json());
app.use(express.static('public'));


app.post('/add', (req, res) => {
    let post = req.body;
    post.createdAt = new Date();
    let posts = JSON.parse(fs.readFileSync("server/posts.json"));
    posts.add = memory.addPhotoPost;
    if (posts.add(post)) {
        fs.writeFile("server/posts.json", JSON.stringify(posts), function (error) {
            if (error) throw error;
        });
        res.status(200).end();
    } else {
        res.status(400).end();
    }

});

app.get('/getPost/:id', (req, res) => {
    let posts = JSON.parse(fs.readFileSync("server/posts.json"));
    posts.get = memory.getPhotoPost;
    let post = posts.get(req.params.id);
    post ? res.send(post) : res.status(404).end();
});

app.delete('/delPost/:id', (req, res) => {
    let posts = JSON.parse(fs.readFileSync("server/posts.json"));
    posts.del = memory.removePhotoPost;
    if (posts.del(req.params.id)) {
        fs.writeFile("server/posts.json", JSON.stringify(posts), function (error) {
            if (error) throw error;
        });
        res.status(200).end()
    } else {
        res.status(404).end();
    }
});

app.put('/editPost/:id', (req, res) => {
    let posts = JSON.parse(fs.readFileSync("server/posts.json"));
    posts.edit = memory.editPhotoPost;
    let post = req.body;
    console.log(post.createdAt);

    post.createdAt = new Date();
    let id = JSON.stringify(req.params.id);
    id = JSON.parse(id);
    if (posts.edit(id, post)) {
        fs.writeFile("server/posts.json", JSON.stringify(posts), function (error) {
            if (error) throw error;
        });
        res.status(200).end();
    } else {
        res.status(404).end();
    }

});

app.use((req, res) => {
    res.sendFile('error.html', { root: 'public' });
});


app.listen(3000, () => {
    console.log('Server is running...');
});
