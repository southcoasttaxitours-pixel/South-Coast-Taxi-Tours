const nav=document.querySelector('.navlinks');
const menu=document.querySelector('.menu');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const light=document.querySelector('.lightbox');
document.querySelectorAll('[data-lightbox]').forEach(x=>x.addEventListener('click',e=>{e.preventDefault();const img=light.querySelector('img');img.src=x.getAttribute('href');light.classList.add('open')}));
if(light) light.addEventListener('click',()=>light.classList.remove('open'));
const form=document.querySelector('[data-whatsapp-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const lines=[`Hello South Coast Taxi & Tours!`,`Name: ${fd.get('name')||''}`,`WhatsApp: ${fd.get('phone')||''}`,`Email: ${fd.get('email')||''}`,`Service: ${fd.get('service')||''}`,`Travel dates: ${fd.get('dates')||''}`,`Guests: ${fd.get('guests')||''}`,`Message: ${fd.get('message')||''}`];window.open('https://wa.me/94710123889?text='+encodeURIComponent(lines.join('\n')),'_blank')})}
const year=new Date().getFullYear();document.querySelectorAll('[data-year]').forEach(x=>x.textContent=year);
