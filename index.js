const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('server is up');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(  course => course.id === id);
    console.log(id, course);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});