
// Small client-side enhancements
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit', function(e){
      // basic validation
      const phone = form.querySelector('input[name=phone]').value.trim();
      if(phone.length < 7){
        e.preventDefault();
        alert('Please enter a valid phone number');
      }
    });
  }
});
