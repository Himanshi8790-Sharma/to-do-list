const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateInput = document.getElementById("dateInput");
// Button p click function
function addTask(){
   if(inputBox.value ===''){
    alert("You must write something!");
   }
   //adding text  if user enter
   else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

   // Date input
   let di = document.createElement("small");
   di.innerHTML = dateInput.value;
   li.appendChild(di);
   dueDate(dateInput.value, li);

    //cross button 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
   }
   inputBox.value ='';
   saveData();
}
//  click funtion for checked  unchecked and delete
 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 },false);

 //In this we store the data in local storage(browser)
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

// We display this data whenever we open website again
 function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();
 function dueDate (dateString, liElement){
   let today = new Date();
   today.setHours(0,0,0,0);
   const taskDate = new Date(dateString);
   taskDate.setHours(0,0,0,0);
   if(taskDate < today){
      liElement.classList.add("overdue");
   }
   
 }
