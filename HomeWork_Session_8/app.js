// Bài 1
console.log(document);
const div1 = document.getElementById("div1");
const btn1 = document.getElementById("btn1");

let dem = 0;
btn1.onclick = function () {
    dem ++;
    if(dem % 2 != 0){
        div1.style.display = "none";
    }else{
        div1.style.display = "block";
    }
}

// Bài 2

const div2 = document.getElementById("div2");
const btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
  
    div2.style.backgroundColor = bgColor;
}

// Bài 3

const div3 = document.getElementById("div3");
const div32 = document.getElementById("div32");
const btn3 = document.getElementById("btn3");
div3.innerText = "Đảo nội dung khối 1 thành khối 2";
div32.innerText = "Đã đảo nội dung hai khối"

btn3.onclick = function () {
    let tg = div3.innerHTML;
    div3.innerText = div32.innerHTML;
    div32.innerText = tg;
}

// Bài 4

const div4 = document.getElementById("div4");
const btn4 = document.getElementById("btn4");
let defaultFontSize = 14;

btn4.onclick = function () {
    defaultFontSize ++;
    div4.style.fontSize = `${defaultFontSize}px`;
}
