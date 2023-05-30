// let parent = document.querySelector(".parent");
// let h1 = document.createElement("h1");
// h1.style.color = "green"
// h1.innerHTML = "Hello Mr Ardasher";
// parent.appendChild(h1);
// console.log(parent);



let btns = document.querySelectorAll(".btn");
let modalsOver = document.querySelectorAll(".modal-overly");
btns.forEach(element => {
    element.addEventListener("click",(element)=>{
        let path = element.currentTarget.getAttribute("data-path")
        modalsOver.classList.add(".modal-overly-visible ")
        document.querySelector(`[data-target] = "${path}"`)
    })
});