var accountNumber=0;//Is used for the Create Account page
var firstNames=[];
var lastNames=[];
var emails=[];
var usernames=[];
var passwords=[];
var debts=[];
var securityQuestions1=[];
var securityAnswers1=[];
var securityQuestions2=[];
var securityAnswers2=[];
var accountNumber=1;
var currentAccountNumber=1;
//Is used so the PHP can access the code
function ShowInfo(type){
	
	while(localStorage.getItem(type+currentAccountNumber)!==null){
		var info=document.createElement("inpit");
		info.id=type+currentAccountNumber;
		//So private info can't be seen
		info.className="invisible";
		info.value=localStorage.getItem(type+currentAccountNumber);
		currentAccountNumber++;
		//Adds to body
		document.body.appendChild(info);
	}
}
function ShowAllInfo(){
	ShowInfo("firstName");
	ShowInfo("lastName");
	ShowInfo("email");
	ShowInfo("username");
	ShowInfo("password");
	ShowInfo("firstSecurityQuestion");
	ShowInfo("firstSecurityAnswer");
	ShowInfo("secondSecurityQuestion");
	ShowInfo("secondSecurityAnswer");
	ShowInfo("debt");
	ShowInfo("Weekly");
	ShowInfo("Monthly");
	ShowInfo("Yearly");
	//So the current account number can be accessed by the PHP
	var account=document.createElement("input");
	account.id="accountNumber";
	account.className="invisible";
document.body.appendChild(account);
	account.value=currentAccountNumber;
}
while(localStorage.getItem("username"+accountNumber)!=null){
  firstNames.push(localStorage.getItem("firstName"+accountNumber));
  lastNames.push(localStorage.getItem("lastName"+accountNumber)); 
  emails.push(localStorage.getItem("email"+accountNumber));
  usernames.push(localStorage.getItem("username"+accountNumber));
  passwords.push(localStorage.getItem("password"+accountNumber));
  debts.push(localStorage.getItem("debt"+accountNumber));
  securityQuestions1.push(localStorage.getItem("firstSecurityQuestion"+accountNumber));
  securityQuestions2.push(localStorage.getItem("secondSecurityQuestion"+accountNumber));
  securityAnswers1.push(localStorage.getItem("firstSecurityAnswer"+accountNumber));
  securityAnswers2.push(localStorage.getItem("secondSecurityAnswer"+accountNumber));
  accountNumber++;
}
//Is used to not allow the same question in different cases
function AsUppercase(word){
	var uppercase="";
	for(var position=0; position<word.length; position++){
		if(word.charAt(position)>='a'&&word.charAt(position)<='z')
			uppercase+=String.fromCharCode(word.charCodeAt(position)-32);
		else
			uppercase+=word.charAt(position);
	}
	return uppercase;
}
//Is used to compare the length of the questions passed to the SecurityQuestionsAreDifferent function
//To make sure the questions are different in case of spaces or non-alphabetical characters
function LettersOnly(question){
	var questionOnlyLetters="";
	for(var position=0; position<question.length; position++)
		if(IsALetter(question.charAt(position)))
		    questionOnlyLetters+=question.charAt(position);
	return questionOnlyLetters;
}
function SecurityQuestionsAreDifferent(question1, question2){
	var securityQuestion1=LettersOnly(question1);
	var securityQuestion2=LettersOnly(question2);
	if(AsUppercase(securityQuestion1)!=AsUppercase(securityQuestion2))
		return true;
	else
		return false;
}
//Is used by the Validate function to validate the password
function PasswordHasEnoughUniqueCharacters(password){
	var uniqueCharacters=0;
	for(var position1=0; position1<password.length; position1++){
		var alreadyExists=false;
		for(var position2=position1-1; position2>=0; position2--)
			if(password.charAt(position1)==password.charAt(position2))
				alreadyExists=true;
		if(!alreadyExists)
			uniqueCharacters++;
	}
	if(uniqueCharacters>=5)
		return true;
	else return false;
}
function IsALetter(character){
 if(character>='a'&&character<='z'||character>='A'&&character<='Z')
   return true;
 else
   return false;
}
function Validate()
{
  var firstName=document.getElementById("FirstName").value;
  var lastName=document.getElementById("LastName").value;
  var email=document.getElementById("emailAddress").value;
  var username=document.getElementById("Username").value;
  var password=document.getElementById("Password").value;
  var confirmedPassword=document.getElementById("ConfirmedPassword").value;
  var securityQuestion1=document.getElementById("SecurityQuestion1").value;
  var securityAnswer1=document.getElementById("SecurityAnswer1").value;
  var securityQuestion2=document.getElementById("SecurityQuestion2").value;
  var securityAnswer2=document.getElementById("SecurityAnswer2").value;
  var proper=true;//Determines if all the data was put in and all of it was put in properly
 
  if(firstName.length==0)
  {
   alert("You didn't put in your first name.");
   proper=false;
  }
  else
  {
    for(var position=0; position<firstName.length; position++)
    {
     if(!IsALetter(firstName.charAt(0)))
     {
       alert("Your first name must only contain letters.");
       proper=false;
       //To make sure the webpage doesn't annoy the user with the same message over and over again
       break;
     }
    }
  }
   if(lastName.length==0)
  {
   alert("You didn't put in your last name.");
   proper=false;
  }
  else
  {
    for(var position=0; position<lastName.length; position++)
    {
      if(!IsALetter(lastName.charAt(0)))
      {
       alert("Your last name must only contain letters.");
       proper=false;
       break;//To make sure the webpage doesn't annoy the user with the same message over and over again
      }
    }
  }

  if(email.length==0)
  {
    alert("You didn't put in your e-mail address.");
    proper=false;
  }
  else
  {
   if(!IsALetter(email.charAt(0)))
   {
     alert("The first character of your e-mail address must be a letter.");
     proper=false;
   }
   //If the last character isn't a letter
   if(!IsALetter(email.charAt(email.length-1)))
   {
    alert("The last character of your e-mail address must be a letter.");
    proper=false;
   }
   if(email.indexOf("@")<1)
   {
     alert("Your e-mail address must contain an at sign and it must be after the first character.");
     proper=false;
   }
   if(email.indexOf(".")<1)
   {
     alert("Your e-mail address must contain an at sign and it must be after the first character.");
     proper=false;
   }
   //Makes sure the e-mail address doesn't yet exist
   var currentEmailNumber=1;
   while(localStorage.getItem("email"+currentEmailNumber)!=null){
      if(localStorage.getItem("email"+currentEmailNumber)==email){
        alert("The e-mail address "+email+" already exists.");
        proper=false;
        break;
      }
      currentEmailNumber++;
   }
   //Makes sure the at sign is before the last period
   if(email.indexOf("@")>email.lastIndexOf("."))
   {
     alert("The at sign must be before the last period for your e-mail address.");
     proper=false;
   }
   //Makes sure there's only one at sign
   if(email.indexOf("@")<email.lastIndexOf("@"))
   {
    alert("Your e-mail address must only contain one at sign.");
    proper=false;
   }
  }
  
  if(password.length==0){
    alert("You didn't put in what you want your password to be.");
    proper=false;
  }
  else{ 
    if(password!=confirmedPassword){
     alert("Your password doesn't match it's confirmation.");
     proper=false;
    }
	if(!PasswordHasEnoughUniqueCharacters(password)){
		 alert("Your password must have at least 5 different characters.");
		 proper=false;
	}
  }
   if(username.length==0){
     alert("You didn't put in what you want your username to be.");
     proper=false;
     
  }
  else{
    var currentAccountNumber=1;
    while(localStorage.getItem("username"+currentAccountNumber)!=null){
      if(localStorage.getItem("username"+currentAccountNumber)==username){
         alert("The username "+username+" already exists.");
         proper=false;
         //Exits the loop once done
         break;
      }
      currentAccountNumber++;
   }

  }
  if(!SecurityQuestionsAreDifferent(securityQuestion1, securityQuestion2)){
	  alert("The first security question and the second security question are the same.");
	  proper=false;
  }
  if(securityQuestion1.length==0){
     alert("You didn't put in your first security question.");
     proper=false;
  }
  if(securityAnswer1.length==0){
    alert("You didn't put in your first security answer.");
    proper=false;
  }
  if(securityQuestion2.length==0){
     alert("You didn't put in your second security question.");
     proper=false;
  }
  if(securityAnswer2.length==0){
     alert("You didn't put in your second security answer.");
     proper=false;
  }
  if(proper) 
  {//Adds the data into the array
   localStorage.setItem("firstName"+(firstNames.length+1), firstName);
   localStorage.setItem("lastName"+(lastNames.length+1), lastName);
   localStorage.setItem("email"+(emails.length+1), email);
   localStorage.setItem("username"+(usernames.length+1), username);
 
   localStorage.setItem("password"+(passwords.length+1), password);
   localStorage.setItem("debt"+(debts.length+1), 0);
   localStorage.setItem("firstSecurityQuestion"+(securityQuestions1.length+1), securityQuestion1);
   localStorage.setItem("secondSecurityQuestion"+(securityQuestions2.length+1), securityQuestion2);
   localStorage.setItem("firstSecurityAnswer"+(securityAnswers1.length+1), securityAnswer1);
   localStorage.setItem("secondSecurityAnswer"+(securityAnswers2.length+1), securityAnswer2);
  
   alert("Your account was created.");
   accountNumber++;
 }
 return proper;
}
function SignIn(form){
   var username=form.UserName.value;
   var password=form.PassWord.value;
   for(var position=0; position<usernames.length; position++){
     if(username==usernames[position]&&password==passwords[position]){
       sessionStorage.setItem("account", (position+1)); 
       return true;
     }
   }
   alert("The account with both the username and password you've put in doesn't exist.");
   return false;
}
function SignOut(){
   sessionStorage.removeItem("account");
}