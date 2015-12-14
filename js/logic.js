var typeOfModel = ["802.11 wireless LAN%1","802.11 state machine%2","802.11 layering%3", "WEP: MAC association%4", "Shared key challenge response autentication%5",
"WEP crypto encapsulation%6", "WEP en-/decryption%7", "802.11i alphabet soup%8", "TKIP add-on to WEP%9", "TKIP key mixing (II)%10",
"EAP 802.1X authentication%11", "EAPOL: pairwise temporal keys 4-way handshake%12","802.11 Physical Level Standards%13","CCMP MPDU Encapsulation%14",
"CCMP Sender Side%15","CCMP Receiver Side%16","802.1X Concept%17","PEAP (TTLS)%18","Group Key Transport And Handshake%19",
"TLS Handshake over/within EAP%20","EAP SIM%21","WEB-Captive Portal%22","VPN Authentication and Encryption%23", "TKIP Processing%24",
"TKIP Decapsulation Block Diagram%25","UIA f9%26","UEA1 f8%27"];
var usedModel = [];
var round = 0;
var identification = 0;

$(document).ready(function() {

	$('#show').click(function() {
		console.log(identification);
		var myText = document.getElementById('modelField');
		myText.innerHTML = "<img src='./figurer/"+identification+"'>";
	})

	$('#next').click(function() {
		$("#show").show();
		document.getElementById("modelField").innerHTML = "";
		if (typeOfModel.length > 0 && (round % 2 == 0)) {
			var randomNumber = getRandomModel(typeOfModel);
			var questionAndId = typeOfModel[randomNumber];
			var splittedQuestion = questionAndId.split("%");
			var question = splittedQuestion[0];
			identification = splittedQuestion[1] + ".png";

			$('#model').text(question);
			usedModel.push(typeOfModel[randomNumber]);
			typeOfModel.splice(randomNumber,1);
		}
		else {
			var randomNumber = getRandomModel(usedModel);
			var questionAndId = usedModel[randomNumber];
			var splittedQuestion = questionAndId.split("%");
			var question = splittedQuestion[0];
			identification = splittedQuestion[1] + ".png";
			$('#model').text(question);
			typeOfModel.push(usedModel[randomNumber]);
			usedModel.splice(randomNumber,1);
		}
		roundCounter();
	})
})


function getRandomModel(modelArray) {
	var randomQuestion = Math.floor(Math.random() * modelArray.length);
	return randomQuestion;
} 

function roundCounter() {
	if (usedModel.length == 0 || typeOfModel.length == 0) {
		round++;
		console.log("TM: " +typeOfModel.length);
		console.log("UM: " +usedModel.length);
		$('#round').text(round);
	} 
}