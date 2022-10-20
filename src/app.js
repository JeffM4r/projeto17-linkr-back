import express from "express";
import cors from "cors";
import timeline from "./routers/timelineRouter.js";
import signinRouter from "./routers/signinRouter.js";
import signupRouter from "./routers/sigUpRouter.js";
import postsRouter from "./routers/postsRouter.js";
import hashtagRouters from "./routers/hashtagRouters.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", (req, res) => {
	res.send("Ok");
});

app.use(timeline);
app.use(signinRouter);
app.use(signupRouter);
app.use(postsRouter);
app.use(hashtagRouters);

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}.`);
});
