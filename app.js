// init
const express = require('express');
const cors=require("cors");
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Madara Uchiha listening on port: ' + PORT);
});

function generateHash() {
    const crypto = require('crypto');
    const hash = crypto.createHash('sha256');
    // current time in milliseconds
    const time = new Date().getTime();
    // hash the time
    hash.update(time.toString());
    // return the hash
    return hash.digest('hex');
}

// post paitent data name, address, hospital name, date of service, and amount billed and add to json file
app.post('/post_medical_bill', (req, res) => {
    const fs = require('fs');
    const medical_bills = require('./MEDICAL_RECORDS.json');
    const medical_records_data = medical_bills.MEDICAL_BILLS;
    console.log(req.body);
    const {PATIENT_NAME, PATIENT_ADDRESS, HOSPITAL_NAME, DATE_OF_SERVICE, AMOUNT_BILLED} = req.body;
    const newEntry = {
        PATIENT_NAME,
        PATIENT_ADDRESS,
        HOSPITAL_NAME,
        DATE_OF_SERVICE,
        AMOUNT_BILLED,
        ID: generateHash()
    };
    console.log(newEntry);
    medical_records_data.push(newEntry);
    fs.writeFileSync('./MEDICAL_RECORDS.json', JSON.stringify(medical_bills));
    // medical_bills.push(newEntry);
    // fs.writeFileSync('./MEDICAL_RECORDS.json', JSON.stringify(medical_bills));
    res.send('success');
});

// get all patient data
app.get('/medical_bills', (req, res) => {
    const fs = require('fs');
    fs.readFile('./MEDICAL_RECORDS.json', 'utf8', function readFileCallback(err, file){
        if (err){
            console.log(err);
        } else {
        file = JSON.parse(file); //now it an object
        res.send(file);
    }});
});

