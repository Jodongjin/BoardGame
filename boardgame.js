var loginState = false;

const inputID=document.getElementById("input_id");
const inputPassword=document.getElementById("input_password");
const inputPasswordCheck=document.getElementById("input_passwordCheck");
const inputName=document.getElementById("input_name");
const inputPhoneNumber=document.getElementById("input_phoneNumber");

const signupButton=document.getElementById("signup_button");

function emptyCheck() {
    if(inputID.value=="")
        alert("ID is empty.");
    else if(inputPassword.value=="")
        alert("Password is empty.");
    else if(inputPasswordCheck.value=="")
        alert("Password Check is empty.");
    else if(inputName.value=="")
        alert("Name is empty");
    else if(inputPhoneNumber.value=="")
        alert("Phone number is empty.");
    else if(inputPassword.value!=inputPasswordCheck.value)
        alert("Passwords are different");
    else
        signupButton.addEventListener("click", closeModal4);
}
signupButton.addEventListener("click", emptyCheck);


const openButton2=document.getElementById("open_modal2");
const closeButton2=document.querySelector(".close_button2");
const overLay2=document.querySelector(".modal_overlay2");
const modal2=document.querySelector(".modal2");

function openModal2(event)
{
    modal2.classList.remove("hidden2");  
}

function closeModal2(event)
{
    modal2.classList.add("hidden2");
}

openButton2.addEventListener("click",openModal2);
overLay2.addEventListener("click",closeModal2);
closeButton2.addEventListener("click",closeModal2);


const openButton3=document.getElementById("open_modal3");
const openButton24=document.getElementById("open_modal24");
const openButton6=document.getElementById("open_modal6");
const openButton7=document.getElementById("open_modal7");
const openButton8=document.getElementById("open_modal8");
const openButton9=document.getElementById("open_modal9");
const openButton10=document.getElementById("open_modal10");
const openButton11=document.getElementById("open_modal11");
const openButton12=document.getElementById("open_modal12");
const openButton13=document.getElementById("open_modal13");
const openButton14=document.getElementById("open_modal14");
const openButton15=document.getElementById("open_modal15");
const openButton16=document.getElementById("open_modal16");
const openButton17=document.getElementById("open_modal17");
const openButton18=document.getElementById("open_modal18");
const openButton19=document.getElementById("open_modal19");
const openButton20=document.getElementById("open_modal20");
const openButton21=document.getElementById("open_modal21");
const openButton22=document.getElementById("open_modal22");
const openButton23=document.getElementById("open_modal23");
const closeButton3=document.querySelector(".close_button3");
const overLay3=document.querySelector(".modal_overlay3");
const modal3=document.querySelector(".modal3");

function openModal3(event)
{
    modal3.classList.remove("hidden3");  
}

function closeModal3(event)
{
    modal3.classList.add("hidden3");
}

openButton3.addEventListener("click",openModal3);
openButton24.addEventListener("click", openModal3);
openButton6.addEventListener("click", openModal3);
openButton7.addEventListener("click", openModal3);
openButton8.addEventListener("click", openModal3);
openButton9.addEventListener("click", openModal3);
openButton10.addEventListener("click", openModal3);
openButton11.addEventListener("click", openModal3);
openButton12.addEventListener("click", openModal3);
openButton13.addEventListener("click", openModal3);
openButton14.addEventListener("click", openModal3);
openButton15.addEventListener("click", openModal3);
openButton16.addEventListener("click", openModal3);
openButton17.addEventListener("click", openModal3);
openButton18.addEventListener("click", openModal3);
openButton19.addEventListener("click", openModal3);
openButton20.addEventListener("click", openModal3);
openButton21.addEventListener("click", openModal3);
openButton22.addEventListener("click", openModal3);
openButton23.addEventListener("click", openModal3);
overLay3.addEventListener("click",closeModal3);
closeButton3.addEventListener("click",closeModal3);


const openButton4=document.getElementById("open_modal4");
const closeButton4=document.querySelector(".close_button4");
const overLay4=document.querySelector(".modal_overlay4");
const modal4=document.querySelector(".modal4");

function openModal4(event)
{
    modal4.classList.remove("hidden4");  
}

function closeModal4(event)
{
    modal4.classList.add("hidden4");
}

openButton4.addEventListener("click", openModal4);
openButton4.addEventListener("click", closeModal2);
overLay4.addEventListener("click", closeModal4);
closeButton4.addEventListener("click", closeModal4);


const modal5=document.querySelector(".modal5");
const open_modal5=document.querySelector(".open_modal5");

function openModal5(event)
{
    modal5.classList.remove("hidden5");
}

open_modal5.addEventListener("click",openModal5);
const closeButton5=document.querySelector(".close_button5");
closeButton5.addEventListener("click",closeModal5);
function closeModal5(event)
{
    modal5.classList.add("hidden5");
}