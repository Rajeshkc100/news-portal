const Joi = require('joi');

const addNews = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string(),
    type: Joi.string()
})

module.exports = {
    addNews
}