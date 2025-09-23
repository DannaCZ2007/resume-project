let myName = "Danna";
let title = "Student";
let experience = ["Science fair projects", "Event leadership", "Forum Talker"];
let education = "Oral Roberts University";
let skills = ["Hard-working", "great at mathematics", "problem solving"];
letskillsList =document.createElement("ul");

for (let i= 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent + skills[i];
  skillsList.appendChild(li);
}
document.body.appendChild(skillsList);
//let skills = "something"; //TODO
//Connect Variables to the HTML (ligaments)
document.getElementById ("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
document.getElementById("skills").textContent = skills;
