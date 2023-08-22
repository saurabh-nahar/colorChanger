let body = document.querySelector('body')

// let btn1 = document.querySelector('#box1')
// let btn2 = document.querySelector('#box2')
// let btn3 = document.querySelector('#box3')
// let btn4 = document.querySelector('#box4')

// btn1.addEventListener("click", () => {
//     body.style.backgroundColor = "red"
// }
// );

// btn2.addEventListener("click", () => {
//     body.style.backgroundColor = "green"
// }
// );

// btn3.addEventListener("click", () => {
//     body.style.backgroundColor = "blue"
// }
// );

// btn4.addEventListener("click", () => {
//     body.style.backgroundColor = "yellow"
// }
// );

let btn = document.querySelectorAll('button');

btn.forEach(function (button) {
    button.addEventListener("click", (e) => {
        if(e.target.id === "red"){
            body.style.backgroundColor = "red";
        }if(e.target.id === "green"){
            body.style.backgroundColor = "green";
        }if(e.target.id === "blue"){
            body.style.backgroundColor = "blue";
        }if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }
    })
});

