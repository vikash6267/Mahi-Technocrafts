const express = require("express");
const dotenv = require("dotenv");
const database = require("./config/database");

const cors = require("cors");

dotenv.config();

database.connect();

const app = express();
app.use(cors());
app.use(express.json());

// route 
app.use("/api/v1/user", require("./routes/userRoute"));
app.use("/api/v1/reach", require("./routes/Contact"));

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is running on port no ${process.env.PORT}`);
})