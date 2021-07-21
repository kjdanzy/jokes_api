const express = require("express");
const app = express();
const port = 8000
const cors = require("cors")

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())



// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// This is where we import the jokes routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./server/routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}!!!`));
