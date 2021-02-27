const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const routes = require('./routes/index');
const auth = require('./routes/auth.routes');
const errorMiddleware = require('./middleware/errorMiddleware');
dotenv.config();
app.use(express.json());
app.use(cors());
app.options('*',cors());
app.use('/',auth)
app.use('/api/v1',routes);
app.all('*',(req,res,next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
})
app.use(errorMiddleware);
const port = (process.env.PORT || 3331);
app.listen(port,()=>{
    console.log(`🚀 Server running on port ${port}!`)
});