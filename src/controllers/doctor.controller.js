const DoctorModel = require('../models/doctor.model');
const DoctorService = require('../services/doctor.service');
const HttpException = require('../utils/HttpException.utils');
class DoctorController {

    createDoctor = async(req,res,nex)=>{

        const{
            name,
            surname
        } = req.body;


        let doctor = await DoctorService.addDoctor(name,surname);
        if(!doctor){

            throw new HttpException(500,'Invalid data');
        }
        return res.status(201).send('Doctor has been created!');

    }

    getDoctorById= async(req,res,next)=>{

        const doctor = await DoctorService.getDoctorByParameters({id:req.params.id});
        if(!doctor){
            throw new HttpException(404,'Doctor Not found');
        }
        res.json(doctor);

    }

    getAllDoctors = async(req,res,next)=>{

        const doctors  = await DoctorService.getAll();
        if(!doctors){
            throw new HttpException(404,'Doctors Not found');
        }
        res.json(doctors);

    }
    getClinicsOfDoctor = async (req,res,next)=>{
        const{
            name,
            surname
        } = req.query;
        const clinics = await DoctorService.getWorkedClinics({name,surname});
        if(!clinics){
            throw new HttpException(404,'Clinics Not Found');
        }
        res.json(clinics);

    }
}

module.exports = new DoctorController;