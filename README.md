For starting server(cli: npm run start , if node_modules not exist run (npm install) and run (npm run start))
For starting in dev(cli: npm run dev)

Link for testing (Postman:https://www.getpostman.com/collections/52a0ca237ffea4a68345)

                           Clinics API
+---------+------------------------------+--------------------------------+
| Methods |             Urls             |            Actions             |
+---------+------------------------------+--------------------------------+
|         |                              |                                |
| Post    | /api/v1/clinic/add           | Adding new clinic ({names:"..")|             
| Get     | /api/v1/clinic/all           | Get all clinics with service   |
| Get     | /api/v1/clinic/filter-service|
            ?:service                    | Get clinics by service filter  |
| Get     | /api/v1/clinic/:id           | Get clinic by id               |
| Post    | /api/v1/clinic/remove/:id    | Remove Clinic                  |
| Post    | /api/v1/clinic/:id/add-doctor| Adding Doctor                  |
                                           to Clinic{id_docor id_service }|
+---------+------------------------------+--------------------------------+


                           Doctor API
+---------+------------------------------+--------------------------------+
| Methods |             Urls             |            Actions             |
+---------+------------------------------+--------------------------------+
|         |                              |                                |
| Post     | /api/v1/doctor/add          | Adding new Docotor             |
                                           ({names:"..",surname:"..")     |                          
| Get     | /api/v1/doctor/all           | Get all doctor                 |
| Get     | /api/v1/doctor/all-clinics?                                   |
|           :name?:surname               | Get doctor clinics where       |
                                                his working               |                                                      
| Get     | /api/v1/doctor/:id           | Get doctor by id               |
+---------+------------------------------+--------------------------------+

                           Service API
+---------+------------------------------+--------------------------------+
| Methods |             Urls             |            Actions             |
+---------+------------------------------+--------------------------------+
|         |                              |                                |
| Get     | /api/v1/service/all          | Get all services               |            
| Post    | /api/v1/service/add          | Adding  service                |                                                         
| Post    | /api/v1/service/remoce/:id   | Remoce service by id           |
+---------+------------------------------+--------------------------------+


