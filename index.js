const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDb Database....'))
    .catch(error => console.log('could not connect to MongoDb, error is:' + error));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date, default: Date.now(),
        isPublished: Boolean,
    }
});


//Class Course and use instance of that class to store data

const Course = mongoose.model('Course', courseSchema); //Course class defined by using mongoose method


//create object based on above class


async function createCourse() {
    const course = new Course({
        name: 'Node Js Course',
        author: 'Mosh',
        tags: ["node","backend"]
    });
    const result = await course.save();
    console.log(result)
}


createCourse();