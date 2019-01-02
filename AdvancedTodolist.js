 
window.onload = function(){
 
     let arr=[];
    let newtask = document.getElementById('newtask')
    let addbtn = document.getElementById('addbtn')
     let parentDiv= document.getElementById('parent');
     let clearButton= document.getElementById('clearButton');
     let reverseButton= document.getElementById('reverse');

    addbtn.onclick = function () {
  addNewTask();
    
    }
   function addNewTask(){
    let newTaskValue = newtask.value;
    let a = document.createElement('div');
    a.className="special notDone";

    a.innerText=newTaskValue;
    newtask.value="";
    var btn = document.createElement("BUTTON");  // Create a <button> element
    btn.className="btn btn-primary col-2 mx-2";
    
    var t = document.createTextNode("NOT DONE");       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    a.appendChild(btn);    
    var butn = document.createElement("BUTTON");  // Create a <button> element
    butn.className="btn btn-danger col-2 mx-2";
    
    var m = document.createTextNode("DELETE");       // Create a text node
    butn.appendChild(m);                                // Append the text to <button>
    a.appendChild(butn);  
    parentDiv.appendChild(a);
    arr.push(a);
    // console.log(arr);
    btn.onclick= function(){
      if(btn.innerText==="DONE"){
          a.className="special notDone"
         btn.innerText="NOT DONE";
        
      }
   else{ 
      btn.innerText="DONE";
      a.className="special done"
   }
}
  butn.onclick= function(){
      a.className="special hide";
      
  }
  clearButton.onclick=function(){
    for(let s=0;s<arr.length;s++){
        if(arr[s].className=="special done"){
            arr[s].className="special hide";
        }
    }
}
   }
   newtask.addEventListener('keyup', function (ev) {
    if (ev.keyCode == 13) {
      addNewTask()
    }
  })
  
printArray= function(){
    console.log("I was visited")
    for(let k=0;k< arr.length;k++){
      console.log(arr[k]);
    }

}

reverseButton.onclick= function(){
  // printArray();
  EmptyList();
  arr.reverse();
  generateList();


}

EmptyList=function(){
for(let r=0;r<arr.length;r++){
parentDiv.removeChild(arr[r]);
}
}
generateList = function(){
  for(let b=0;b< arr.length;b++){
   parentDiv.appendChild(arr[b]);
  }
}
}