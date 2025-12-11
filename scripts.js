
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
// Toggle service card descriptions
document.querySelectorAll('.service-card').forEach(function(card){
  card.addEventListener('click', function(){
    var isOpen = card.classList.contains('open');
    document.querySelectorAll('.service-card').forEach(function(c){ c.classList.remove('open'); });
    if(!isOpen) card.classList.add('open');
  });
});

// Page transition: fade-out then navigate
document.querySelectorAll('a').forEach(function(a){
  // only apply to internal nav links
  var href = a.getAttribute('href');
  if(!href) return;
  var isInternal = href.indexOf('#') === 0 || href.indexOf(location.origin) === 0 || (!href.startsWith('http') && !a.target);
  if(isInternal){
    a.addEventListener('click', function(e){
      if(href.startsWith('http') && a.target === '_blank') return;
      // if it's an anchor to an id, allow default smooth scroll
      if(href.startsWith('#')) return;
      e.preventDefault();
      document.querySelectorAll('.page-fade-enter').forEach(function(main){ main.classList.add('page-fade-exit'); main.classList.add('out'); });
      setTimeout(function(){ window.location = href; }, 350);
    });
  }
});

// Next button smooth scroll
var nextBtn = document.querySelector('.next-btn');
if(nextBtn){
  nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    var target = document.querySelector('#services');
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
}

// reveal fade-in classes on load for content
window.addEventListener('load', function(){
  document.querySelectorAll('.page-fade-enter').forEach(function(m){ setTimeout(function(){ m.classList.add('in'); }, 20); });
});
