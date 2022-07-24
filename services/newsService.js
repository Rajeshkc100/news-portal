const NewsRepository = require("../repository/newsRepository")();

const NewsService = () => {
    const getAll = async (args={}) => {
        let result = await NewsRepository.getAll(args);
        return result
    }

    const create = async (args={}) => {
        let result = await NewsRepository.create(args);
        return result;
    }

     const getById = async (args={}) => {
        let result = await NewsRepository.getById(args);
        return result;
    }

    const count = async (args={}) => {
        let result = await NewsRepository.count(args)
        return result;
    }

    const updateNews = async (args={}) => {
        let result = await NewsRepository.updateNews(args);
        return result;
    }

     const deleteNews = async (args={}) => {
        const result = await NewsRepository.deleteNews(args);

        return result;
     }

    return {
        getAll,
        create,
        getById,
        count,
        updateNews,
        deleteNews
    }
}

module.exports = NewsService;