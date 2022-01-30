const btn = document.querySelectorAll("button");

for (let i=0; i<btn.length; i++){
  btn[i].addEventListener("click",()=>{
    btn[i].classList.add("pressed");

    setTimeout(()=>{
      btn[i].classList.remove("pressed");
    }, 200)
  })
}
