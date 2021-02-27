const router = require('express').Router();
const controller = require('../controllers/doctor.controller');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const auth =require('../middleware/aunthMiddleware');
const {createDoctorSchema} = require('../middleware/validators');
router.post('/doctor/add',auth(),createDoctorSchema,awaitHandlerFactory(controller.createDoctor));
router.get('/doctor/all',awaitHandlerFactory(controller.getAllDoctors));
router.get('/doctor/all-clinics?:name?:surname',controller.getClinicsOfDoctor)
router.get('/doctor/:id',awaitHandlerFactory(controller.getDoctorById));




module.exports = router;