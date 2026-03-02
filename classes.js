const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const times=["9A.M. to 10 A.M.", "10A.M.-11A.M.", "11:00A.M.-12P.M.", "12P.M.-1P.M.", "1P.M.-2P.M.", "2P.M.-3P.M.", "3P.M.-4P.M.", "4P.M.-5P.M."];
var accountNumber=sessionStorage.getItem("account");
var username=localStorage.getItem("username"+accountNumber);
var classNumber=0;
var classes=document.createElement("table");
alert(localStorage.getItem(username+"ClassType1"));

function GetCurrentClasses(){
    var title=document.createElement("h1");
	title.innerHTML="Your Classes";
	//So it can centered by CSS
	title.id="tableTitle";
	var columns=document.createElement("tr");
	classes.appendChild(columns);
	var typeColumn=document.createElement("th");
	var dayColumn=document.createElement("th");
	var timeColumn=document.createElement("th");
	typeColumn.innerHTML="Type";
	dayColumn.innerHTML="Day";
	timeColumn.innerHTML="Times";
	columns.appendChild(typeColumn);
	columns.appendChild(dayColumn);
	columns.appendChild(timeColumn);
  
	while(localStorage.getItem(username+"ClassType"+classNumber)!==null){
		 var classRow=document.createElement("tr");
		 var type=document.createElement("td");
		 var day=document.createElement("td");
		 var time=document.createElement("td");
		 type.innerHTML=localStorage.getItem(username+"ClassType"+classNumber);
		 day.innerHTML=localStorage.getItem(username+"ClassDay"+classNumber);
		 time.innerHTML=localStorage.getItem(username+"ClassTime"+classNumber);
		 classes.appendChild(classRow);
		 classRow.appendChild(type);
		 classRow.appendChild(day);
		 classRow.appendChild(time);
		 classNumber++;
		 
	}



	//Adds items to the body
	document.body.appendChild(title);
document.body.appendChild(classes);
}
function AddClass(){
	 var paymentMethod=document.getElementById("paymentType");
	 var selectedDay="";
		 var selectedTimes=[];
		 var classTypes=document.getElementById("classTypes");
	  var classType=classTypes.options[classTypes.selectedIndex].value;
		 var dayButtons=document.getElementsByName("days");
		 var timeBoxes=document.getElementsByName("hours");
		 for(var position=0; position<dayButtons.length; position++){
			  if(dayButtons[position].checked){
				  selectedDay=days[position];
				  break;
			  }
		 }
		 for(var position=0; position<timeBoxes.length; position++)
			 if(timeBoxes[position].checked){
				 selectedTimes.push(times[position]);
				  var classRow=document.createElement("tr");
		 var type=document.createElement("td");
		 var day=document.createElement("td");
		 var time=document.createElement("td");
		  type.innerHTML=classType;
		  day.innerHTML=selectedDay;
		  time.innerHTML=times[position];
		  classes.appendChild(classRow);
		 classRow.appendChild(type);
		 classRow.appendChild(day);
		 classRow.appendChild(time);
		 //Stores in local storage object
		 localStorage.setItem(username+"ClassType"+classNumber, type.innerHTML);
		 localStorage.setItem(username+"ClassDay"+classNumber, day.innerHTML);
		 localStorage.setItem(username+"ClassTime"+classNumber, time.innerHTML);
		 classNumber++;
			 }
			$(function(){
            $.extend({
              updateDebt: function(paymentType, addedDebt, daysRequired) {
                   var accountNumber=sessionStorage.getItem("account");
				   var lastDate=new Date();
				   var currentDebt=parseFloat(localStorage.getItem("debt"+accountNumber));
				   //In case of no storage yet
				   if(localStorage.getItem(paymentType+"Date"+accountNumber)!==null&&paymentType!=null)
				  lastDate=Date.parse(localStorage.getItem(paymentType+"Date"+accountNumber));
			       else{
					   lastDate=new Date();
					   //Creates a new object for the plan
					   localStorage.setItem(paymentType+"Date"+accountNumber, lastDate);
				   }
				   var today=new Date();
				   var daysPassed=today.getTime()-lastDate.getTime();
				   if(daysPassed>=daysRequired*3600000){
                  
                   currentDebt+=addedDebt;
                   localStorage.setItem("debt"+accountNumber, currentDebt);
				   }
                 document.getElementById("debt").innerHTML="You owe $"+localStorage.getItem("debt"+accountNumber);
                }
				
            });
});
		switch(paymentMethod.selectedIndex){
			 case 0: $.updateDebt(null, 20, 0); break;
			 case 1: $.updateDebt("Weekly", 200, 7); break;
			 case 2: $.updateDebt("Monthly", 2000, 31); break;
			 default: $.updateDebt("Yearly", 14000, 365); 
        }			
}