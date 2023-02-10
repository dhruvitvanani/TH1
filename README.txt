Steps:

1. Open the file app.js

2. Open the terminal and run the script using the command "node app.js" or "nodemon app.js"

3. Server is configured to run at port 8080. You can change based on your port availability. Message will be displayed that Madara Uchicha is listening on port 8080/or your port.

4. Open postman and try the API endpoints for GET and POST which are /medical_bills and /post_medical_bill respectively.

5. For get the endpoint you'll receive a list of all medical bills with the following fields:

ID, PATIENT_NAME, PATIENT_ADDRESS, HOSPITAL_NAME, DATE_OF_SERVICE, and AMOUNT_BILLED. ID is a dynamic field generated using a timestamp. The rest are all parameter values.

6. For the post endpoint you need to provide parameters PATIENT_NAME, PATIENT_ADDRESS, HOSPITAL_NAME, DATE_OF_SERVICE, and AMOUNT_BILLED. ID is a dynamic field and will not be required to be added and will get its value at the server level.

7. As mentioned, no data is currently stored in the database and configured in memory in a JSON format under the file name MEDICAL_RECORDS.json

8. For test cases different javascript file is called test.js is created. It has two test cases. One for post and one for get can be run using the same command "node test.js" or "nodemon test.js". Upon successful execution of post request it will display JSON response from server: success. For get request it will return json response from the server: (list of all medical bills in json format).
