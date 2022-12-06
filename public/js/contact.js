
 function sendEmail(){
    Email.send({                                                                             
    Host : "smtp.elasticemail.com",
    Username : "ankitk5620@gmail.com",
    Password : "8EEF1F6140E13F606DA9464B7EB3D0BDAB4F",
    To : 'ankitk5620@gmail.com',
    From : document.getElementById("ankitk5620@gmail.com").value,
    Subject : "New Contact Form Enquriy",
    Body : "Name:"+ document.getElementById("name").value
    + "<br> Email"+ document.getElementById("email").value
   + "<br> Message" + document.getElementById("message").value,
}).then(
  message => alert("Message send succesfully") 
);
 }

