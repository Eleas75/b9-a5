document.getElementById("scrollButton").addEventListener("click", function() {
    // Get the target element
    var targetElement = document.getElementById("targetElement");
    
    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

//get the buttons
let count=0;
const btns = document.getElementsByClassName("btn");
for(const button of btns){
    button.addEventListener("click", function(e){
        const count1=document.getElementById("ticketCount");innerText=count;
        const count2=document.getElementById("remainTicket");innerText=40-count; 
        count++
e.target.style.backgroundColor="red";

//publish ticket name
const tName=document.getElementById("ticketNaming");
const ticketName=e.target.innerText;
const p=document.createElement("p");
p.innerText=ticketName;
ticketNaming.appendChild(p);
    })};