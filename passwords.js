var accountNumber=0;
function GetAccountNumber(typeOfData, data){
   var currentAccountNumber=1;
   while(localStorage.getItem(typeOfData+currentAccountNumber)!==null){
     if(localStorage.getItem(typeOfData+currentAccountNumber)==data)
       accountNumber=currentAccountNumber;
     currentAccountNumber++;
   }
   
}
//Is used for the security questions
function AddQuestionMark(question){
	if(question.charAt(question.length-1)!='?')
		question+='?';
	return question;
}
//Is used to make the answers case insensitive
function AsLowercase(answer){
  var lowercase="";
  for(var position=0; position<answer.length; position++){
    var letter;
     if(answer.charAt(position)>='A'&&answer.charAt(position)<='Z')
       letter=fromCharCode(answer.charCodeAt(position)+32);
     else
       letter=answer.charAt(position);
     lowercase+=letter;
  }
  return lowercase;
}
function AllowSecurityQuestionAnswers(typeOfData, id, returningData){
   var data=document.getElementById(id).value;
   //accountNumber=0;
   GetAccountNumber(typeOfData, data);
   
  if(accountNumber>0){
	  //So only one set of the security questions will exist
	  var continueButton=document.getElementById("continue");
	  continueButton.remove();
   var securityQuestion1=document.createElement("span");
   var securityAnswer1=document.createElement("input");
   securityQuestion1.innerHTML=AddQuestionMark(localStorage.getItem("firstSecurityQuestion"+accountNumber));
 
   securityAnswer1.setAttribute("type", "text");
   var securityQuestion2=document.createElement("span");
   securityQuestion2.innerHTML=AddQuestionMark(localStorage.getItem("secondSecurityQuestion"+accountNumber));
   var securityAnswer2=document.createElement("input");
   securityAnswer2.setAttribute("type", "text");
   var passwordReset=document.getElementById("passwordReset");
   //For going to the next line
   var firstQuestion=document.createElement("div");
   var secondQuestion=document.createElement("div");
   firstQuestion.appendChild(securityQuestion1);
   firstQuestion.appendChild(securityAnswer1);
   secondQuestion.appendChild(securityQuestion2);
   secondQuestion.appendChild(securityAnswer2);
   passwordReset.appendChild(firstQuestion);
   passwordReset.appendChild(secondQuestion);
   var showPassword=document.createElement("button");
   showPassword.innerHTML="Show "+returningData;
   passwordReset.appendChild(showPassword);
   showPassword.onclick=function(){
     var answer1=localStorage.getItem("firstSecurityAnswer"+accountNumber);
     var answer2=localStorage.getItem("secondSecurityAnswer"+accountNumber);
	
     if(securityAnswer1.value==answer1&&securityAnswer2.value==answer2){
        alert("Your "+AsLowercase(returningData)+" is "+localStorage.getItem(AsLowercase(returningData)+accountNumber));
		return true;
	 }
     else
        alert("One or both of your answers are wrong.");
	    return false;
   }
  }
  else
     alert("The "+typeOfData+" "+data+" doesn't exist.");
}