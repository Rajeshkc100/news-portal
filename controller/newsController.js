const { addNews } = require("../validation/newsValidation");

const NewsService = require("../services/newsService")();

const NewsController = () => {
    const addNewsForm = async (req, res) => {
        res.render('addNews')
    }

    const viewNews = async (req, res) => {
        const result = await NewsService.getAll(req.body);
        res.render('News', {data: result})
    }

    const getById = async (req, res) => {
        const result = await NewsService.getById(req.body);
  
        res.send({
            data: result
        })
    }

    const count = async (req, res) => {
        const result = await NewsService.count(req.body);

        res.send({
            data: result
        })
    }

    const getAll = async (req, res) => {
        const result = await NewsService.getAll(req.body);
        res.send({
            data: result
        });
    }

    const create = async (req, res) => {
        try{
            const {name, description, author, type} = req.body;
            const {error} = addNews.validate({
                name,
                description,
                author,
                type
            })

            if(error){ 
                throw new Error(error)
            }

            const result = await NewsService.create({
                name,
                description,
                author,
                type
            });
            res.status(200).send({
                data: result
            })
        } catch(err){
            console.log(err);
                res.send({
                    err: err.message
                })
            }

            res.redirect('/viewNews')
        } 

    const updateNews = async (req, res) => {
        const result = await NewsService.updateNews(req.body);
        res.status(200).send({
            data: result
        })
    }

    const deleteNews = async (req, res) => {
        const result = await NewsService.deleteNews(req.body);
         res.status(200).send({
            data: result
        })
    }

    const deleteNewsEjs = async (req, res) => {
        await NewsService.deleteNews({
            _id: req.params.id
        });
        res.redirect('/viewNews')
    }

    const editNewsEjs = async (req, res) => {
        const id = req.params.id;
        const News = await NewsService.getById({_id: id});
        res.render('editNews', {value: News});
    }
    
    const editNews = async (req, res) => {
        const _id = req.params.id;
        const {name, description, author, type} = req.body;
        await NewsService.updateNews({
            _id, name, description, author, type
        });
        res.redirect('/viewNews');
    }

    return {
        getAll,
        addNewsForm,
        viewNews,
        create,
        getById,
        count,
        updateNews,
        deleteNews,
        deleteNewsEjs,
        editNewsEjs,
        editNews
    };
}

module.exports = NewsController;