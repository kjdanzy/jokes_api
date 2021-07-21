const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		auto: true,
	},
	setup: {
		type: String,
		required: [true, "The joke 'setup' is required!"],
		minLength: [10, "The setup must be longer than 10 characters long."]
	},
	punchline: {
		type: String,
		required: [true, "The joke 'punchline' is most surely required! "],
		minLength: [10, "The joke must be longer than 10 characters long."]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;