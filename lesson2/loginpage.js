const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const btn = document.getElementById("btnLogin");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(userName.value=="guiyab" && passWord.value=="guiyab"){
        alert("You have logged in successfully!");
        window.location="/lesson3/content/mainPage/index.html";
          } else {
            alert("Please fill all the fields");
          }
        });