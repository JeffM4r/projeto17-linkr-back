import express from "express";
import cors from "cors";
import timeline from "./routers/timelineRouter.js";
import signupRouter from "./routers/sigUpRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", (req, res) => {
	res.send("Ok");
});

app.use(timeline);
app.use(signupRouter)

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}.`);
});
