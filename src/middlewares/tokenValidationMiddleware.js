import jwt from "jsonwebtoken";

export async function tokenVerification(req, res, next) {
	const { authorization } = req.headers;
	const token = authorization?.replace("Bearer ", "");

	const dados = jwt.verify(token, process.env.SECRET_TOKEN);

	if (!dados.userId) {
		return res.sendStatus(401);
	}

	res.locals.userId = dados.userId;
	next();
}
