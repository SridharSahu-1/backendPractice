const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true,
    },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;



/*
{
    "name": "asd",
    "age": 26,
    "work": "manager",
    "mobile": "3417397964",
    "email": "5432@gmail.com",
    "address": "jupiter",
    "salary": 2345345,
    "gender": "male"
}
*/