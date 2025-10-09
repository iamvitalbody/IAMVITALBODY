
(function(){
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(f=>{
    f.addEventListener('submit', (e)=>{
      const consent = f.querySelector('input[name="consent"]');
      const honey = f.querySelector('input[name="website"]');
      if(honey && honey.value){ e.preventDefault(); return; }
      if(consent && !consent.checked){
        e.preventDefault();
        alert('Para continuar, acepta la Política de Privacidad (RGPD).');
      }
    });
  });
})();
