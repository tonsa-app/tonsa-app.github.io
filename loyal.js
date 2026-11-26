// بطاقة الولاء بشكل بطاقات المحفظة: تستخدمها تذكرة الطلب (/o/) وصفحة البطاقة (/l/)
// الأشكال من gen/art.py (نفسها في التطبيق)
const ART={"cup":[["r","a",16,8,68,13,6],["p","m",[21,21,79,21,71,95,29,95]],["p","a",[24,43,76,43,73,68,27,68]],["c","m",50,55.5,6]],"iced":[["r","m",47,0,7,26,3.5],["p","a",[20.0,34.0,20.5,29.8,21.8,25.8,24.0,22.0,27.0,18.6,30.7,15.6,35.0,13.2,39.7,11.4,44.8,10.4,50.0,10.0,55.2,10.4,60.3,11.4,65.0,13.2,69.3,15.6,73.0,18.6,76.0,22.0,78.2,25.8,79.5,29.8,80.0,34.0]],["r","a",16,32,68,8,4],["p","m",[21,40,79,40,71,96,29,96]],["p","a",[25,58,75,58,72,78,28,78]]],"burger":[["p","m",[10.0,48.0,10.6,42.1,12.4,36.4,15.4,31.0,19.4,26.1,24.3,22.0,30.0,18.6,36.3,16.1,43.1,14.5,50.0,14.0,56.9,14.5,63.7,16.1,70.0,18.6,75.7,22.0,80.6,26.1,84.6,31.0,87.6,36.4,89.4,42.1,90.0,48.0]],["c","a",36,30,2.6],["c","a",52,24,2.6],["c","a",64,33,2.6],["r","a",6,50,88,9,4.5],["r","a",12,62,76,12,6],["r","m",12,77,76,15,7]],"pizza":[["r","a",14,8,72,15,7.5],["p","m",[19,22,81,22,50,95]],["c","a",39,36,6.5],["c","a",61,38,6],["c","a",50,58,5.5]],"croissant":[["p","m",[5.6,59.6,7.8,53.0,10.8,46.8,14.8,41.1,19.4,36.1,24.7,31.9,30.6,28.5,36.8,26.0,43.3,24.5,50.0,24.0,56.7,24.5,63.2,26.0,69.4,28.5,75.3,31.9,80.6,36.1,85.2,41.1,89.2,46.8,92.2,53.0,94.4,59.6,74.4,69.1,73.0,65.9,71.2,62.9,68.9,60.2,66.3,57.8,63.4,55.7,60.3,54.1,57.0,53.0,53.5,52.2,50.0,52.0,46.5,52.2,43.0,53.0,39.7,54.1,36.6,55.7,33.7,57.8,31.1,60.2,28.8,62.9,27.0,65.9,25.6,69.1]],["p","a",[30,30,36,26,42,46,36,48]],["p","a",[47,22,54,22,53,44,47,44]],["p","a",[64,26,70,30,64,48,58,46]]],"donut":[["c","a",50,52,42],["p","m",[86.0,49.5,85.5,60.8,83.8,61.8,81.2,72.5,77.6,72.6,73.1,82.1,68.0,80.7,62.3,88.3,56.3,85.0,50.0,90.5,43.7,85.0,37.7,88.3,32.0,80.7,26.9,82.1,22.4,72.6,18.8,72.5,16.2,61.8,14.5,60.8,14.0,49.5,14.5,48.2,16.2,37.2,18.8,36.5,22.4,26.4,26.9,26.9,32.0,18.3,37.7,20.7,43.7,14.0,50.0,18.5,56.3,14.0,62.3,20.7,68.0,18.3,73.1,26.9,77.6,26.4,81.2,36.5,83.8,37.2,85.5,48.2,86.0,49.5]],["c","h",50,52,13],["r","a",30,30,9,4,2],["r","a",62,32,4,9,2],["r","a",68,58,9,4,2],["r","a",30,64,4,9,2],["r","a",46,76,9,4,2]],"icecream":[["p","a",[29,50,71,50,50,98]],["c","m",50,36,25],["c","m",33,50,8],["c","m",50,53,8],["c","m",67,50,8]],"car":[["p","m",[24,48,35,26,65,26,78,48]],["p","h",[31,46,39,31,48,31,48,46]],["p","h",[52,46,52,31,61,31,71,46]],["r","m",6,44,88,28,12],["c","a",27,72,12],["c","a",73,72,12],["c","h",27,72,4.5],["c","h",73,72,4.5]],"drop":[["p","m",[50,4,75.4,45.2,78.2,50.1,80.1,55.4,80.9,61.0,80.8,66.6,79.6,72.1,77.5,77.3,74.5,82.0,70.6,86.2,66.1,89.5,61.0,92.0,55.6,93.5,50.0,94.0,44.4,93.5,39.0,92.0,33.9,89.5,29.4,86.2,25.5,82.0,22.5,77.3,20.4,72.1,19.2,66.6,19.1,61.0,19.9,55.4,21.8,50.1,24.6,45.2]],["c","a",39,66,6]],"sparkle":[["p","m",[44.0,16.0,50.4,49.6,84.0,56.0,50.4,62.4,44.0,96.0,37.6,62.4,4.0,56.0,37.6,49.6]],["p","a",[80.0,3.0,83.2,16.8,97.0,20.0,83.2,23.2,80.0,37.0,76.8,23.2,63.0,20.0,76.8,16.8]]],"star":[["p","m",[50.0,8.0,61.8,37.8,93.7,39.8,69.0,60.2,77.0,91.2,50.0,74.0,23.0,91.2,31.0,60.2,6.3,39.8,38.2,37.8]]],"heart":[["p","m",[50.0,35.4,50.1,34.5,50.7,32.1,52.2,28.6,55.0,24.7,59.0,21.0,64.1,18.4,70.0,17.3,76.0,18.1,81.5,20.6,86.0,24.8,89.0,30.2,90.0,36.4,89.0,43.0,86.0,49.6,81.5,56.1,76.0,62.2,70.0,68.0,64.1,73.4,59.0,78.4,55.0,82.9,52.2,86.7,50.7,89.6,50.1,91.5,50.0,92.1,49.9,91.5,49.3,89.6,47.8,86.7,45.0,82.9,41.0,78.4,35.9,73.4,30.0,68.0,24.0,62.2,18.5,56.1,14.0,49.6,11.0,43.0,10.0,36.5,11.0,30.2,14.0,24.8,18.5,20.6,24.0,18.1,30.0,17.3,35.9,18.4,41.0,21.0,45.0,24.7,47.8,28.6,49.3,32.1,49.9,34.5]]]};
const LoyalCard=(()=>{
  const hex=h=>{const v=parseInt(h.slice(1),16);return[(v>>16)&255,(v>>8)&255,v&255]};
  const mix=(a,b,t)=>{const x=hex(a),y=hex(b);return'#'+x.map((c,i)=>Math.round(c+(y[i]-c)*t).toString(16).padStart(2,'0')).join('')};
  const lum=h=>{const[r,g,b]=hex(h);return(0.299*r+0.587*g+0.114*b)/255};
  function palette(bg){
    bg=/^#[0-9a-fA-F]{6}$/.test(bg||'')?bg:'#121715';
    const light=lum(bg)>0.6;
    const m=light?'#1F1A17':'#F7F3EA', a=light?'#A97A30':'#D6B77B';
    const ink=light?'#1A1715':'#FFFFFF';
    // لو الذهبي ما يبان على لون البطاقة (أحمر، ذهبي) نكتب العناوين بلون الكلام
    const lr=h=>{const c=hex(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]};
    const cr=(x,y)=>{const A=lr(x),B=lr(y);return(Math.max(A,B)+.05)/(Math.min(A,B)+.05)};
    const label=cr(a,bg)>=3?a:mix(ink,bg,0.22);
    return{bg,light,m,a,ink,label,dim:mix(bg,light?'#000000':'#FFFFFF',light?0.09:0.1)};
  }
  function glyph(icon,on,p,size){
    const parts=ART[icon]||ART.cup; let s='';
    for(const q of parts){
      const role=q[1], fill=role==='h'?p.bg:(on?(role==='a'?p.a:p.m):p.dim);
      if(q[0]==='p'){let d='';for(let i=0;i<q[2].length;i+=2)d+=(i?'L':'M')+q[2][i]+' '+q[2][i+1];s+=`<path d="${d}Z" fill="${fill}"/>`}
      else if(q[0]==='c')s+=`<circle cx="${q[2]}" cy="${q[3]}" r="${q[4]}" fill="${fill}"/>`;
      else s+=`<rect x="${q[2]}" y="${q[3]}" width="${q[4]}" height="${q[5]}" rx="${q[6]}" fill="${fill}"/>`;
    }
    return `<svg viewBox="-2 -2 104 104" width="${size}" height="${size}" aria-hidden="true">${s}</svg>`;
  }
  const esc=t=>String(t??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  // c: نتيجة get_card أو loyalty_join. o: {ar, wash, prev}
  function html(c,o){
    const cfg=c.cfg, goal=cfg.goal, n=Math.min(c.stamps,goal), p=palette(cfg.color), ar=o.ar;
    const D=x=>ar?String(x).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]):String(x);
    const rows=goal<=6?1:goal<=14?2:3, per=Math.ceil(goal/rows);
    const size=Math.min(52,Math.floor(300/per)-6);
    let grid='';
    for(let r=0,i=0;r<rows;r++){
      grid+='<div class="lc-row">';
      for(let k=0;k<per&&i<goal;k++,i++) grid+=`<span class="lc-st${i<n&&o.prev!=null&&i>=o.prev?' lc-pop':''}">${glyph(cfg.icon,i<n,p,size)}</span>`;
      grid+='</div>';
    }
    const shop=c.shop||{}, reward=ar?cfg.reward_ar:cfg.reward_en, left=goal-n, wash=o.wash??!!shop.wash;
    const logo=shop.logo&&/^data:image\//.test(shop.logo)?`<img class="lc-logo" src="${esc(shop.logo)}" alt="">`:`<span class="lc-logo" style="background:${p.a}">${glyph(cfg.icon,true,{...p,m:p.bg,a:p.bg},22)}</span>`;
    const unit=wash?['غسلة','غسلتين','غسلات']:['طلب','طلبين','طلبات'];
    const arCount=left===1?unit[0]+' واحد'.replace(' واحد',wash?' وحدة':' واحد'):left===2?unit[1]:`${D(left)} ${left<11?unit[2]:unit[0]}`;
    const leftTxt=c.rewards>0?(ar?'مكافأتك جاهزة 🎁':'Reward ready 🎁'):(ar?arCount:`${left} ${wash?(left===1?'wash':'washes'):(left===1?'order':'orders')}`);
    let qr='';
    if(o.qr&&c.member&&window.qrcode){const q=qrcode(0,'M');q.addData('TONSA:'+c.member);q.make();qr=`<div class="lc-qr">${q.createSvgTag({cellSize:4,margin:0,scalable:true})}<b>${esc(c.member)}</b></div>`;}
    return `<div class="lc" style="--lc-bg:${p.bg};--lc-ink:${p.ink};--lc-label:${p.label}">
      <div class="lc-top">${logo}<b class="lc-name">${esc(shop.name||'')}</b><div class="lc-f lc-end"><small>${ar?'الأختام':'Stamps'}</small><span>${ar?`${D(n)} من ${D(goal)}`:`${n} of ${goal}`}</span></div></div>
      <div class="lc-grid" role="img" aria-label="${ar?`${n} أختام من ${goal}`:`${n} of ${goal} stamps`}">${grid}</div>
      <div class="lc-fields"><div class="lc-f"><small>${ar?'المكافأة':'Reward'}</small><span>${esc(reward)}</span></div><div class="lc-f lc-end"><small>${c.rewards>0?(ar?'عندك':'You have'):(ar?'باقي':'Left')}</small><span>${leftTxt}</span></div></div>
      ${c.name?`<div class="lc-fields"><div class="lc-f"><small>${ar?'الاسم':'Name'}</small><span>${esc(c.name)}</span></div></div>`:''}
      ${qr}
    </div>`;
  }
  const css=`.lc{direction:inherit;width:100%;max-width:340px;background:var(--lc-bg);color:var(--lc-ink);border-radius:20px;padding:18px 18px 20px;box-shadow:0 14px 34px rgba(0,0,0,.22);font-family:inherit;text-align:start}
.lc-top{display:flex;align-items:center;gap:10px}.lc-logo{width:34px;height:34px;border-radius:50%;object-fit:cover;display:grid;place-items:center;flex:none}
.lc-name{font-size:19px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lc-f{display:flex;flex-direction:column;line-height:1.25}.lc-f small{color:var(--lc-label);font-size:12px;font-weight:600}.lc-f span{font-size:19px;font-variant-numeric:tabular-nums}
.lc-end{text-align:end}.lc-grid{margin:18px 0 20px;display:flex;flex-direction:column;gap:8px}
.lc-row{display:flex;justify-content:center;gap:8px}.lc-st{display:grid;place-items:center}.lc-st svg{display:block}
.lc-pop{animation:lcpop .6s cubic-bezier(.3,1.6,.5,1) both}@keyframes lcpop{0%{transform:scale(.2) rotate(-20deg);opacity:0}100%{transform:none;opacity:1}}
.lc-fields{display:flex;justify-content:space-between;gap:12px;margin-top:4px}
.lc-qr{margin:22px auto 0;background:#fff;border-radius:12px;padding:12px 12px 6px;width:52%;text-align:center;color:#111}
.lc-qr svg{display:block;width:100%;height:auto}.lc-qr b{display:block;font:500 15px/1.6 ui-monospace,Menlo,monospace;letter-spacing:1px;direction:ltr}
@media (prefers-reduced-motion:reduce){.lc-pop{animation:none}}`;
  return{html,css,palette,glyph};
})();
