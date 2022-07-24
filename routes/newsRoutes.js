const express = require('express');

const NewsController = require('../controller/newsController')();

const router = express.Router();


router.get('/addNewsForm', NewsController.addNewsForm)
router.get('/viewNews', NewsController.viewNews)

router.get('/getById', NewsController.getById)
router.get('/countNews', NewsController.count)

router.get('/getAll', NewsController.getAll);

router.post('/create', NewsController.create);

router.post('/updateNews', NewsController.updateNews);

router.delete('/deleteNews', NewsController.deleteNews);
router.get('/delete/:id', NewsController.deleteNewsEjs);
router.get('/edit/:id', NewsController.editNewsEjs);
router.post('/editNews/:id', NewsController.editNews);

module.exports = router;