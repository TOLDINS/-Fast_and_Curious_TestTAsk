const ServiceModel =require('../models/service.model');
const HttpException = require('../utils/HttpException.utils');
const ServiceOfClinicService = require('../services/servicesOfClinic.service');


class ServiceController {


    createService = async (req,res,next) =>{
        const {name} = req.body;
        const service = await ServiceOfClinicService.addNewService(name);     
        if(!service){
            throw new HttpException(500,'Something went wrong');
        }
        res.status(201).send('Service was created');
    }
    getAllService = async (req,res,next) => {
        const services  = await ServiceOfClinicService.allServices();
        if(!services){
            throw new HttpException(404,'Services not found');
        }
        res.json(services);
    }
    removeService = async (req,res,next) =>{
        const result = await ServiceOfClinicService.removeServices({id:req.params.id});
        if(!result>0){
            throw new HttpException(404,'Not found removed element');
        }
        return res.status(200).send('Service was deleted');
    }





}


module.exports = new ServiceController;
