
var userClasses="";
var dayList=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hourList=["9AM-10AM", "10AM-11AM", "11AM-12PM", "12PM-1PM", "1PM-2PM", "2PM-3PM", "3PM-4PM", "4PM-5PM"];
var tries=0;
var maxTries=5;
var accountNumber=sessionStorage.getItem("account");
alert(localStorage.getItem("debt"+accountNumber));
function IsALetter(character)
{
  if(character>="a"&&character<="z"||character>="A"&&character<="Z")
	  return true;
  //If the condition is false
  return false;
}
function IsADigit(character)
{
  if(character>="0"&&character<="9")
    return true;
  
  return false;
}
//Isn't called if the choice selected is none
function WhichJob(form, job)
{
  switch(form.job.selectedIndex)
  {
   case 1: return "Volleyball Coach"; break;
   case 2: return "Basketball Coach"; break;
   case 3: return "Soccer Coach"; break;
   case 4: return "Exercise Coach"; break;
   case 5: return "Sweeper"; break;
   default: return "Equipment Handler";
  }
}

//This function does the same thing as the Validate function to the Job Application
function ValidateJob(form, job)
{ 
  var firstName=form.FirstName.value;
  var lastName=form.LastName.value;
  var yourEmail=form.EmailAddress.value;
  var yourPhoneNumber=form.YourPhoneNumber.value;
  var age=form.Age.value;
  //Address variables
  var address=form.Address.value;
  var zipCode=form.ZipCode.value;
  var city=form.City.value;
  var state=form.State.value;
  var country=form.Country.value;
  //Education variables
  var school=form.School.value;
  var schoolType=form.SchoolType.value;
  var schoolPhoneNumber=form.SchoolPhoneNumber.value;
  //Job Experience variables
  var company=form.Company.value;
  var jobTitle=form.Title.value;
  var companyAddress=form.CompanyAddress.value;
  var companyPhoneNumber=form.CompanyPhoneNumber.value;
  var responsibilities=form.tasks.value;
  var proper=true;
  var jobChoice;
  //Makes sure the user picked a job
  if(form.job.selectedIndex==0)
  {
    alert("You didn't pick a job.");
    proper=false;
  }
  else jobChoice=WhichJob(form, job);
  if(firstName.length==0)
  {
   alert("You didn't put in your first name.");
   proper=false;
  }
  for(var position=0; position<firstName.length; position++)
  {
   if(!IsALetter(firstName.charAt(position)))
   {
     alert("All the characters of your first name must be a letters.");
     proper=false;
     //To keep from annoying the user with the same message over and over again
     break;
   }
  }
  if(lastName.length==0)
  {
     alert("You didn't put in your last name.");
     proper=false;
  }
  for(var position=0; position<lastName.length; position++)
  {
    if(!IsALetter(lastName.charAt(position)))
    {
     alert("All the characters of your last name must be a letters.");
     proper=false;
     //To keep from annoying the user with the same message over and over again
     break;
    }
  }
   if(yourEmail.length==0)
   {
     alert("You didn't put in your e-mail address.");
     proper=false;
   }
   else
   {
    if(!IsALetter(yourEmail.charAt(0))) 
    {
      alert("The first character of your e-mail address must be a letter.");
      proper=false;
    }
    if(!IsALetter(yourEmail.charAt(yourEmail.length-1)))
    {
     alert("The last character of your e-mail address must be a letter.");
     proper=false;
    }
    if(yourEmail.indexOf("@")<1)
    {
      alert("Your e-mail address must contain at sign, and it can't be the first character or last character of it.");
      proper=false;
    }
    if(yourEmail.lastIndexOf(".")<1)
    {
      alert("Your e-mail address must contain a period, an it can't be the first character or the last character of it.");
      proper=false;
    }
    //Makes sure there's only one at sign
    if(yourEmail.indexOf("@")!=yourEmail.lastIndexOf("@"))
    {
      alert("Your e-mail address must contain only one at sign.");
      proper=false;
    }
  }
  if(isNaN(age))
  {
    alert("Your age must be a number.");
    proper=false;
  }
  if(age<0)
  {
   alert("Your age can't be less than 0.");
   proper=false;
  }
  if(age.length==0)
  {
    alert("You didn't put in your age.");
    proper=false;
  }
  if(address.length==0)
  {
    proper=false;
    alert("You didn't put in your home address.");
  }
  if(zipCode.length<5)
  {
   proper=false;
   alert("Your zip code must be at least 5 digits long.");
  }
  if(zipCode.length>0)
  {
   for(var position=0; position<zipCode.length; position++)
   {//Accepts dashes, in case of use of extended version of zip code
    if(!(IsADigit(zipCode.charAt(position))||zipCode.charAt(position)=='-'))
    {
      proper=false;
      alert("Your zip code can only contain numbers and a dash, in case of using your extended zip code.");
      //To keep from annoying the user with the same message over and over again
      break;
    } 
   }
  }
  if(city.length==0)
  {
    proper=false;
    alert("You didn't put in the city you live in.");
  }
  else
  {
    for(var position=0; position<city.length; position++)
    {//Accepts periods
     if(!(IsALetter(city.charAt(position))||city.charAt(position)=='.'))
     {
       proper=false;
       alert("Your city can only contain letters and periods.");
       //To keep from annoying the user with the same message over and over again
       break;
     }
    }
   }
   if(state.length==0)
  {
    proper=false;
    alert("You didn't put in the state you live in.");
  }
  else
  {
    for(var position=0; position<state.length; position++)
    {//Accepts periods
     if(!(IsALetter(state.charAt(position))||state.charAt(position)=='.'))
     {
       proper=false;
       alert("Your state can only contain letters and periods.");
       //To keep from annoying the user with the same message over and over again
       break;
     }
    }
   }
   if(country.length==0)
  {
    proper=false;
    alert("You didn't put in the country you live in.");
  }
  else
  {
    for(var position=0; position<country.length; position++)
    {//Accepts periods
     if(!(IsALetter(country.charAt(position))||country.charAt(position)=='.'))
     {
       proper=false;
       alert("Your country can only contain letters and periods.");
       //To keep from annoying the user with the same message over and over again
       break;
     }
    }
   }
  if(proper)
   alert("You've successfully applied for the "+jobChoice+" Job at Shorefront Y Gym.");
  return proper;
 }
