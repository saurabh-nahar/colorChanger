let body = document.querySelector('body')

let btn1 = document.querySelector('#box1')
let btn2 = document.querySelector('#box2')
let btn3 = document.querySelector('#box3')
let btn4 = document.querySelector('#box4')

btn1.addEventListener("click", () => {
    body.style.backgroundColor = "red"
}
);

btn2.addEventListener("click", () => {
    body.style.backgroundColor = "green"
}
);

btn3.addEventListener("click", () => {
    body.style.backgroundColor = "blue"
}
);

btn4.addEventListener("click", () => {
    body.style.backgroundColor = "yellow"
}
);