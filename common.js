/* Shared helpers for links.html and socials.html. Needs links-data.js loaded first. */
(function(){
  const $=s=>document.querySelector(s);
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon=k=>window.LINK_ICONS[k]||window.LINK_ICONS.link;
  const isExt=u=>/^https?:/i.test(u);
  const safe=u=>/^(https?:|mailto:|tel:|\.\/|\/|#|[\w-]+\.html)/i.test(u)?u:'#'; // blocks javascript: urls
  const ext=u=>isExt(u)?' target="_blank" rel="noopener noreferrer"':'';
  const absUrl=p=>{try{return new URL(p,window.SITE.url).href}catch(e){return p}};

  function toast(t){const e=$('#toast');if(!e)return;e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2400)}

  function spotlight(sel,item){
    const el=$(sel);if(!el||!matchMedia('(hover:hover)').matches)return;
    el.addEventListener('pointermove',e=>{
      const a=e.target.closest(item);if(!a)return;
      const r=a.getBoundingClientRect();
      a.style.setProperty('--x',(e.clientX-r.left)+'px');a.style.setProperty('--y',(e.clientY-r.top)+'px');
    });
  }

  function share(btn){
    if(!btn)return;
    btn.addEventListener('click',async()=>{
      const data={title:document.title,text:window.PROFILE.name+' | all my links',url:location.href};
      try{
        if(navigator.share){await navigator.share(data)}
        else{await navigator.clipboard.writeText(location.href);toast('Link copied')}
      }catch(err){
        if(err&&err.name==='AbortError')return;
        try{const t=document.createElement('textarea');t.value=location.href;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();toast('Link copied')}
        catch(e2){toast('Could not copy, copy the URL manually')}
      }
    });
  }

  function theme(){
    const root=document.documentElement,btn=$('#theme');
    const moon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    const sun='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
    const cur=()=>root.dataset.theme||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');
    const paint=()=>{if(!btn)return;const t=cur();btn.innerHTML=t==='dark'?sun:moon;btn.setAttribute('aria-label','Switch to '+(t==='dark'?'light':'dark')+' theme');
      const m=document.querySelector('meta[name=theme-color]');if(m)m.content=t==='dark'?'#0a0a0a':'#f4f1ec'};
    try{const s=localStorage.getItem('theme');if(s)root.dataset.theme=s}catch(e){}
    paint();
    if(btn)btn.addEventListener('click',()=>{const n=cur()==='dark'?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}paint()});
  }

  function seo(page){
    const P=window.PROFILE,url=absUrl(page);
    const c=document.head.querySelector('link[rel=canonical]'),o=document.head.querySelector('meta[property="og:url"]');
    if(c)c.href=url;if(o)o.content=url;
    const img=absUrl(window.SITE.ogImage||P.photo);
    document.head.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(m=>m.content=img);
    const ld=document.createElement('script');ld.type='application/ld+json';
    ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Person',name:P.name,url:absUrl('./'),image:absUrl(P.photo),description:P.bio,sameAs:window.SOCIALS.map(s=>s.url)});
    document.head.appendChild(ld);
  }

  window.App={$,esc,icon,safe,ext,toast,spotlight,share,theme,seo,visible:a=>a.filter(x=>!x.hidden)};
})();
