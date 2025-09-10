const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
  console.error("Error loading .env file", result.error);
  process.exit(1);
}

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
  server.js → Handles server startup and database connection only.
  app.js    → Handles Express app setup: 
                 - middleware (JSON parsing, CORS, security)
                 - routes
                 - error handling

  This separation improves:
    • Maintainability
    • Testability
    • Scalability
*/
