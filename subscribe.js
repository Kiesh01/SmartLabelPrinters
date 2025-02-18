function subscribe(){
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
