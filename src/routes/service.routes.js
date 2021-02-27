const router = require('express').Router();
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const validator = require('../middleware/validators');
const controller = require('../controllers/service.controller');
const auth = require('../middleware/aunthMiddleware');

router.get('/service/all', awaitHandlerFactory(controller.getAllService));
router.post('/service/add',auth(),validator.createServiceSchema, awaitHandlerFactory(controller.createService));
router.post('/service/remove/:id',auth(),awaitHandlerFactory(controller.removeService));
module.exports = router;