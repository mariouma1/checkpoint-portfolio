let list_card=document.querySelectorAll(".card")

for(let i=0;i<list_card.length;i++)
{list_card[i].onmouseenter=function(){ $('.test', this).slideToggle();}
 list_card[i].onmouseleave=function(){ $('.test', this).slideToggle();}

}
document.querySelector(".circle").onclick=function(e){
    $(".text-point").toggle();
    $(".text-plus").toggle()
    console.log(e.target.innerText)
    if(e.target.innerText=="+")e.target.innerText="-"
    else e.target.innerText="+"

}


document.getElementById("rest").addEventListener("click", rest);

function rest() {
  let list = document.getElementsByClassName("control-item");

  for (let i = 0; i < list.length; i++) {
    list[i].value = "";
    list[i].style.border = "1px solid #ccc";
  }

  let list2 = document.getElementsByClassName("valid-span");

  for (let i = 0; i < list2.length; i++) {
    list2[i].innerText = "";
  }
}

document.getElementById("send").addEventListener("click", send);
function send() {
   
    
  let list = document.getElementsByClassName("control-item");

  for (let i = 0; i < list.length; i++) {
    list[i].style.border = "1px solid beige";
  }

  let list2 = document.getElementsByClassName("valid-span");

  for (let i = 0; i < list2.length; i++) {
    list2[i].innerText = "";
  }
  let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (document.getElementById("first-name").value === "") {
    document.getElementById("valid-first-name").innerText =
      "first name is empty";

    document.getElementById("first-name").style.border = "1px solid red";
    document.getElementById("first-name").focus();
  }  else if (!pattern.test(document.getElementById("mail").value)) {
    document.getElementById("mail").style.border = "1px solid red";
    document.getElementById("mail").focus();

    document.getElementById("valid-mail").innerText = "mail is invalid";
  }  else {
    $('#myModal').modal('hide');
    alert("votre message a été envoyé avec succès");
    rest()
  }

 
}


AOS.init({
    duration: 1200,
  })