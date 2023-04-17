function Validate()
{
   let username=document.getElementById("username").value;
   let password1=document.getElementById("password").value;
   let mymail=document.getElementById("email").value;
           let attherate=mymail.indexOf("@");
           let atthedot=mymail.lastIndexOf(".");

   
   if (username== "null" || username == "" )
          {
             alert( "enter username");
             return false;
          }

   if ( password1.length<6)     
          {
            alert( "enter at lest 6 charcters for password")
                            return false;
          }

    if (attherate<1 || atthedot<attherate+3 || atthedot>=mymail.length)
                  {
                     alert( "enter correct email");
                     return false;
                  }


 }  

 
