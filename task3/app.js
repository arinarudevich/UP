const express = require(‘express’);
const app = express();
app.get((request, response, next) => {
    response.send(‘Hello, world!’);
});
app.listen(3000, () => {
    console.log(‘Server is running...’);
});