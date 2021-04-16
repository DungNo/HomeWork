let input = prompt("Nhập vào dãy số bất kỳ (vd: 1,2,3,..)");
let arr = input.split(",");
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    arr1.push(Number(arr[i]));
    
}
console.log(arr1);
arr1.sort( function (a, b) {
    return a - b;
});
console.log(`Dãy sau khi sắp xếp tăng dần là ${arr1} `);
console.log(`Số lớn thứ hai trong dãy là: ${arr1[arr.length - 2]}`);
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] = arr1[i + 1]){
        arr1[i+=2];
           
    }console.log(`Số bé thứ 2 trong dãy là: ${arr1[i]}`); break;    
}

for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] >= 2 && arr1[i] % 2 != 0){
        console.log(`${arr1[i]} là số nguyên tố có chỉ số index là ${i}`);
    }
    // chưa in dc not found   
}
for (let i = 0; i < arr1.length; i++) {
    if(arr1.length % 2 == 0){
        
    }
    
} 

 