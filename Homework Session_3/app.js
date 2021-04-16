let arr = ["Apple", "Banana", "Orange", "Strawberry", "Mango"];
while(true){
	let input = prompt("Input C(create)/R(view array)/U(update)/D(delete)/S(seach)/(0 => out system)").toUpperCase();
	if (input == "C" || input == "R" || input == "U" || input == "D" || input == "S" || input == "0") {
		if (input == "C") {
		    let c = prompt("Input add new");
		    arr.push(c);
		    console.log("Create succes");
		}
		else if (input == "R") {
		    console.table(arr);
		}
		else if (input == "U") {
			let i = prompt("Input your index");
			if( i > arr.length || i < 0){
				console.log("Not found the index");
			} else{
				let input = prompt("Input your Update");
				arr.push(input);
				console.log("Update succes");
				console.table(arr);
			}
		    
		} else if (input == "D") {    
		    if(confirm("Are you delete?") == true) {
		        arr.pop();
		        console.log("Delete succes");
		    }else {
		        console.log("Delete unsucces");
		    }
		} else if(input == "S") {
		    let s = prompt("Input a string desire seach");
			let result = [];
			for(let i = 0; i < arr.length; i++){
				if(arr[i].includes(s)){
					result.push(arr[i]);
				}
			}
			if (result.length == 0) {
				console.log("Not found")
			} else {
				console.table(result);
			}
		} else{
			if(confirm("Are you out system") == true) {
				break;
			} else {
				continue;
			}
		}
	} else{
		console.log("Input false, re-enter");
		continue;
	}
}