//declaring variables :
const box = document.querySelector(".color-box") ;
const btn = document.querySelector("#change-color-btn") ;
//Generate new random color :
const ColorChange = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = "#" + randomColor;
  }
  
  btn.addEventListener("click", ColorChange);
ColorChange();