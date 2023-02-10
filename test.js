var request = require('request'),
	//stubs
	postData = {},
	postConfig = {},
	postSuccessHandler = null;

//create an object to send as POST data
postData = {
    PATIENT_NAME:'Don Draper',
    PATIENT_ADDRESS:'123 Main St, New York, NY 10001',
    HOSPITAL_NAME:'St. Luke\'s Hospital',
    DATE_OF_SERVICE:'2016-01-01',
    AMOUNT_BILLED:'$1000'
};

//the config for our HTTP POST request
postConfig = {
    url:'http://localhost:8080/post_medical_bill',
    form: postData
};

//the HTTP POST request success handler
postSuccessHandler = function (err, httpResponse, body) {
	//look for this message in your JS console:
	console.log('JSON response from the server: ' + body);
};

//make the POST request
request.post(postConfig, postSuccessHandler);

//get all patient data
request.get('http://localhost:8080/medical_bills', function (err, httpResponse, body) {
    //look for this message in your JS console:
    console.log('JSON response from the server: ' + body);
});