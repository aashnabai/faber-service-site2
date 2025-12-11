
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var a = q.nextElementSibling;
      if(!a) return;
      var open = a.style.display === 'block';
      document.querySelectorAll('.faq-a').forEach(function(x){ x.style.display = 'none'; });
      if(!open) a.style.display = 'block';
    });
  });
});