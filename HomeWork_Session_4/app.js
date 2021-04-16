// 1. 
// let arr = [];
// let count = 0;
// while (true) {
//     let x = Number(prompt("Input x ???"));
//     let y = Number(prompt("Input y ???"));
//     if(x > y){
//         alert("Re-enter");
//     }else{
//         for (let i = x; i <= y; i+=2) {
//             arr.push(i);
//             count = count + i;
//         }
//         console.table(arr);
//         let tbc = count/arr.length;
//         console.log(`Trung binh cong cua mang la ${tbc}`);
//         break;
//     }
// }

// 2.
// let input = prompt("Nhập vào một chuỗi dãy sô(vd: 1,2,3,4,..)");
// let arr = [];
// let arr1 = input.split(",");

// let tongchan = 0;
// let tongle = 0;
// for (const value of arr1) {
//     arr.push(Number(value));        
// }
// console.log(s);
// console.table(arr);
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0){
//     tongchan += arr[i];
//     }else{
//     tongle += arr[i]
//     }    
// }
// console.log(`Tổng các số chẵn là ${tongchan}`);
// console.log(`Tổng các số lẻ là ${tongle}`);
// let maxNum = arr[0];
// let minNum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//         maxNum = arr[i]
//     }
//     if(minNum > arr[i]){
//         minNum = arr[i]
//     }    
// }
// console.log(maxNum);
// console.log(minNum);

// 3.
// let arr = [1, 2, 4, 6, [3, 5], [10, 12]];
// let arr1 = [];
// let arr2 = [];
// let tong = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr1 = arr1.concat(arr[i]); // Nối hai hay nhiều mảng với nhau
    
// }
// for (let i = 0; i <= arr.length; i++) {
//     tong += arr1[i];
        
// }
// console.log(`Tổng của các phần tử trong mảng là ${tong}`);
// console.table(arr1);

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(Number(arr1[i]) + 10);
        
// }
// console.table(arr2);

// 4.
// let input = prompt("Nhập vào một chuỗi dãy sô");
// let arr = [];
// for (let i = 0; i < input.length; i++) {
//     arr.push(Number(input[i]));    
// }
// let isExist = (arr, x) => arr.includes(x); // trả về true nếu mảng chứa phần tử x
// let ans = [];
// arr.forEach(element => { //duyệt từng phần tử trong mảng arr
//     if(!isExist(ans, element)) ans.push(element); // nếu phần tử chưa tồn tại trong 
//                                                     //mảng ans thì push vào mảng ans
// });
// console.table(arr);
// console.table(ans);
 
// 5.
// let input = prompt("Nhập vào một câu bất kỳ");

// let arr = input.split("");
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == " "){
//         arr[i+1] = arr[i+1].toUpperCase();
//         arr[0] = arr[0].toUpperCase();
//     }
    
// }

// console.table(arr.join(""));

// 6.
// let n = Number(prompt("Nhập vào số n"));
// let input = prompt("Nhập vào một chuỗi số (vd: 1,2,3,..)");
// let arr = [];
// let arr1 = [];
// let arr2 = input.split(",");
// for (const value of arr2) {
//     arr.push(Number(value));
// }
// console.log(arr);
// for (let i = 0; i < n; i++) {
//     arr1.push(arr[i]);
    
// }
// console.log(arr1);

// 7.
// let n = Number(prompt("Nhập vào số n"));
// let input = prompt("Nhập vào một chuỗi số (vd: 1,2,3,..)");
// let arr = [];
// let arr1 = [];
// let arr2 = input.split(",");
// for (const value of arr2) {
//     arr.push(Number(value));
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i += n) {
//     arr1.push(arr.slice(i, i + n));
    
// }
// console.log(arr1);


// 8.
// let input = prompt("Nhập vào một chuỗi số (vd: 1,2,3,..)");
// let arr = [];
// let arr1 = input.split(",");
// for (const value of arr1) {
//     arr.push(Number(value));
// }
// console.log(arr);
// arr.sort( function (a, b) {
//     return a - b;
// })
// hieu = arr[arr.length - 1] - arr[0];
// console.log(`Hiệu hai số lớn nhất và nhỏ nhất của mảng là ${hieu} `);


// 9.


// 10.
// let input = prompt("Nhập vào một chuỗi bất kỳ ");
// let arr = [];
// for (let i = input.length; i > 0; i--) {
//     arr.push(input[i-1]);
    
// }
// console.log(arr);
// let output = arr.join("");
// // console.log(ouput);
// if(input == output){
//     console.log("The string is palindrome ");
// }else{
//     console.log("False");
// }
