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
        if (count>=5){
            alert("You can not purchase more than four tickets!");
            const btn3=document.getElementsByClassName("btn").innerHtml;
            btn3.disabled=true;
            }
        const count1=document.getElementById("ticketCount").innerText=count;
        const count2=document.getElementById("remainTicket").innerText=20-count; 
       
      
e.target.style.backgroundColor="#1DD100";

//publish ticket name
const container =document.createElement("div")
const tName=document.getElementById("ticketNaming");
const ticketName=e.target.innerText;
const p=document.createElement("p");
const p1=document.createElement("p");
const p2=document.createElement("p");
p.innerText=ticketName;
p1.innerText="economy";
p2.innerText="550TK";
container.appendChild(p);
container.appendChild(p1);
container.appendChild(p2);
tName.appendChild(container);
container.classList.add("flex","flex-row","justify-between");



//total price 
totalPrice=550+totalPrice;
const totalPrice1=document.getElementById("totalPrice").innerText=totalPrice;



  

    })};

 //discount and grand total
   const discount1=totalPrice*.15;
   const discount2=totalPrice*.2;
   const grandTotal=totalPrice-discount1;
       const btn2=document.getElementById("apply-btn");
       btn2.addEventListener("click",function(){
           const cupon1=document.getElementById("input").value;
           
           if (cupon1==="Couple 20"){
            document.getElementById("grand-total").innerText=totalPrice-totalPrice*.20;
            const hidden=document.getElementById("hidden");
            hidden.classList.add("hidden");
        }

       else if (cupon1==="NEW15")  {
        document.getElementById("grand-total").innerText=totalPrice-totalPrice*.15;
        const hidden=document.getElementById("hidden");
        hidden.classList.add("hidden");
       } 
       else {
        document.getElementById("grand-total").innerText=totalPrice;
       }     
       }
       );
       