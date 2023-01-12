const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

const categories = require('./Data/Catagories.json')
const courses = require('./Data/Courses.json')

app.get ('/', (req, res) =>{
    res.send('Courses api is running')
});
app.get('/courses-categories', (req, res) =>{
    res.send(categories)
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourses = courses.find(course => course._id === id);
    res.send(selectedCourses)
})
app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/category/:id', (req,res) =>{
  const id = req.params.id;
  const categoryCourses = courses.filter(course => course.category_id === id)
  res.send(categoryCourses)
})

app.get('/courses', (req,res) =>{
  res.send(courses)
})

app.listen(port, () =>{
    console.log('Courses API Server is ruunig on port', port);
})