var teamMembers = [
	{ name: "John Pepe", email: "john.p@pepeins.com", hobby: ["Tennis","Soccer","Relaxing"] },
	{ name: "Lupo Peepo", email: "lupo.p@pepeins.com", hobby: ["Dancing", "Skiing", "Surfing"] },
	{ name: "Jakob", email: "jakob.p@pepeins.com", hobby: ["Chatting","Flirting","Cooking"] }];

var name = "Name: ";
var email = "E-Mail: ";
var hobby = "Hobbys: ";

document.getElementById('show_team1').addEventListener("click", function() {
    document.getElementById('outputteam1').innerHTML = `${name}${teamMembers[0].name}<br>
    ${email} ${teamMembers[0].email}<br>
    ${hobby} ${teamMembers[0].hobby.join(' ,')}`;
    document.getElementById('outputteam2').innerHTML = "";
    document.getElementById('outputteam3').innerHTML = "";

});

document.getElementById('show_team2').addEventListener("click", function() {
	document.getElementById('outputteam2').innerHTML = `${name}${teamMembers[1].name}<br>
    ${email} ${teamMembers[1].email}<br>
    ${hobby} ${teamMembers[1].hobby.join(' ,')}`;
    document.getElementById('outputteam1').innerHTML = "";
    document.getElementById('outputteam3').innerHTML = "";

});

document.getElementById('show_team3').addEventListener("click", function() {
    document.getElementById('outputteam3').innerHTML = `${name}${teamMembers[2].name}<br>
    ${email} ${teamMembers[2].email}<br>
    ${hobby} ${teamMembers[2].hobby.join(' ,')}`;
    document.getElementById('outputteam1').innerHTML = "";
    document.getElementById('outputteam2').innerHTML = "";
});