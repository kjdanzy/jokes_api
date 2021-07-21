const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.getAllJokes);
  app.get("/api/jokes/:jokeId", JokeController.getOneSingleJoke);
  app.put("/api/jokes/update/:id", JokeController.updateAnExistingJoke);
  app.post("/api/jokes/new", JokeController.createOneNewJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteOneExistingJoke);
};