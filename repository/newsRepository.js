const News = require('../models/news');

const NewsRepository = () => {
    const getAll = async (args = {}) => {
        const result = await News.find();
        return result;
    }

    const create = async (args={}) => {
        const result = await News.create(args);
        return result
    }   

     const getById = async (args={}) => {
        let result = await News.findById(args._id);
        return result;
    }

    const count = async (args={}) => {
        let result = await News.count(args)
        return result;
    }

     const updateNews = async (args={}) => {
        const result = await News.findByIdAndUpdate(args._id, { $set: { ...args }});
        return result 
    }   

     const deleteNews = async (args={}) => {
        const result = await News.findByIdAndDelete(args);
       return result;
     }

    return {
        getAll,
        create,
        updateNews,
        deleteNews,
        getById,
        count
    }
};

module.exports = NewsRepository;
