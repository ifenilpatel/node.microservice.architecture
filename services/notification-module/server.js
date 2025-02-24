const express = require("express");

const app = express();
const PORT = process.env.PORT || 3003;

// Body parsing for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const indexRoute = require("./routes");
// Register the routes
app.use("/", indexRoute);

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
