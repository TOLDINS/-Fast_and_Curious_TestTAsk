const router = require('express').Router();
const controller = require('../controllers/clinic.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth = require('../middleware/aunthMiddleware');
const {createClinicSchema} = require('../middleware/validators');

router.post('/clinic/add',auth(),createClinicSchema,awaitHandlerFactory(controller.createClinic));
router.get('/clinic/all',awaitHandlerFactory(controller.getAllClinics));
router.get('/clinic/filter-service?:service',awaitHandlerFactory(controller.getAllClinicsByServices));
router.get('/clinic/:id',awaitHandlerFactory(controller.getClinicById));
router.post('/clinic/remove/:id',auth(),awaitHandlerFactory(controller.removeClinic));
router.post('/clinic/:id/add-doctor',auth(),awaitHandlerFactory(controller.addDoctorToClinic));


module.exports = router;