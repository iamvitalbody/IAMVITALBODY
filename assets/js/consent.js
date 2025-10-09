(function(){
  const KEY='iamvitalbody_consent_v1';
  const bar=document.getElementById('cookiebar');
  const acceptBtn=document.getElementById('cookie-accept');
  const rejectBtn=document.getElementById('cookie-reject');
  const loadScripts=()=>{
    // Añade aquí scripts analíticos o chat solo tras consentimiento
  };
  const saved=localStorage.getItem(KEY);
  if(saved==='accepted'){ loadScripts(); }
  if(!saved){ bar.hidden=false; }
  acceptBtn?.addEventListener('click',()=>{ localStorage.setItem(KEY,'accepted'); bar.hidden=true; loadScripts(); });
  rejectBtn?.addEventListener('click',()=>{ localStorage.setItem(KEY,'rejected'); bar.hidden=true; });
})();