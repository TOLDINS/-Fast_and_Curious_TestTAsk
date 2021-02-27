const ServiceModel  = require('../models/service.model');


class Services_Of_Clinic_Service {

    addNewService = async (name) =>{

        const service = await ServiceModel.create(name);
        return service;

    }
    allServices = async () =>{
        const services  = await ServiceModel.find();
        return services;

    }
    removeServices = async (parameter) =>{

        const result = await ServiceModel.remove(parameter)
        return result;
    }

}


module.exports = new Services_Of_Clinic_Service;