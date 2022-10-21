import express from "express";
import cors from "cors";
import timeline from "./routers/timelineRouter.js";
import signinRouter from "./routers/signinRouter.js";
import signupRouter from "./routers/sigUpRouter.js";
import publishRouter from "./routers/publishRouter.js";
import hashtagRouters from "./routers/hashtagRouters.js";
import likesRouter from "./routers/likesRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/status", (req, res) => {
	res.send("Ok");
});

app.use(timeline);
app.use(signinRouter);
app.use(signupRouter);
app.use(publishRouter);
app.use(hashtagRouters);
app.use(likesRouter);
app.use(userRouter)

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}.`);
});
