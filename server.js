const express = require('express');
const path = require('path');
require('./config/dbconnectionManager');
const app = express();
const cors = require('cors');

const router = express.Router();
const initiateRoutes = require('./app');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
/**
 * initialize route here
 */
initiateRoutes(router);
app.use('/api/v1', router);

app.listen(8080, ()=> {
    console.log("server is runnig on 8080");
})