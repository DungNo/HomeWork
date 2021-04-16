// Study:
// 1. 
// 1.1
// Trong Javascript trường hợp nhận được thông báo biến không hợp lệ là
// - Tên biến bắt đầu bằng số
// - Tên biến bắt đầu bằng ký tự đặc biệt (!, @, #, $, %, ^, &, *,...)
// - Tên biến trùng với các từ khóa như var, for, if, ...
// Examples: let 4fun = "Hello", let #name, let var
// 1.2
// Dùng typeof để kiểm tra kiểu dữ liệu trong Javascript
//Examples:
//let a = "Hello World";
//console.log(typeof a);

// 2.
//2.1
// var và const là cú pháp để khai báo biến
//Ex: var tên_Biến = "value", const tên_Biến = "value"
// 2.2
// Khác nhau giữa let và var
// - var được dùng để khai báo trong phạm vi toàn cục hoặc trong phạm vi chương trình,
// còn let dùng khai báo trong phạm vi khối lệnh,
// - sau mỗi khối lệnh thì var có thể được cập nhập lại giá trị
// còn let thì giữ nguyên giá trị khai báo ban đầu
// - var được khởi tạo với giá trị chưa xác định còn let thì không có bất kỳ giá trị
// khởi tạo nào
//2.3
// Khác nhau giữa let và const
// - let có thể được cập nhập trong khối lệnh còn const không thể cập nhập dc giá trị
// - let có thể được khai báo mà không được khởi tạo, 
// const phải được khởi tạo trong quá trình khai báo
//2.4
// 3.
// 3.1
// Boolean là kiểu giá trị
// 3.2
// Boolean có hai giá trị là true và false


// Serious exercices
// 4.
// 4.a
let message = "Code the change";
console.log(message);
// 4.b
let studentCount = Number(0);
console.log(studentCount);

// 5.
// 5.a
message = "Coding may not be easy, but fun";
console.log(message);
// 5.b
studentCount = 16;
console.log(studentCount);
// 5.c
let message1 = message.toLowerCase();
console.log(message1);
// 5.d
studentCount++;
console.log(studentCount);

// 6.
//alert("You look beautiful today");

// 7.
// let a = prompt("Hi there, your name please?");
// if(!a){
// 	let a = prompt("Hi there, your name please?");
// }else{
// 	alert("Hi " + a + ", have a nice day !");
// 	break;
// }

// 8.
// let fistName = prompt("Input the fist name, please");
// let lastName = prompt("Input the last name, please");
// alert("Hi "+ fistName +   " " + lastName);

//9.
// let squareEdge = Number(prompt("Input side length of the square"));
// let area = squareEdge**2;
// alert("The square area is: " + area );

// 10.
// let radiusCircle = Number(prompt("Input radius of the circle"));
// let area2 = Math.PI*radiusCircle**2;
// alert("The circle area is: " + area2 );

// 11.
// let c = Number(prompt("Input degrees Celsius, please "));
// let Fahrenheit = c * 1.8 + 32;
// alert(Fahrenheit);

// 12.
// 12.a
// let i = 0;
// while(i < 7){
//     console.log(i);
//     i = i +1;
// }
// 12.b
// let n = Number(prompt("Input number n"));
// let i = 0;
// while(i < n){
//     console.log(i);
//     i = i +1;
// }
// 12c.
// let n = Number(prompt("Input number start n"));
// let i = 3;
// while(i < n){
//     console.log(i);
//     i = i +1;
// }
// 12d.
// let c = Number(prompt("Input number start c"));
// let n = Number(prompt("Input number end n"));
// while(c < n){
//     console.log(c);
//     c += 1;
// }
// 12e.
// let c = Number(prompt("Input number start c"));
// let n = Number(prompt("Input number end n"));
// while(c < n){
//     console.log(c);
//     c += 3;
// }
// 12f.
// let c = Number(prompt("Input number start c"));
// let n = Number(prompt("Input number end n"));
// let s = Number(prompt("Input number jump s"));
// while(c < n){
//     console.log(c);
//     c += s;
// }

