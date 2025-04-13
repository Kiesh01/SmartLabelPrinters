
function validate(){
	var name= document.getElementById('Rectangle_94').value;
	var company=document.getElementById('Rectangle_107').value;
	var email= document.getElementById('Rectangle_106').value;
	var empy = document.getElementById('empy');
	var empy2=document.getElementById('empy2');
	var empy3=document.getElementById('empy3');

	var email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


      if(name.length < 5){
      	text = "Enter Valid Name";
      	empy.innerHTML=text;
      	 $("#Submit").off('click');
      	
      }
      else if(name.value ===''){
      	text = "Enter Valid Name";
      	empy.innerHTML=text;
      	 $("#Submit").off('click');
      }
      else if(email.length < 5){
      	text3 = "Please Enter Valid email";
      	empy2.innerHTML=text3;
      	 $("#Submit").off('click');
      	
      }
      else if(email.value ===''){
      	text3 = "Please Enter Valid email";
      	empy2.innerHTML=text3;
      	 $("#Submit").off('click');
      }

     else if(!email.match(email_check)){
      	text3 = "Invalid email";
      	empy2.innerHTML=text3;
      	 $("#Submit").off('click');
      }
       else if(company.value===''){
        text2 = "Enter Valid Company Name";
      	empy3.innerHTML=text2;
      	 $("#Submit").off('click');
      }
      else if(company.length < 5){
      	text2 = "Enter Valid Company Name";
      	empy3.innerHTML=text2;
      	 $("#Submit").off('click');
      }
     
     
     else{
     	var params = {
     	from_name : document.getElementById('Rectangle_94').value,
		company_id : document.getElementById('Rectangle_107').value,
		email_id : document.getElementById('Rectangle_106').value,
		message : document.getElementById('Rectangle_37').value
	}
	emailjs.send("service_mc3sukp","template_h446od2", params).then(function(res){
		alert("Enquiry Successfully Received!");
		location.reload();
	})
}
	return false;
     }


function feedback(){
	var nam= document.getElementById('Rectangle_z94').value;
	var compan=document.getElementById('Rectangle_z107').value;
	var empy = document.getElementById('empy');
	var empy2=document.getElementById('empy2');


	


      if(nam.length < 5){
      	text = "Enter Valid Name";
      	empy.innerHTML=text;
      	 $("#Submit").off('click');
      	
      }
      else if(nam.value ===''){
      	text = "Enter Valid Name";
      	empy.innerHTML=text;
      	 $("#Submit").off('click');
      }
       else if(compan.value===''){
        text2 = "Enter Valid Company Name";
      	empy2.innerHTML=text2;
      	 $("#Submit").off('click');
      }
      else if(compan.length < 5){
      	text2 = "Enter Valid Company Name";
      	empy2.innerHTML=text2;
      	 $("#Submit").off('click');
      }
     
     else{
     	var params = {
     	from_name : document.getElementById('Rectangle_z94').value,
		company_id : document.getElementById('Rectangle_z107').value,
		message : document.getElementById('Rectangle_z37').value
	}
	emailjs.send("service_mc3sukp","template_h446od2", params).then(function(res){
		alert("Thank you for your feedback.");
		location.reload();
	})
}
	return false;
     }
  
  function news(){
	var email = document.getElementById('Rectangle_9').value;
	var empyr = document.getElementById('empyr');
	


	var email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


     if(email.length < 5){
      	text3 = "Please Enter Valid email";
      	empyr.innerHTML=text3;
      	 $("subscribe_").off('click');
      	
      }
      else if(email.value ===''){
      	text3 = "Please Enter Valid email";
      	empyr.innerHTML=text3;
      	 $("subscribe_").off('click');
      }

     else if(!email.match(email_check)){
      	text3 = "Invalid email";
      	empyr.innerHTML=text3;
      	 $("subscribe_").off('click');
      }
     
     else{
     	var params = {
     
		email_id : document.getElementById('Rectangle_9').value,
		
	}
	emailjs.send("service_mc3sukp","template_sgvg0rm", params).then(function(res){
		alert("Success!"+ res.status);
		location.reload();
	})
}
	return false;
     }
