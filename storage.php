<?php
  function StoreData($type){
	  //For local storage
	  $lastAccountNumber=$_GET["accountNumber"];
	  $data=$_GET[$type+];
	  $accountNumber=0;
	  if(isset($_GLOBAL["accountNumber"]))
		  $accountNumber=$_GLOBAL["accountNumber"];
	  $accountNumber++;
	  $_GLOBAL[$type+$accountNumber]=$data;
	  //Stores the new account number
	  $_GLOBAL["accountNumber"]=$accountNumber;
  }
  StoreData("FirstName");
  StoreData("LastName");
  StoreData("Email"];
  StoreData("Username");
  StoreData("Password");
  StoreData("FirstSecurityQuestion");
  StoreData("SecondSecurityQuestion");
  StoreData("FirstSecurityAnswer");
  StoreData("SecondSecurityAnswer");
  StoreData("Debt");
  StoreData("Weekly");
  StoreData("Monthly");
  StoreData("Yearly");
?>