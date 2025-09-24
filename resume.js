let myName = "Danna";
let title = "Student";
let experience = ["Science fair projects", "Event leadership", "Forum Talker"];
let education = "Oral Roberts University";
let skills = ["Hard-working", "Great at mathematics", "Problem solving"];
let skillsList = document.createElement("ul");

for (let i= 0; i < skills.length; i++){
  let li = document.createElement("li");
  li.textContent = skills[i];
  skillsList.appendChild(li);
}
document.body.appendChild(skillsList);
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;

function showFunFact(){
  alert("Fun Fact: I like to dance");
}
