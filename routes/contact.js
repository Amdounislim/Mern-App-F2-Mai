const express = require('express')
const router = express.Router()
const Contact = require("../models/contact")


//@Api http:localhost:5000/api/contacts
//@desc Add new Contact
//@access public
router.post("/", (req, res) => {
    const newContact = new Contact({ ...req.body })
    newContact
        .save()
        .then(contact => res.status(200).json({ msg: "successfuly added", contact }))
        .catch(err => res.status(400).json(err))
})

//@Api http:localhost:5000/api/contacts
//@desc Get All Contact
//@access public
router.get("/", (req, res) => {
    Contact.find()
        .then(contacts => res.send(contacts))
        .catch(err => res.send(err))
})


//@Api http:localhost:5000/api/contacts/:id
//@desc Get Contact By Id
//@access public
router.get('/:_id', (req, res) => {
    let { _id } = req.params
    Contact.find({ _id })
        .then((contact) => res.send(contact))
        .catch(err => res.send(err))

})

//@Api http:localhost:5000/api/contacts/:id
//@desc Delete Contact By Id
//@access public
router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    Contact.findByIdAndDelete({ _id })
        .then(() => res.send("Contact has been deleted"))
        .catch(err => res.send(err))
})


//@Api http:localhost:5000/api/contacts/:id
//@desc Update Contact By Id
//@access public
router.put("/:_id", (req, res) => {
    let { _id } = req.params
    Contact.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("Contact has been updated"))
        .catch(err => res.send(err))
})


module.exports = router