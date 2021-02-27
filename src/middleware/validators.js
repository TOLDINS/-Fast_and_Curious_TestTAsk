const {body,check} = require ('express-validator');


exports.createClinicSchema =[
    body('name')
    .exists(true)
    .isLength({min:4})
]
exports.createServiceSchema=[
    body('name')
    .exists()
    .withMessage('name is required')
    .isLength({min:5})
    .withMessage('Must be at least 5 chars long')
]
exports.createDoctorSchema=[
    body('name')
    .exists()
    .withMessage('name is required')
    .isLength({min:3})
    .withMessage('Must be at least 4 chars long'),
    body('surname')
    .exists()
    .withMessage('surname is required')
    .isLength({min:3})
    .withMessage('Must be at least 4 chars long')
]