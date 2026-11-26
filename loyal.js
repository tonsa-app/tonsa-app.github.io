// بطاقة الولاء: تستخدمها تذكرة الطلب (/o/) وصفحة البطاقة (/l/) والملصق وبوست انستقرام
// الأشكال من ci/stamp-art.py (نفسها في التطبيق)
const ART={"cup":[["r","a",16,8,68,13,6],["p","m",[21,21,79,21,71,95,29,95]],["p","a",[24,43,76,43,73,68,27,68]],["c","m",50,55.5,6]],"iced":[["r","m",47,0,7,26,3.5],["p","a",[20.0,34.0,20.5,29.8,21.8,25.8,24.0,22.0,27.0,18.6,30.7,15.6,35.0,13.2,39.7,11.4,44.8,10.4,50.0,10.0,55.2,10.4,60.3,11.4,65.0,13.2,69.3,15.6,73.0,18.6,76.0,22.0,78.2,25.8,79.5,29.8,80.0,34.0]],["r","a",16,32,68,8,4],["p","m",[21,40,79,40,71,96,29,96]],["p","a",[25,58,75,58,72,78,28,78]]],"burger":[["p","m",[10.0,48.0,10.6,42.1,12.4,36.4,15.4,31.0,19.4,26.1,24.3,22.0,30.0,18.6,36.3,16.1,43.1,14.5,50.0,14.0,56.9,14.5,63.7,16.1,70.0,18.6,75.7,22.0,80.6,26.1,84.6,31.0,87.6,36.4,89.4,42.1,90.0,48.0]],["c","a",36,30,2.6],["c","a",52,24,2.6],["c","a",64,33,2.6],["r","a",6,50,88,9,4.5],["r","a",12,62,76,12,6],["r","m",12,77,76,15,7]],"pizza":[["r","a",14,8,72,15,7.5],["p","m",[19,22,81,22,50,95]],["c","a",39,36,6.5],["c","a",61,38,6],["c","a",50,58,5.5]],"croissant":[["p","m",[5.6,59.6,7.8,53.0,10.8,46.8,14.8,41.1,19.4,36.1,24.7,31.9,30.6,28.5,36.8,26.0,43.3,24.5,50.0,24.0,56.7,24.5,63.2,26.0,69.4,28.5,75.3,31.9,80.6,36.1,85.2,41.1,89.2,46.8,92.2,53.0,94.4,59.6,74.4,69.1,73.0,65.9,71.2,62.9,68.9,60.2,66.3,57.8,63.4,55.7,60.3,54.1,57.0,53.0,53.5,52.2,50.0,52.0,46.5,52.2,43.0,53.0,39.7,54.1,36.6,55.7,33.7,57.8,31.1,60.2,28.8,62.9,27.0,65.9,25.6,69.1]],["p","a",[30,30,36,26,42,46,36,48]],["p","a",[47,22,54,22,53,44,47,44]],["p","a",[64,26,70,30,64,48,58,46]]],"donut":[["c","a",50,52,42],["p","m",[86.0,49.5,85.5,60.8,83.8,61.8,81.2,72.5,77.6,72.6,73.1,82.1,68.0,80.7,62.3,88.3,56.3,85.0,50.0,90.5,43.7,85.0,37.7,88.3,32.0,80.7,26.9,82.1,22.4,72.6,18.8,72.5,16.2,61.8,14.5,60.8,14.0,49.5,14.5,48.2,16.2,37.2,18.8,36.5,22.4,26.4,26.9,26.9,32.0,18.3,37.7,20.7,43.7,14.0,50.0,18.5,56.3,14.0,62.3,20.7,68.0,18.3,73.1,26.9,77.6,26.4,81.2,36.5,83.8,37.2,85.5,48.2,86.0,49.5]],["c","h",50,52,13],["r","a",30,30,9,4,2],["r","a",62,32,4,9,2],["r","a",68,58,9,4,2],["r","a",30,64,4,9,2],["r","a",46,76,9,4,2]],"icecream":[["p","a",[29,50,71,50,50,98]],["c","m",50,36,25],["c","m",33,50,8],["c","m",50,53,8],["c","m",67,50,8]],"car":[["p","m",[24,48,35,26,65,26,78,48]],["p","h",[31,46,39,31,48,31,48,46]],["p","h",[52,46,52,31,61,31,71,46]],["r","m",6,44,88,28,12],["c","a",27,72,12],["c","a",73,72,12],["c","h",27,72,4.5],["c","h",73,72,4.5]],"drop":[["p","m",[50,4,75.4,45.2,78.2,50.1,80.1,55.4,80.9,61.0,80.8,66.6,79.6,72.1,77.5,77.3,74.5,82.0,70.6,86.2,66.1,89.5,61.0,92.0,55.6,93.5,50.0,94.0,44.4,93.5,39.0,92.0,33.9,89.5,29.4,86.2,25.5,82.0,22.5,77.3,20.4,72.1,19.2,66.6,19.1,61.0,19.9,55.4,21.8,50.1,24.6,45.2]],["c","a",39,66,6]],"sparkle":[["p","m",[44.0,16.0,50.4,49.6,84.0,56.0,50.4,62.4,44.0,96.0,37.6,62.4,4.0,56.0,37.6,49.6]],["p","a",[80.0,3.0,83.2,16.8,97.0,20.0,83.2,23.2,80.0,37.0,76.8,23.2,63.0,20.0,76.8,16.8]]],"star":[["p","m",[50.0,8.0,61.8,37.8,93.7,39.8,69.0,60.2,77.0,91.2,50.0,74.0,23.0,91.2,31.0,60.2,6.3,39.8,38.2,37.8]]],"gift":[["r","m",12,40,76,56,6],["r","a",6,28,88,16,5],["r","a",44,28,12,68,2],["c","a",38,22,10],["c","a",62,22,10],["c","h",38,22,4],["c","h",62,22,4]],"heart":[["p","m",[50.0,35.4,50.1,34.5,50.7,32.1,52.2,28.6,55.0,24.7,59.0,21.0,64.1,18.4,70.0,17.3,76.0,18.1,81.5,20.6,86.0,24.8,89.0,30.2,90.0,36.4,89.0,43.0,86.0,49.6,81.5,56.1,76.0,62.2,70.0,68.0,64.1,73.4,59.0,78.4,55.0,82.9,52.2,86.7,50.7,89.6,50.1,91.5,50.0,92.1,49.9,91.5,49.3,89.6,47.8,86.7,45.0,82.9,41.0,78.4,35.9,73.4,30.0,68.0,24.0,62.2,18.5,56.1,14.0,49.6,11.0,43.0,10.0,36.5,11.0,30.2,14.0,24.8,18.5,20.6,24.0,18.1,30.0,17.3,35.9,18.4,41.0,21.0,45.0,24.7,47.8,28.6,49.3,32.1,49.9,34.5]]]};
const LoyalCard=(()=>{
  const hex=h=>{const v=parseInt(h.slice(1),16);return[(v>>16)&255,(v>>8)&255,v&255]};
  const mix=(a,b,t)=>{const x=hex(a),y=hex(b);return'#'+x.map((c,i)=>Math.round(c+(y[i]-c)*t).toString(16).padStart(2,'0')).join('')};
  const lum=h=>{const[r,g,b]=hex(h);return(0.299*r+0.587*g+0.114*b)/255};
  const ok=h=>/^#[0-9a-fA-F]{6}$/.test(h||'');
  const esc=t=>String(t??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const STORE='https://mqwtgwqyohrrvfjqwtgm.supabase.co/storage/v1/object/public/loyalty/';
  const img=u=>(u||'').startsWith(STORE)?u:'';

  // ألوان البطاقة: لون الخلفية، ولون الختم والكلام لو المحل اختارهم
  function palette(bg,accent,inkC){
    bg=ok(bg)?bg:'#121715';
    const light=lum(bg)>0.6;
    let m=light?'#1F1A17':'#F7F3EA', a=light?'#A97A30':'#D6B77B';
    if(ok(accent)){ m=accent; a=lum(accent)>0.5?mix(accent,'#000000',0.32):mix(accent,'#FFFFFF',0.38); }
    const ink=ok(inkC)?inkC:(light?'#1A1715':'#FFFFFF');
    const lr=h=>{const c=hex(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]};
    const cr=(x,y)=>{const A=lr(x),B=lr(y);return(Math.max(A,B)+.05)/(Math.min(A,B)+.05)};
    const lab=ok(accent)?m:a;
    return{bg,light,m,a,ink,label:cr(lab,bg)>=3?lab:mix(ink,bg,0.22),dim:mix(bg,light?'#000000':'#FFFFFF',light?0.09:0.1)};
  }

  // الخطوط (كلها مجانية للاستخدام التجاري)
  const FONTS={plex:["IBM Plex Sans Arabic","IBM+Plex+Sans+Arabic:wght@400;600;700"],kufi:["Reem Kufi","Reem+Kufi:wght@400;700"],
    ruqaa:["Aref Ruqaa","Aref+Ruqaa:wght@400;700"],amiri:["Amiri","Amiri:wght@400;700"],cairo:["Cairo","Cairo:wght@400;700"],hand:["Marhey","Marhey:wght@400;700"]};
  const loaded={};
  function font(k){
    const f=FONTS[k]; if(!f) return '';
    if(!loaded[k]){loaded[k]=1;const l=document.createElement('link');l.rel='stylesheet';l.href=`https://fonts.googleapis.com/css2?family=${f[1]}&display=swap`;document.head.appendChild(l);}
    return `'${f[0]}',`;
  }

  // النقشات: مربع ٤٠×٤٠ يتكرر
  const PAT={
    dots:'<circle cx="10" cy="10" r="2.2"/><circle cx="30" cy="30" r="2.2"/>',
    checks:'<rect width="20" height="20"/><rect x="20" y="20" width="20" height="20"/>',
    beans:'<ellipse cx="12" cy="13" rx="5" ry="7.5" transform="rotate(30 12 13)"/><ellipse cx="32" cy="33" rx="5" ry="7.5" transform="rotate(-25 32 33)"/>',
    sadu:'<path d="M0 40L10 28L20 40ZM20 40L30 28L40 40Z"/><path d="M20 6L27 13L20 20L13 13Z"/><rect y="22" width="40" height="2"/>',
    najdi:'<path d="M0 0H20L10 12ZM20 40H40L30 28Z"/><rect x="17" y="17" width="6" height="6" transform="rotate(45 20 20)"/>',
    waves:'<path d="M0 12Q10 4 20 12T40 12M0 32Q10 24 20 32T40 32" fill="none" stroke-width="2.4"/>'
  };
  function patternUrl(k,ink){
    if(!PAT[k]) return '';
    const s=`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="${ink}" stroke="${ink}" opacity="0.09">${PAT[k]}</svg>`;
    return `url('data:image/svg+xml,${encodeURIComponent(s).replace(/'/g,'%27')}')`;
  }

  // المستويات (بعدد البطاقات اللي كمّلها) والإنجازات (بعدد الزيارات)
  const TIERS=[{min:6,ar:'ذهبي',en:'Gold',c:'#E5B84C',e:'🥇'},{min:3,ar:'فضي',en:'Silver',c:'#C3CAD3',e:'🥈'},{min:1,ar:'برونزي',en:'Bronze',c:'#CD7F32',e:'🥉'}];
  const tierOf=c=>{const done=(c.redeemed||0)+(c.rewards||0);return TIERS.find(t=>done>=t.min)||null};
  const nextTier=c=>{const done=(c.redeemed||0)+(c.rewards||0);const t=[...TIERS].reverse().find(t=>done<t.min);return t?{t,left:t.min-done}:null};
  const BADGES=[{v:1,e:'👋',ar:'أول زيارة',en:'First visit'},{v:5,e:'⭐',ar:'٥ زيارات',en:'5 visits'},{v:10,e:'🔥',ar:'١٠ زيارات',en:'10 visits'},
    {v:25,e:'💎',ar:'٢٥ زيارة',en:'25 visits'},{v:50,e:'👑',ar:'٥٠ زيارة',en:'50 visits'},{days:365,e:'🎂',ar:'عميل سنة',en:'1 year'}];
  const badgesOf=c=>BADGES.filter(b=>b.v?(c.visits||0)>=b.v:(c.since&&Date.now()-Date.parse(c.since)>=b.days*864e5));

  // مفتوح الحين؟ (يدعم الدوام اللي يعدّي نص الليل)
  function hoursState(h){
    const m=/^(\d\d):(\d\d)-(\d\d):(\d\d)$/.exec(h||''); if(!m) return null;
    const o=+m[1]*60+ +m[2], c=+m[3]*60+ +m[4], d=new Date(), t=d.getHours()*60+d.getMinutes();
    const open=c>o?(t>=o&&t<c):(t>=o||t<c);
    return{open,from:m[1]+':'+m[2],to:m[3]+':'+m[4]};
  }

  function glyph(icon,on,p,size,opt){
    const parts=ART[icon]||ART.cup; let s='';
    for(const q of parts){
      const role=q[1], fill=role==='h'?p.bg:(on?(role==='a'?(opt&&opt.a||p.a):(opt&&opt.m||p.m)):p.dim);
      if(q[0]==='p'){let d='';for(let i=0;i<q[2].length;i+=2)d+=(i?'L':'M')+q[2][i]+' '+q[2][i+1];s+=`<path d="${d}Z" fill="${fill}"/>`}
      else if(q[0]==='c')s+=`<circle cx="${q[2]}" cy="${q[3]}" r="${q[4]}" fill="${fill}"/>`;
      else s+=`<rect x="${q[2]}" y="${q[3]}" width="${q[4]}" height="${q[5]}" rx="${q[6]}" fill="${fill}"/>`;
    }
    return `<svg viewBox="-2 -2 104 104" width="${size}" height="${size}" aria-hidden="true">${s}</svg>`;
  }

  // ختم واحد: صورة المحل أو الشكل المرسوم، وآخر ختم (المكافأة) له شكل مميز
  function stamp(i,n,goal,cfg,p,size,prev){
    const on=i<n, isLast=i===goal-1, last=cfg.last||'gift';
    const anim=on&&prev!=null&&i>=prev?` lc-in-${cfg.anim||'pop'}`:'';
    const on1=img(cfg.stamp_img), off1=img(cfg.stamp_off_img);
    let inner;
    if(!on&&isLast&&last==='gift') inner=glyph('gift',true,p,size*0.86,{m:mix(p.label,p.bg,0.45),a:p.label});
    else if(on1) inner=`<img src="${esc(!on&&off1?off1:on1)}" alt="" width="${size}" height="${size}" class="lc-img${!on&&!off1?' lc-off':''}">`;
    else inner=glyph(cfg.icon,on,p,size);
    const star=isLast&&last==='star'?' lc-star':'';
    return `<span class="lc-st${anim}${star}" style="width:${size}px;height:${size}px">${inner}</span>`;
  }

  function stampsHTML(c,cfg,p,o,W){
    const goal=cfg.goal, n=Math.min(c.stamps,goal), lay=cfg.layout||'rows';
    if(lay==='circle'){
      const D=Math.min(W,250), r=D/2-24, size=Math.max(22,Math.min(44,Math.floor(2*Math.PI*r/goal*0.78)));
      let s=`<div class="lc-ring" style="width:${D}px;height:${D}px">`;
      for(let i=0;i<goal;i++){const a=-Math.PI/2+(o.ar?-1:1)*2*Math.PI*i/goal;s+=`<div class="lc-pos" style="left:${D/2+r*Math.cos(a)-size/2}px;top:${D/2+r*Math.sin(a)-size/2}px">${stamp(i,n,goal,cfg,p,size,o.prev)}</div>`;}
      return s+`<div class="lc-ring-mid"><b>${o.D(n)}</b><small>${o.ar?'من '+o.D(goal):'of '+goal}</small></div></div>`;
    }
    if(lay==='road'){
      const cols=5, rows=Math.ceil(goal/cols), pad=24, step=(W-pad*2)/(cols-1), H=rows*58, size=34;
      const P=[...Array(goal)].map((_,i)=>{const r=Math.floor(i/cols);let cc=r%2?cols-1-(i%cols):i%cols;if(o.ar)cc=cols-1-cc;return[pad+cc*step,29+r*58]});
      let d=`M${P[0][0]} ${P[0][1]}`;
      for(let i=1;i<P.length;i++){const[a,b]=[P[i-1],P[i]];if(a[1]!==b[1]){const k=a[0]>W/2?30:-30;d+=` C${a[0]+k} ${a[1]} ${b[0]+k} ${b[1]} ${b[0]} ${b[1]}`}else d+=` L${b[0]} ${b[1]}`}
      let s=`<div class="lc-road" style="width:${W}px;height:${H}px"><svg width="${W}" height="${H}" aria-hidden="true"><path d="${d}" fill="none" stroke="${p.ink}" stroke-opacity=".16" stroke-width="12" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${p.ink}" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="5 6"/></svg>`;
      P.forEach(([x,y],i)=>{s+=`<div class="lc-pos" style="left:${x-size/2}px;top:${y-size/2}px">${stamp(i,n,goal,cfg,p,size,o.prev)}</div>`});
      return s+'</div>';
    }
    const rows=goal<=6?1:goal<=14?2:3, per=Math.ceil(goal/rows), size=Math.min(52,Math.floor(W/per)-8);
    let g='<div class="lc-grid">';
    for(let r=0,i=0;r<rows;r++){g+='<div class="lc-row">';for(let k=0;k<per&&i<goal;k++,i++)g+=stamp(i,n,goal,cfg,p,size,o.prev);g+='</div>';}
    return g+'</div>';
  }

  // c: نتيجة get_card / loyalty_join / loyalty_shop. o: {ar, qr, prev, wash, preview}
  function html(c,o){
    const cfg=c.cfg, goal=cfg.goal, n=Math.min(c.stamps||0,goal), ar=o.ar, p=palette(cfg.color,cfg.accent,cfg.ink);
    const D=x=>ar?String(x).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]):String(x);
    const ff=font(cfg.font);
    const shop=c.shop||{}, reward=ar?cfg.reward_ar:cfg.reward_en, left=goal-n, wash=o.wash??!!shop.wash;
    const tier=cfg.tiers?tierOf(c):null;
    const unit=wash?['غسلة','غسلتين','غسلات']:['طلب','طلبين','طلبات'];
    const arCount=left===1?(wash?'غسلة وحدة':'طلب واحد'):left===2?unit[1]:`${D(left)} ${left<11?unit[2]:unit[0]}`;
    const leftTxt=c.rewards>0?(ar?'مكافأتك جاهزة 🎁':'Reward ready 🎁'):(ar?arCount:`${left} ${wash?(left===1?'wash':'washes'):(left===1?'order':'orders')}`);
    const logo=shop.logo&&/^data:image\//.test(shop.logo)?`<img class="lc-logo" src="${esc(shop.logo)}" alt="">`:`<span class="lc-logo" style="background:${p.a}">${glyph(cfg.icon,true,p,22,{m:p.bg,a:p.bg})}</span>`;
    const title=cfg.title||shop.name||(ar?'بطاقة الأختام':'Stamp card');
    // الخلفية: لون أو تدرّج، وفوقه صورة ونقشة
    const layers=[];
    const pat=patternUrl(cfg.pattern,p.ink); if(pat) layers.push(pat);
    const bgi=img(cfg.bg_img); if(bgi) layers.push(`linear-gradient(${p.bg}73,${p.bg}73)`,`url('${esc(bgi)}')`);
    const base=ok(cfg.color2)?`linear-gradient(135deg,${p.bg},${cfg.color2})`:p.bg;
    layers.push(base);
    const sizes=layers.map(l=>l===pat?'40px 40px':'cover').join(',');
    const corners=cfg.corners||'round';
    const style=`--lc-bg:${p.bg};--lc-ink:${p.ink};--lc-label:${p.label};--lc-font:${ff}inherit;background:${layers.join(',')};background-size:${sizes};background-position:center`
      +(tier?`;box-shadow:0 0 0 3px ${tier.c},0 14px 34px rgba(0,0,0,.22)`:'');
    const shine=cfg.shine||(tier&&tier.min===6);
    const cls=`lc lc-c-${corners}${shine?' lc-shine':''}`;
    const W=o.width||300;
    const earned=cfg.badges?badgesOf(c):[];
    let qr='';
    if(o.qr&&c.member&&window.qrcode){const q=qrcode(0,'M');q.addData('TONSA:'+c.member);q.make();qr=`<div class="lc-qr">${q.createSvgTag({cellSize:4,margin:0,scalable:true})}<b>${esc(c.member)}</b></div>`;}
    const front=`<div class="${cls} lc-front" style="${style}">
      <div class="lc-top">${logo}<div class="lc-tt"><b class="lc-name">${esc(title)}</b>${cfg.title&&shop.name?`<small>${esc(shop.name)}</small>`:''}${tier?`<span class="lc-tier" style="background:${tier.c}">${tier.e} ${ar?tier.ar:tier.en}</span>`:''}</div>
        <div class="lc-f lc-end"><small>${ar?'الأختام':'Stamps'}</small><span>${ar?`${D(n)} من ${D(goal)}`:`${n} of ${goal}`}</span></div></div>
      <div class="lc-stamps" role="img" aria-label="${ar?`${n} أختام من ${goal}`:`${n} of ${goal} stamps`}">${stampsHTML(c,cfg,p,{...o,D},W)}</div>
      <div class="lc-fields"><div class="lc-f"><small>${ar?'المكافأة':'Reward'}</small><span class="lc-v">${esc(reward)}</span></div><div class="lc-f lc-end"><small>${c.rewards>0?(ar?'عندك':'You have'):(ar?'باقي':'Left')}</small><span>${leftTxt}</span></div></div>
      ${c.name?`<div class="lc-fields"><div class="lc-f"><small>${ar?'الاسم':'Name'}</small><span class="lc-person">${esc(c.name)}</span></div></div>`:''}
      ${earned.length?`<div class="lc-badges">${earned.map(b=>`<span title="${esc(ar?b.ar:b.en)}">${b.e}</span>`).join('')}</div>`:''}
      ${cfg.message?`<p class="lc-msg">${esc(cfg.message)}</p>`:''}
      ${qr}
      <button type="button" class="lc-flipbtn" aria-label="${ar?'اقلب البطاقة':'Flip card'}">↻ ${ar?'اقلب البطاقة':'Flip card'}</button>
    </div>`;
    // ظهر البطاقة: الشروط والدوام والتواصل والإنجازات
    const hs=hoursState(cfg.hours), nt=cfg.tiers?nextTier(c):null;
    const row=(k,v)=>`<div class="lc-brow"><small>${k}</small><span>${v}</span></div>`;
    const back=`<div class="${cls} lc-back" style="${style}">
      <div class="lc-top">${logo}<div class="lc-tt"><b class="lc-name">${esc(shop.name||title)}</b></div></div>
      ${hs?row(ar?'الدوام':'Hours',`<span class="lc-dot" style="background:${hs.open?'#34C759':'#FF453A'}"></span>${hs.open?(ar?'مفتوح الحين':'Open now'):(ar?'مقفل الحين':'Closed now')} · <bdi>${hs.from} – ${hs.to}</bdi>`):''}
      ${cfg.phone?row(ar?'الجوال':'Phone',`<a href="tel:${esc(cfg.phone)}"><bdi>${esc(cfg.phone)}</bdi></a>`):''}
      ${cfg.maps?row(ar?'الموقع':'Location',`<a href="${esc(cfg.maps)}" target="_blank" rel="noopener">${ar?'افتح الخريطة 📍':'Open map 📍'}</a>`):''}
      ${cfg.tiers?row(ar?'مستواك':'Your level',tier?`${tier.e} ${ar?tier.ar:tier.en}`:(ar?'عضو':'Member'))+(nt?`<p class="lc-note">${ar?`باقي ${D(nt.left)} ${nt.left===1?'بطاقة':'بطاقات'} وتصير ${nt.t.ar} ${nt.t.e}`:`${nt.left} more cards to ${nt.t.en} ${nt.t.e}`}</p>`:''):''}
      ${cfg.badges?`<div class="lc-brow"><small>${ar?'إنجازاتك':'Badges'}</small><div class="lc-blist">${BADGES.map(b=>`<span class="${badgesOf(c).includes(b)?'':'lc-locked'}">${b.e} ${ar?b.ar:b.en}</span>`).join('')}</div></div>`:''}
      ${cfg.terms?row(ar?'الشروط':'Terms',esc(cfg.terms)):''}
      <p class="lc-note">${ar?`كل ${D(goal)} أختام = ${esc(reward)}`:`Every ${goal} stamps = ${esc(reward)}`}</p>
      <button type="button" class="lc-flipbtn" aria-label="${ar?'ارجع للبطاقة':'Back to card'}">↻ ${ar?'ارجع للبطاقة':'Back to card'}</button>
    </div>`;
    return `<div class="lc-wrap"><div class="lc-flip">${front}${back}</div></div>`;
  }

  // يربط زر القلب واللمعة مع حركة الجوال
  function attach(root){
    root.querySelectorAll('.lc-flipbtn').forEach(b=>b.onclick=()=>{const f=b.closest('.lc-flip');f.classList.toggle('lc-flipped');});
    if(!attach.tilt&&window.DeviceOrientationEvent){attach.tilt=1;window.addEventListener('deviceorientation',e=>{const x=Math.max(-30,Math.min(30,e.gamma||0));document.documentElement.style.setProperty('--lc-sx',(50+x*1.6)+'%')});}
  }

  const css=`.lc-wrap{width:100%;max-width:340px;perspective:1200px;text-align:start}
.lc-flip{display:grid;transition:transform .7s cubic-bezier(.3,1.1,.4,1);transform-style:preserve-3d}
.lc-flip>.lc{grid-area:1/1;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.lc-back{transform:rotateY(180deg)}.lc-flipped{transform:rotateY(180deg)}
.lc{position:relative;color:var(--lc-ink);border-radius:20px;padding:18px 18px 14px;box-shadow:0 14px 34px rgba(0,0,0,.22);overflow:hidden}
.lc-c-sharp{border-radius:5px}
.lc-c-ticket{border-radius:16px;-webkit-mask:radial-gradient(circle 13px at 0 50%,#0000 98%,#000) left/51% 100% no-repeat,radial-gradient(circle 13px at 100% 50%,#0000 98%,#000) right/51% 100% no-repeat;mask:radial-gradient(circle 13px at 0 50%,#0000 98%,#000) left/51% 100% no-repeat,radial-gradient(circle 13px at 100% 50%,#0000 98%,#000) right/51% 100% no-repeat}
.lc-shine::after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.26) 48%,rgba(255,255,255,.06) 56%,transparent 70%);background-size:260% 100%;background-position:var(--lc-sx,50%) 0;animation:lcsweep 5s ease-in-out infinite}
@keyframes lcsweep{0%,100%{background-position:100% 0}50%{background-position:0 0}}
.lc-top{display:flex;align-items:center;gap:10px;position:relative}.lc-logo{width:36px;height:36px;border-radius:50%;object-fit:cover;display:grid;place-items:center;flex:none}
.lc-tt{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;line-height:1.25}
.lc-name{font-family:var(--lc-font);font-size:19px;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lc-tt small{font-size:12px;opacity:.7}
.lc-tier{margin-top:3px;font-size:11px;font-weight:700;color:#1b1206;border-radius:99px;padding:1px 8px}
.lc-f{display:flex;flex-direction:column;line-height:1.25;position:relative}.lc-f small{color:var(--lc-label);font-size:12px;font-weight:600}.lc-f span{font-size:19px;font-variant-numeric:tabular-nums}
.lc-v,.lc-person{font-family:var(--lc-font)}.lc-person{font-size:22px!important}
.lc-end{text-align:end}.lc-stamps{margin:18px 0;position:relative;display:flex;justify-content:center}
.lc-grid{display:flex;flex-direction:column;gap:8px}.lc-row{display:flex;justify-content:center;gap:8px}
.lc-st{display:grid;place-items:center;flex:none}.lc-st svg{display:block}.lc-img{object-fit:contain;display:block;width:100%;height:100%}.lc-off{filter:grayscale(1);opacity:.22}
.lc-star{border-radius:50%;box-shadow:0 0 0 2px var(--lc-label),0 0 14px var(--lc-label)}
.lc-ring,.lc-road{position:relative}.lc-road svg{position:absolute;inset:0}.lc-pos{position:absolute}
.lc-ring-mid{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.lc-ring-mid b{font-size:38px;line-height:1}.lc-ring-mid small{color:var(--lc-label);font-weight:600}
.lc-in-pop{animation:lcpop .6s cubic-bezier(.3,1.6,.5,1) both}@keyframes lcpop{0%{transform:scale(.2) rotate(-20deg);opacity:0}100%{transform:none;opacity:1}}
.lc-in-ink{animation:lcink .55s cubic-bezier(.2,1.4,.4,1) both}@keyframes lcink{0%{transform:scale(1.9) rotate(-14deg);opacity:0;filter:blur(3px)}70%{transform:scale(.9) rotate(3deg);opacity:1;filter:none}100%{transform:none}}
.lc-in-shine{animation:lcglow 1s ease-out both}@keyframes lcglow{0%{transform:scale(.6);opacity:0;filter:brightness(3) drop-shadow(0 0 12px #fff)}100%{transform:none;opacity:1;filter:none}}
.lc-fields{display:flex;justify-content:space-between;gap:12px;margin-top:4px}
.lc-badges{display:flex;gap:4px;margin-top:10px;font-size:18px}
.lc-msg{margin:12px 0 0;text-align:center;font-family:var(--lc-font);font-size:15px;opacity:.85}
.lc-qr{margin:18px auto 0;background:#fff;border-radius:12px;padding:12px 12px 6px;width:52%;text-align:center;color:#111;position:relative}
.lc-qr svg{display:block;width:100%;height:auto}.lc-qr b{display:block;font:500 15px/1.6 ui-monospace,Menlo,monospace;letter-spacing:1px;direction:ltr}
.lc-flipbtn{display:block;margin:12px auto 0;background:transparent;border:0;color:var(--lc-label);font:600 13px/1 inherit;font-family:inherit;padding:8px 12px;cursor:pointer;position:relative}
.lc-brow{display:flex;flex-direction:column;margin-top:14px;position:relative}.lc-brow small{color:var(--lc-label);font-size:12px;font-weight:600}.lc-brow span,.lc-brow a{font-size:16px;color:inherit}
.lc-dot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-inline-end:6px}
.lc-blist{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}.lc-blist span{font-size:13px;background:rgba(127,127,127,.18);border-radius:99px;padding:3px 9px}.lc-locked{opacity:.35;filter:grayscale(1)}
.lc-note{margin:12px 0 0;font-size:14px;opacity:.85;position:relative}
@media (prefers-reduced-motion:reduce){.lc-in-pop,.lc-in-ink,.lc-in-shine,.lc-shine::after{animation:none}.lc-flip{transition:none}}`;
  return{html,css,attach,palette,glyph,tierOf,badgesOf,hoursState};
})();