function Match(username, password, position)
{
  if(username==usernames[position]&&password==passwords[position])
    return true;
  //If the condition is false
  return false;
}
function WelcomeUser(index)
{ 
  var welcoming;
  if(index==-1)
   welcoming="Failed to Sign In";
  else welcoming="Hello "+usernames[index-1/*Since index will be incremented in the FindAccount function*/]+".\n";
  return welcoming;
}
function AccountExists(username, password)
{
 var exists=false;
 for(var position=0; position<usernames.length; position++)
   if(Match(username, password, position))
      exists=true;
 return exists;
}
function FindAccount(username, password)
{//If the account is not found
 var account=-1;
 for(var position=0; position<usernames.length; position++)
   if(Match(username, password, position))
    account=position;
 return account+1;
}
function Evaluate(username, password)
{
  tries++;
  for(var position=0; position<10; position++)
  {
   if(usernames[position]==username)
   {
      if(passwords[position]==password)
        return 2;
      else
      {
        maxTries=10;
        return 1;
      }
   }
  }
  return 0;
}
function SignIn(form)
{
 var username=form.UserName.value;
 var password=form.PassWord.value;
 var account;
 var evaluation=Evaluate(username, password);
 switch(evaluation)
 {
   case 0: alert("The username you selected doesn't exist."); break;
   case 1: alert("You've put in the wrong password."); break;
  }
 if(AccountExists(username, password))
 {
  account=FindAccount(username, password);
   alert(WelcomeUser(account)+"You've successfully signed into Account # "+account+".");
   return true;
 }
 alert("The account with both the username and password you put in doesn't exist.\nIf you know any account you can log into, you can find your account on the Find Account page.");
 return false;
}
function FindDay(radioButtons)
{
  for(var position=0; position<8; position++)
   if(radioButtons[position].checked)
     return position;
}
//Is only called if the user pays for a certain time period
function TimeFee(form, paymentType, money)
{
   switch(form.paymentType.selectedIndex)
   {
     case 1: money=50;
     break;
     case 2: money=300;
     break;
     //If the user chooses the per year choice
     default: money=2000;
   }
   return money;
}
function TimeCombineData(day, hour)
{
  var data;
  data=day+": "+hour+"\n";
  return data;
}
function ClassCombineData(day, hour, money)
{
  var data;
  data=day+": "+hour+": $"+money+"\n";
  return data;
}
 function ShowFee(form, radioButtons, checkboxes, paymentType)
{
	
 var dayIndex=FindDay(radioButtons);
 var fee=new ClassCombineData(dayList[dayIndex], hourList[0], 0);
 if(form.paymentType.selectedIndex==0)
  {
    fee.money=0;
    for(var position=0; position<8; position++)
      if(checkboxes[position].checked)
         fee.money+=20;
  }
  else
     fee.money=TimeFee(form, paymentType, fee.money);
 
document.getElementById("debt").innerHTML="You now owe $"+localStorage.getItem("debt"+accountNumber)+".";
}

