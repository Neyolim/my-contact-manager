const express = require("express");
const router = express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");


router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;


// The routes folder is where you define URL endpoints (routes) of your backend API or web app.