// 13.
//let n = Number(prompt("Input number n"));
// let i = 1;
// let result = 1;
// while (i <= n ) {
//     result *= i; 
//     i++;
// }
// alert(result);

// 14.
// let age = Number(prompt("How old are you?"));
// if(age < 14){
// 	alert(" You are not enough to view this content");
// }else{
// 	alert("Enjoy");
// }

// 15.
// let x = Number(prompt("Input number x"));
// if (x >= 0 && x <= 5) {
// 	alert("Lower half of 9");
// }else if(x > 5 && x <= 9){
// 	alert("Higher half of 9");
// }else{
// 	alert(x + " Khong thuoc khoang tu 0 - 9");
// }

// 16.
// let x = Number(prompt("Input number x"));
// let n = Number(prompt("Input number n"));
// if (x >= 0 && x <= n/2) {
// 	alert("Lower half of " + n);
// }else if(x > n/2 && x <= n){
// 	alert("Higher half of " + n);
// }else{
// 	alert( x + " Khong thuoc khoang tu 0 - " + n);
// }

// 17.
// let number = Number(prompt("Input number, please"));
// if(number%2 === 0){
// 	alert(number + " is an even number");
// }else{
// 	alert(number + " is an odd number");
// }

// 18.
// 18.a
// for (let i = 0; i < 3; i++) {
// 	console.log("L");
// }
// for (let i = 0; i < 3; i++) {
// 	console.log("H");
// }
// 18.b
// let n = Number(prompt("Input total number of L's and H's"));
// for (let i = 0; i < n; i++) {
// 	if (i < n/2) {
// 		console.log("L");
// 	}else{
// 		console.log("H");
// 	}
// }
// 18.c
// let n = Number(prompt("Input total number of 1's and 0's"));
// for (let i = 0; i < n; i++) {
// 	if (i % 2 === 0) {
// 		console.log("0");
// 	}else{
// 		console.log("1");
// 	}
// }

// 19.
// let h = Number(prompt("Your hight in kg?"));
// let w = Number(prompt("Your weight in cm"));
// let BMI = w / h**2;
// console.log(BMI);

// if(BMI < 18){
//    console.log("Người dùng là gầy");
// }else if(BMI >= 18 && BMI <= 25){
//     console.log("Người dùng là bình thường");
// }else if(BMI > 25 && BMI <= 30){
//     console.log("Người dùng thừa cân");
// }else{
//     console.log("Người dùng béo phì");
// }

//-------------------
let arr = ['apple','banana','orange','strawnerry','mango'];
 while (true) {
     let a = prompt("moi ban cho chuc nang: C(create),R(read),U(updtae),S(search) hoac 0(Exit)").toUpperCase();
    
        if( a == "C"){
            let them = prompt("them san pham");
            arr.push(them);
        }
        else if( a == "R"){
            console.table(arr);
        }
        else if( a == "U"){
            let x = Number(prompt("muon update phan tu nao"));
            let noidung = prompt("update ten mat hang");
            arr[x] =noidung;
            confirm("update thanh cong");
        }
        else if( a =="D"){
            let x = Number(prompt("muon xoa phan tu nao"));
            arr.splice(x,1);
            confirm("da xoa");
        }
        else if ( a == "S"){
            let x = prompt("ban muon tim gi");
            for (let i = 0; i < arr.length; i++){
                    if ( arr[i].indexOf(x) != -1){
                        console.log(arr[i]);
                    }
            }
           
        }
        else if ( a == "0"){
           let thoat = confirm("thoat?")
           if (thoat)
               break;
        }else {
        	let a = prompt("sai chuc nang, vui long chon: c,r,u,s hoac 0").toUpperCase();
     
    }
     
 }
