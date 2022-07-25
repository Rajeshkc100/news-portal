const Joi = require('joi');

const addNews = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().required(),
    author: Joi.string().min(3),
    type: Joi.string()
})

module.exports = {
    addNews
}