const ClinicModel = require("../models/clinic.model");
const ClinicService = require('../services/clinic.service');

const HttpException = require("../utils/HttpException.utils");

class ClinicController {
    getAllClinics = async (req,res,next) =>{
        let allClinics = await ClinicService.getAllCinics();
        let allClinicsWithService=[];
        if(!allClinics.length>0){
            throw new HttpException(404,'Clinics not found');
        }
        for(let i=0;i<allClinics.length;i++){
            const clinicServices = await ClinicService.getAllServiceOfClinic(allClinics[i].id);
            allClinicsWithService.push({...allClinics[i],clinicServices}); 
        }
        res.status(200).json(allClinicsWithService);
    }
    getAllClinicsByServices = async (req,res,next) =>{
        const {service} =req.query;
        let allClinics = await ClinicService.getAllByServiceFilter(service);
        if(!allClinics.length>0){
            throw new HttpException(404,'Clinics not found');
        }
        return res.json(allClinics);
    }
    getClinicById = async (req,res,next) => {

        const clinic = await ClinicService.getClinicByParameter({id:req.params.id});
        if(!clinic){
            throw new HttpException(404,'Clinic Not found');
        }
        res.json(clinic);
    }
    createClinic = async (req,res,next) => {
        const {name} = req.body;
        const result = await ClinicService.createClinic(name);
        if(!result){
            throw new HttpException(500,'Something went wrong');
        }
        res.status(201).send('Clinic was created');

    }
    removeClinic = async (req,res,next) => {
       
        const result = await ClinicService.removeClinicByParameter({id:req.params.id})
        if(!result>0){
            throw new HttpException(404,'Not found removed element');
        }

        res.status(204).send('Clinic was deleted');

    }
    addDoctorToClinic = async (req,res,next) => {
        const {id_doctor,id_service} = req.body;
        const createBody = {
            id_clinics:Number(req.params.id),
            id_doctor, 
            id_service,
        }
        console.log(createBody);
        let result = await ClinicService.addDoctorToClinic(createBody);
        if(!result){
            throw new HttpException(500,'Something went wrong');
        }
        return res.status(200).send('Doctor adding to Clinic');
    }
}

module.exports = new ClinicController;