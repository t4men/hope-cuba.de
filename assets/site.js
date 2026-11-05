"use strict";
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#mobile-nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.hidden=!open;});}
for(const f of document.querySelectorAll('[data-mailto-form]')){
 f.addEventListener('submit',(event)=>{
  event.preventDefault();
  if(!f.reportValidity())return;
  const d=new FormData(f),email=String(d.get('email')||'').trim(),name=String(d.get('name')||'').trim(),topic=String(d.get('topic')||'Hope Cuba'),msg=String(d.get('message')||'');
  const body=`Name: ${name}\nE-Mail: ${email}\nAnliegen: ${topic}\n\n${msg}`;
  window.location.href=`mailto:hope-cuba@outlook.com?subject=${encodeURIComponent('Hope Cuba: '+topic)}&body=${encodeURIComponent(body)}`;
 });
}
/* Financial payment data intentionally disabled until approved and verified. */
