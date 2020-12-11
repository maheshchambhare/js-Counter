
const back = document.querySelector(".back");
const res = document.querySelector(".reset");
const forw = document.querySelector(".forw");

let value = 0;

function number() {
    document.getElementById("no").innerHTML = value;
    
}

number();

back.addEventListener("click", () => {
    value--;
    number();
})
res.addEventListener("click", () => {
    value = 0;
    number();
})
forw.addEventListener("click", () => {
    value++;
    number();
})