const express = require("express");
const router = express.Router();

const Person = require("../models/Person");

router.post("/", async (req, res) => {
    try {
        const newPersonData = req.body;
        const newPerson = new Person(newPersonData);

        const savedPerson = await newPerson.save();
        console.log("Saved person to database");
        res.status(200).json(savedPerson);
    } catch (error) {
        console.error("Error saving person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (error) {
        console.error("Error fetching persons:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/:work", async (req, res) => {
    try {
        const workType = req.params.work;
        if (
            workType === "chef" ||
            workType === "waiter" ||
            workType === "manager"
        ) {
            const persons = await Person.find({ work: workType });
            res.json(persons);
        } else {
            res.status(404).json({ error: "work type doesnt exist" });
        }
    } catch (error) {
        console.error("Error fetching persons:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(
            personId,
            updatedPersonData,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!updatedPersonData) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json(response);
    } catch (error) {
        console.error("Error updating person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        res.status(200).json({ message: "Person deleted" });
    } catch (error) {
        console.error("Error deleting person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
