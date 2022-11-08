const functions = require("firebase-functions");

const required_fields = [
"email",
"first_name",
"last_name",
"school",
"country_of_origin",
"graduation_date",
"major",
"hackatons_attended",
"linkedin",
"race",
"gender",
"phone",
"education_level",
"resume",
"date_of_birth"];

function fields_validation(data,required_fields){
	for(field_i in required_fields){
		field = required_fields[field_i];
		if(!(field in data)):{
			return [false, field];
		}
	}
	return [true,null];
}

function calculate_age(birth){
	var diff = Math.floor(new Date().getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    return years;
}

exports.registeUser = functions.https.onRequest((request, response) => {
  response.set({ 'Access-Control-Allow-Origin': '*' })
    cors(request, response, () => {
        if(request.method === "POST"){
        	let required_fields = [];
            var postData = request.body;
            var all_fields_valid = fields_validation(postData,required_fields);
            if(all_fields_valid[0]){
            	// Check date of birth
            	let birth_date = postData['date_of_birth'];
            	postData["accepted_policy"] = true;
            	postData["approved"] = true;
            	if(calculate_age(birth_date) < 18){
            		if(!("content_form" in postData)){
            			response.status(500).send({"message":`Missing consent form for minor`});
            		}
            		postData["approved"] = false;
            		postData["minor"] = true;
            	}
            	let is_msu_student = postData["email"].includes("@msu.edu");
            	if is_msu_student{
            		postData["msu_student"] = true;
            		let len = postData["email"].search("@")+1;
            		postData["net_id"] = postData["email"].substr(0,len);
            	}
            	response.status(200).send({"message":"sucess", "data": postData});
            }
            else{
            	response.status(500).send({"message":`Missing ${all_fields_valid[1]} parameter`});
            }

        }
        else response.status(500).send({"message":"Please send a post request"});
    });
});

