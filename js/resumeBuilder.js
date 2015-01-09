var skills=["Nice","Awesome","Cool"]
var age="44";
var picURL="http://media-cache-ak0.pinimg.com/236x/49/fc/d9/49fcd990853426d8f67867bec2900cee.jpg";
var welcomeMSG="Hello!, I'm Nick!";
var mobilePhone="123-123-1234";
var role="DAC Dev";
var fname="Nick";
var email="nick123@somewhere.someplace";

var formattedName=HTMLheaderName.replace("%data%",fname);
var formattedRole=HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio ={
	"name":fname,
	"role":role,
	"contacts":{
		"mobile":mobilePhone,
		"email":email
		},
	"pic":picURL,
	"welcome":welcomeMSG,
	"skills":skills
}

$("#main").append(bio.name," ", bio.role," ",bio.contacts.mobile);

var work={}

work.position = "Web Developer";
work.employer = "Self Employed";
work.years = "2002-current";
work.city = "The boro";

var ed={}
ed["school"]="Purdue";
ed["years"]="1989-1996";
ed["city"]="West Lafayette";

var education={
	"schools":[
		{"name":"Purdue",
		"city":"West Lafayette",
		"degree":"BS",
		"major":["Biology","Computer Science"]
		},
		{"name":"Purdue2",
		"city":"West Lafayette2",
		"degree":"BS2",
		"major":["Biology2","Computer Science2"]
		}
	]
}

$("#main").append(work["position"],ed["school"]);