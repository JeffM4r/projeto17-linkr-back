import joi from "joi";

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    picture: joi.string().uri().required()
})

export function signupMiddleware(req, res, next) {
    const user = req.body
    const userValidation = signupSchema.validate(user)

    if (userValidation.error) {
        res.status(422).send(userValidation.error.details[0].message)
        return
    }

    res.locals.user = req.body

    next()
}

