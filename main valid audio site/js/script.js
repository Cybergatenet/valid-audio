var settingsMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle(){
	settingsMenu.classList.toggle('settings-menu-height');
}

darkBtn.onclick = function(){
	darkBtn.classList.toggle('dark-btn-on');
	document.body.classList.toggle('dark-theme');
    
    if(localStorage.getItem("Theme") == "light"){
      localStorage.setItem("Theme", "dark");  
    }
    else{
      localStorage.setItem("Theme", "light");  
    }
    
    
}


if(localStorage.getItem("Theme") == "light"){
 darkBtn.classList.remove("dark-btn-on");
 document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem("Theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
 document.body.classList.add('dark-theme');  
}
else{
    localStorage.setItem("Theme", "light");
}


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




