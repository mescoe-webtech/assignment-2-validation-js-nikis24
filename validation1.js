function validate(){
       let uname = stdreg.uname.value;
       let upwd = stdreg.upwd.value;
       let cupwd = stdreg.cupwd.value;
       let fname = stdreg.fname.value;
       let lname = stdreg.lname.value;
       let uemail = stdreg.uemail.value;
       let ucourse = stdreg.ucourse.selectedIndex;
       let umobno = stdreg.umno.value;
       let flag = false;
       let str = "";
       let efilter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(uname.trim()==""){
      flag=true;
      str +="  Username should not be blank!!\n";
}
if(upwd.trim()==""&&cupwd.trim()==""||upwd!=cupwd){
      flag=true;
      str +="  Password is blank or Does not match!!\n";
}
if(fname.trim()==""){
      flag = true;
      str +="  Firstname should not be blank!!\n"; 
}
if(lname.trim()==""){
      flag = true;
      str += "  Lastname should not be blank!!\n"; 
}
if(stdreg.gender[0].checked==false&&stdreg.gender[1].checked==false){
      flag=true;
      str +="  Gender is not selected!!\n"; 
}
if(!efilter.test(uemail)){
      flag=true;
      str +="  Email is not valid!!\n"; 
}
if(ucourse==0){
      flag=true;
      str +="  Course is not selected!!\n"; 
}
if(isNaN(umobno)||umobno.length<12){
      flag=true;
      str +="  Mobile Number is not valid!!\n"; 
}
if(flag){
     alert("Warning!!\n"+str);
     return false;
}
return true;
}