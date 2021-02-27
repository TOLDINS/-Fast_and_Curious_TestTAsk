const middleReferenceModel = require("../models/middleReference.model")
const ServiceModel = require('../models/service.model');
const ClinicModel = require('../models/clinic.model');
class ClinicService {


    getAllServiceOfClinic = async (idClinic) =>{

        const references = await middleReferenceModel.find({id_clinics:idClinic});
        let servicesIds = [];
        let servicesBodys=[];
        references.map(s=>{
            if(!servicesIds.includes(s.id_service)){
                servicesIds.push(s.id_service)
            }    
        })
  
        for(let i=0;i<servicesIds.length;i++){
            let service = await ServiceModel.findOne({id: servicesIds[i]});
            servicesBodys.push(service.name);
        }
        
        return servicesBodys;
    }

    getAllByServiceFilter= async (serviceFilter) => {
        const allClinics = await this.getAllCinics();
        let resultClinics = [];
        for(let i=0;i<allClinics.length;i++){
            let services = await this.getAllServiceOfClinic(allClinics[i].id);
            if(services.includes(serviceFilter)){
                resultClinics.push(allClinics[i].name)
            }           
        }   
        return resultClinics;
    }
    getAllCinics = async () =>{
        let allClinics = await ClinicModel.find();
        return allClinics;
    }
    createClinic = async (parameter) =>{
        let result = await ClinicModel.create(parameter);
        return result;
    }
    getClinicByParameter = async (parameters)=>{
        let result = await ClinicModel.findOne(parameters);
        return result;
    }
    
    addDoctorToClinic = async (createData)=>{
        let result = await middleReferenceModel.create(createData);
        return result;
    }
    removeClinicByParameter = async (parameter) =>{
        let result = await ClinicModel.remove(parameter)
        return result;
    }





}

module.exports  = new ClinicService();
