import joi from 'joi';

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    picture: joi.string().uri().required()
})

const publishSchema = joi.object({
    url: joi.string().pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/, 'html').required(),
    text: joi.string().empty('').max(250),
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

export function publishMiddleware(req, res, next) {
    const { url, text } = req.body
    const validation = publishSchema.validate(req.body, { abortEarly: false })
    
    if (validation.error) {
        const err = validation.error.details.map(detail => detail.message);
        return res.status(422).send(err);
    }

    res.locals.publish = req.body

    next()
}
