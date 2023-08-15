const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_cvgo277';
   const templateID = 'template_52yzgcj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      
      alert('Your Message Has been Sent');
      location.reload();
    }, 
  
    
    (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
     
    });
});