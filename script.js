var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");
var del = document.getElementById("delete");

button.addEventListener("click", function(){
	if(checkInput(input.value, lists) === true){
		addInput(input.value);
	}else{
		alert("Input value is missing or already exists!");
	}
})

del.addEventListener("click", function(){
	deleteAll();
})


input.addEventListener("keypress", function(event){
	if(checkInput(input.value, lists) === true && event.keyCode === 13){
		addInput(input.value);
	}else if (event.keyCode === 13){
		alert("Input value is missing or already exists!");
	}
})




function addDoneListener(element){
	
		element.addEventListener("click", function(){
			if(element.className != "done"){
				element.className = "done";
			}else{
				element.className = "";
			}
	
		});
}




function checkInput(value, lists){
	if(value.length < 1){
		return false;
	}else{
		for(var i=0; i<lists.length; i++){
			if(lists[i].childNodes[0].nodeValue === value){
				return false;
			}
		}
	return true;
	}

}

function addInput(value){
	var li = document.createElement("li");	
		li.appendChild(document.createTextNode(value));
		ul.appendChild(li);
		input.value="";
		lists = document.querySelectorAll("li");
		addDoneListener(li);

	var btn = document.createElement("button")
	btn.className = "smallDelete";
	btn.appendChild(document.createTextNode("Remove"));
	li.appendChild(btn);
	//btn.addEventListener("click", function(btn){
	//	btn.parentNode.parentNode.childNodes(li);
		
	//});
}

function deleteAll(){
	for(var i =0; i<lists.length; i++){
		if(lists[i].className === "done"){
			lists[i].parentNode.removeChild(lists[i]);
		}
		
	}
	lists = document.querySelectorAll("li");
}

