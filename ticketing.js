document.getElementById("scrollButton").addEventListener("click", function() {
    // Get the target element
    var targetElement = document.getElementById("targetElement");
    
    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

//get the buttons
let count=0;
let totalPrice=0;
const btns = document.getElementsByClassName("btn");
for(const button of btns){
    button.addEventListener("click", function(e){
        count++;
        const count1=document.getElementById("ticketCount").innerText=count;
        const count2=document.getElementById("remainTicket").innerText=40-count; 
      
e.target.style.backgroundColor="red";

//publish ticket name
const container =document.createElement("div")
const tName=document.getElementById("ticketNaming");
const ticketName=e.target.innerText;
const p=document.createElement("p");
const p1=document.createElement("p");
const p2=document.createElement("p");
p.innerText=ticketName;
p1.innerText="second";
p2.innerText="550TK";
container.appendChild(p);
container.appendChild(p1);
container.appendChild(p2);
tName.appendChild(container);
container.classList.add("flex","flex-row","justify-between");



//total price 
totalPrice=550+totalPrice;
const totalPrice1=document.getElementById("totalPrice").innerText=totalPrice;
if (count>=5){
alert("You can not purchase more than four tickets!")
}


  

    })};

 //discount and grand total
   const discount1=totalPrice*.15;
   const discount2=totalPrice*.2;
   const grandTotal=totalPrice-discount1;
       const btn2=document.getElementById("apply-btn");
       btn2.addEventListener("click",function(){
           const cupon1=document.getElementById("input").value;
           
           if (cupon1==="couple20"){
            document.getElementById("grand-total").innerText=totalPrice-totalPrice*.20;
        }

       else if (cupon1==="couple15")  {
        document.getElementById("grand-total").innerText=totalPrice-totalPrice*.15;
       } 
       else {
        document.getElementById("grand-total").innerText=totalPrice;
       }     
       }
       );
 