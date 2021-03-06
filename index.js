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
        name: 'Angualar Course',
        author: 'Mosh',
        tags: ['angular', 'front-end'],
        isPublished: Boolean
    });
    const result = await course.save();
    console.log(result)
}

async function getCourses() {
    // eq - equal
    //ne - not equal
    //gt - greater than
    //gte - greater than or equal to
    //lt less than
    //lte less than or equal to
    //in
    //nin not in


    //logical operators or and
    const courses = await Course
        .find()
        .or([{author:'Mosh'},{isPublished:false}])//array containing multiple filters object
        .limit(10)
        .sort({name: 1,})//1 means ascending order, descending -1
        .select({name: 1, tags: 1});//only return selected properties
    console.log(courses)
}

getCourses();