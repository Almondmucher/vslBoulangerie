document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  ['year','year2','year3'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn=>{
    btn.addEventListener('click', function(){
      const nav = this.nextElementSibling;
      if(!nav) return;
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });
  });
});
