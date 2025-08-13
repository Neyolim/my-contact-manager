//@desc Get all contacts
//@route GET /api/contacts
//@access public 

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("The request body: ",req.params.body)
  res.status(201).json({ message: "Create contacts" });
}

//@desc Get contact
//@route POST /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req,res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
}


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};



//  In backend development, especially when using the MVC pattern (Model-View-Controller), a controller is a piece of code that:

//     Handles incoming requests from clients (like your frontend or API users).

//     Processes the request: talks to the database/models, runs business logic, validation, etc.

//     Sends back the response (JSON, HTML, status codes).

//  Those lines above routes  are special comments called JSDoc-style comments or API documentation comments — they serve mainly to:

//  1️⃣ Describe what each controller function does (for humans)
//  2️⃣ Help automated documentation tools
//  3️⃣ Improve code readability and maintenance