function AddClasses(form, radioButtons, checkboxes, paymentType)
{ /*var classData;
  var money=localStorage.getItem("debt"+accountNumber);
  var userInfo="";
  var dayIndex=FindDay(radioButtons);
  if(form.paymentType.selectedIndex==0)
  {
   for(var position=0; position<checkboxes.length; position++){
     if(checkboxes[position].checked)
     {  
        money+=20;
        classData=ClassCombineData(dayList[dayIndex], hourList[position], money);
        userInfo+=classData;
        
     }
    }
  }
  else 
  {
    money=TimeFee(form, paymentType, money);
   //Is used to add necessary data to be displayed
  for(var position=0; position<checkboxes.length; position++)
   { if(checkboxes[position].checked)
     {
      classData=TimeCombineData(dayList[dayIndex], hourList[position]);
      userInfo+=classData;
     } 
   }
 
 }*/

 ShowFee();
 /*$(function(){
            $.extend({
              updateDebt: function(paymentType, addedDebt, daysRequired) {
                   var accountNumber=sessionStorage.getItem("account");
				   var lastDate;
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
				   var daysPassed=today.getMilliseconds()-lastDate.getMilliseconds();
				   if(daysPassed>=daysRequired*3600000){
                  
                   currentDebt+=addedDebt;
                   localStorage.setItem("debt"+accountNumber, currentDebt);
				   }
                 
                }
            });
});*/
/*Charge(form, radioButtons, checkboxes, paymentType);

 switch(paymentType.selectedIndex){
	  case 0: alert(fee.money); $.updateDebt(null, fee.money, 0); break;
	  case 1: $.updateDebt("Weekly", 200, 7); break;
	  case 2: $.updateDebt("Monthly", 2000, 31); break;
	  default: $.updateDebt("Yearly", 24000, 365);
  }*/
}
function Charge(form, radioButtons, checkboxes, paymentType){
	var dayIndex=FindDay(radioButtons);
 var fee=new ClassCombineData(dayList[dayIndex], hourList[0], 0);
 if(form.paymentType.selectedIndex==0)
  { 
    fee.money=0;
    for(var position=0; position<8; position++)
      if(checkboxes[position].checked)
         fee.money+=20;
  }
  else
     fee.money=TimeFee(form, paymentType, fee.money);
}

function AllowPayment(){
	//So there won't be multiple copies 
	document.getElementById("allowPayment").disabled=true;
	var payment=document.createElement("form");
	//So it can be removed
	payment.id="payment";
	payment.innerHTML="<input type='number' id='payAmount'/><button type='button' onclick='Pay()'>Pay</button>";
	document.body.appendChild(payment);
	
}
function Pay(){
	var payment=document.getElementById("payAmount").value;
	var newDebt=parseFloat(localStorage.getItem("debt"+accountNumber))-parseFloat(payment);
	localStorage.setItem("debt"+accountNumber, newDebt);
	document.body.removeChild(document.getElementById("payment"));
	//Enables the payment button 
	document.getElementById("allowPayment").disabled=false;
	if(newDebt<0){
		alert("Here's $"+(newDebt*-1)+" in change.");
		//Sets amount owed to 0
		localStorage.setItem("debt"+accountNumber, 0);
	}
	document.getElementById("debt").innerHTML="You now owe $"+localStorage.getItem("debt"+accountNumber);
}