const middleReferenceModel =require('../models/middleReference.model');
const ClinicModel =require('../models/clinic.model');
const DoctorModel = require('../models/doctor.model');
class DoctorService {

    addDoctor = async (name,surname)=> {

        let doctor = await DoctorModel.create(name,surname);
        return doctor;

    }
    getWorkedClinics = async (searchParameters) =>{

        const {
            name,
            surname
        } = searchParameters;
        let doctor = await DoctorModel.findOne({name:name,surname:surname});
        let idsClinic = [];
        let clinicBodys =[];
        if(doctor!==null){
            let middleReferenceClinic = await middleReferenceModel.find({id_doctor:doctor.id});
            middleReferenceClinic.map(s=>{
                if(s.id_doctor === doctor.id && !idsClinic.includes(s.id_clinics)){
                        idsClinic.push(s.id_clinics);
                }
            })
            for(let i=0;i<idsClinic.length;i++){
                let searchClinic = await ClinicModel.findOne({id:idsClinic[i]});
                if(searchClinic){
                    clinicBodys.push(searchClinic);
                }
            }
            return {
                name:doctor.name,
                surname:doctor.surname,
                workedClinics:clinicBodys
            };
        }
        return null;   
       
    }

    getDoctorByParameters=async(params)=>{
        const doctor = await DoctorModel.findOne(params);
        return doctor;

    }
    getAll = async () =>{
        const doctors  = await DoctorModel.find();
        return doctors;

    }




}

module.exports = new DoctorService;