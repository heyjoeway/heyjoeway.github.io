import{a as G,t as $}from"../chunks/disclose-version.pcXP8nla.js";import"../chunks/legacy.DLBMJjTQ.js";import{at as Zt,j as Qt,z as Yt,au as Jt,p as Ct,t as W,d as J,a as Ht,c as r,r as s,s as a,av as T,aw as Xt,f as te,g as t,Y as g,ax as f}from"../chunks/runtime.CL55K65K.js";import{s as l}from"../chunks/render.CC6IpZNF.js";import{s as Ft,e as qt,i as Ot}from"../chunks/Utils.CYFPyv2a.js";import{s as K}from"../chunks/attributes.Dg39Wyaa.js";import{i as Rt}from"../chunks/lifecycle.C2XJTX65.js";import{p as P,l as ee,s as ae}from"../chunks/props.BF2gUOm6.js";import{M as re}from"../chunks/MdsvexLayout.CZcMrbXw.js";import{i as se}from"../chunks/if.MIU4WiqH.js";import{l as ie,b as ne,e as Ut,c as oe}from"../chunks/events.CZHO4uHy.js";import{c as de,s as me}from"../chunks/Theming.CVjcmEt6.js";import{s as le,a as ue}from"../chunks/store.BBvoG5rH.js";/* empty css                                                       */import{C as vt}from"../chunks/Code.Esccxh9n.js";function pe(i,d,F=d){var I=Zt();ie(i,"input",u=>{var c=u?i.defaultValue:i.value;if(c=kt(i)?xt(c):c,F(c),I&&c!==(c=d())){var E=i.selectionStart,q=i.selectionEnd;i.value=c??"",q!==null&&(i.selectionStart=E,i.selectionEnd=Math.min(q,i.value.length))}}),(Qt&&i.defaultValue!==i.value||Yt(d)==null&&i.value)&&F(kt(i)?xt(i.value):i.value),Jt(()=>{var u=d();kt(i)&&u===xt(i.value)||i.type==="date"&&!u&&!i.value||u!==i.value&&(i.value=u??"")})}function kt(i){var d=i.type;return d==="number"||d==="range"}function xt(i){return i===""?null:+i}var ce=$('<label class="svelte-qqbb5w"> </label>'),ve=$('<div class="svelte-qqbb5w"><!> <textarea class="svelte-qqbb5w"></textarea></div>');function ht(i,d){Ct(d,!1);const[F,I]=le(),u=()=>ue(de,"$currentTheme",F);let c=P(d,"value",12,""),E=P(d,"label",8,""),q=P(d,"name",8,""),z=P(d,"width",8,"100%"),X=P(d,"rows",8,10),tt=P(d,"placeholder",8,""),h=P(d,"autofocus",8,!1),A=P(d,"onInput",8,()=>{}),D=P(d,"onKeydown",8,()=>{});Rt();var y=ve(),O=r(y);{var R=k=>{var p=ce(),V=r(p,!0);s(p),W(()=>{K(p,"for",q()),me(p,"color",u().text.secondary.color),l(V,E())}),G(k,p)};se(O,k=>{E()&&k(R)})}var v=a(O,2);oe(v),ne(v,h()),s(y),W(k=>{K(v,"name",q()),K(v,"placeholder",tt()),K(v,"rows",X()),K(v,"style",k)},[()=>Ft({width:z(),"min-width":z(),"max-width":z(),"--placeholder-color":u().text.secondary.color,color:u().text.primary.color,"background-color":u().textfield.background.color})],J),pe(v,c),Ut("input",v,function(...k){var p;(p=A())==null||p.apply(this,k)}),Ut("keydown",v,function(...k){var p;(p=D())==null||p.apply(this,k)}),G(i,y),Ht(),I()}const ke={title:"Tools: Proxmox Memory Info",comments:!0,categories:"tools proxmox software"};var xe=$('<tr><td></td><td> </td><td> </td><td> </td><td> </td><td style="text-align:right"> </td><td style="text-align:right"> </td></tr>'),he=$('<tr><td></td><td> </td><td> </td><td>qemu</td><td> </td><td style="text-align:right"> </td><td style="text-align:right"> </td></tr>'),_e=$('<p>Proxmox doesn’t have a built-in way to check if you’re overcommitting memory on your host. (That I know of?) This is a simple tool that gives you a summary of your memory usage using some shell commands and copypasta.</p> <h2>Paste the output of…</h2> <!> <p>down here:</p> <!> <h2>Paste the output of…</h2> <!> <p>down here:</p> <!> <h2>Paste the output of…</h2> <!> <p>down here:</p> <!> <h2>Results</h2> <table><thead><tr><th></th><th>VM ID</th><th>Name</th><th>Type</th><th>Status</th><th style="text-align:right">Current Mem.</th><th style="text-align:right">Max Mem.</th></tr></thead><tbody><!><!><tr><td><b>Totals</b></td><td></td><td></td><td></td><td></td><td style="text-align:right"><b> </b></td><td style="text-align:right"><b> </b></td></tr></tbody></table> <table><tbody><tr><th>Current System Memory Usage</th><td> </td></tr><tr><th>Memory Used by Host</th><td> </td></tr><tr><th>Max Potential Memory Use</th><td> </td></tr><tr><th>Total Host Memory</th><td> </td></tr><tr><th>Available for Provisioning</th><td> </td></tr></tbody></table>',1);function Oe(i,d){const F=ee(d,["children","$$slots","$$events","$$legacy"]);Ct(d,!1);let I=f(`      VMID NAME                 STATUS     MEM(MB)    BOOTDISK(GB) PID       
       100 fdsa                 running    4608              32.00 2826770   
       101 asdf                 running    8192              24.00 2828068   
       103 vcxz                 running    6144             170.00 4083340   
       106 zxcv                 running    512                0.00 2829680   
       107 rewq                 running    512                8.00 2828256   
       108 qwer                 running    10240            280.00 2828390   
       116 poiu                 stopped    1024              16.00 0         
       119 uiop                 running    2048              16.00 2828601   
`),u=f(`cpus: 4
disk: 8607637504
diskread: 5604175872
diskwrite: 5664735232
maxdisk: 16729894912
maxmem: 1610612736
maxswap: 268435456
mem: 103804928
name: zaq
netin: 1609895403
netout: 321521108
pid: 2819704
status: running
swap: 0
type: lxc
uptime: 486378
vmid: 102
===
cpus: 2
disk: 2569617408
diskread: 2268246016
diskwrite: 1185574912
maxdisk: 8350298112
maxmem: 2147483648
maxswap: 536870912
mem: 446955520
name: qaz
netin: 203442269
netout: 103766012
pid: 2819932
status: running
swap: 0
type: lxc
uptime: 486377
vmid: 104
===
cpus: 2
disk: 14933626880
diskread: 50094080
diskwrite: 0
maxdisk: 33501757440
maxmem: 3221225472
maxswap: 536870912
mem: 809078784
name: xsw
netin: 1082231849
netout: 490525835
pid: 2820482
status: running
swap: 0
type: lxc
uptime: 486376
vmid: 105
===
cpus: 1
disk: 1718788096
diskread: 8668491776
diskwrite: 4616585216
maxdisk: 8350298112
maxmem: 268435456
maxswap: 134217728
mem: 125739008
name: wsx
netin: 1890712714
netout: 260634596
pid: 2820755
status: running
swap: 0
type: lxc
uptime: 486375
vmid: 109
===
cpus: 4
disk: 2408054784
diskread: 597217280
diskwrite: 0
maxdisk: 25769803776
maxmem: 4294967296
maxswap: 536870912
mem: 2604072960
name: cde
netin: 128455070
netout: 90778783
pid: 2817017
status: running
swap: 0
type: lxc
uptime: 486459
vmid: 110
===
cpus: 1
disk: 2349285376
diskread: 15766028288
diskwrite: 28394274816
maxdisk: 8350298112
maxmem: 805306368
maxswap: 268435456
mem: 40759296
name: edc
netin: 1229295854
netout: 1045237055
pid: 2821383
status: running
swap: 0
type: lxc
uptime: 486373
vmid: 111
===
cpus: 1
disk: 5181554688
diskread: 28819456
diskwrite: 0
maxdisk: 8350298112
maxmem: 402653184
maxswap: 134217728
mem: 136101888
name: vfr
netin: 120298060
netout: 1821795
pid: 2821938
status: running
swap: 0
type: lxc
uptime: 486373
vmid: 112
===
cpus: 1
disk: 1094844416
diskread: 3101143040
diskwrite: 527785984
maxdisk: 8350298112
maxmem: 201326592
maxswap: 134217728
mem: 33763328
name: rfv
netin: 154376120
netout: 1976845
pid: 2822212
status: running
swap: 0
type: lxc
uptime: 486373
vmid: 113
===
cpus: 4
disk: 6096498688
diskread: 8319344640
diskwrite: 6460186624
maxdisk: 16729894912
maxmem: 1610612736
maxswap: 536870912
mem: 262180864
name: bgt
netin: 107645972018
netout: 7305682389
pid: 2822414
status: running
swap: 0
type: lxc
uptime: 486372
vmid: 114
===
cpus: 1
disk: 1116786688
diskread: 5317419008
diskwrite: 969625600
maxdisk: 8350298112
maxmem: 134217728
maxswap: 134217728
mem: 32182272
name: tgb
netin: 27261214
netout: 3653634
pid: 2822936
status: running
swap: 0
type: lxc
uptime: 486372
vmid: 115
===
cpus: 1
disk: 0
diskread: 0
diskwrite: 0
maxdisk: 8589934592
maxmem: 268435456
maxswap: 134217728
mem: 0
name: nhy
netin: 0
netout: 0
status: stopped
swap: 0
type: lxc
uptime: 0
vmid: 117
===
cpus: 1
disk: 1221087232
diskread: 1466032128
diskwrite: 630587392
maxdisk: 16729894912
maxmem: 536870912
maxswap: 134217728
mem: 169148416
name: yhn
netin: 156576103
netout: 5348044
pid: 2825177
status: running
swap: 0
type: lxc
uptime: 486353
vmid: 118
===
cpus: 2
disk: 0
diskread: 0
diskwrite: 0
maxdisk: 17179869184
maxmem: 2147483648
maxswap: 536870912
mem: 0
name: mju
netin: 0
netout: 0
status: stopped
swap: 0
type: lxc
uptime: 0
vmid: 121
===
`),c=f(`MemTotal:       48588200 kB
MemFree:         2121064 kB
MemAvailable:    5148580 kB
Buffers:          165496 kB
Cached:          3197324 kB
SwapCached:            0 kB
Active:         14693372 kB
Inactive:       26106296 kB
Active(anon):   13714084 kB
Inactive(anon): 23904072 kB
Active(file):     979288 kB
Inactive(file):  2202224 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:             0 kB
SwapFree:              0 kB
Zswap:                 0 kB
Zswapped:              0 kB
Dirty:               396 kB
Writeback:             0 kB
AnonPages:      37436860 kB
Mapped:           924520 kB
Shmem:            183060 kB
KReclaimable:     435548 kB
Slab:            1441200 kB
SReclaimable:     435548 kB
SUnreclaim:      1005652 kB
KernelStack:       21552 kB
PageTables:       124804 kB
SecPageTables:     11676 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:    24294100 kB
Committed_AS:   46479152 kB
VmallocTotal:   34359738367 kB
VmallocUsed:      823808 kB
VmallocChunk:          0 kB
Percpu:            73984 kB
HardwareCorrupted:     0 kB
AnonHugePages:  26798080 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
FileHugePages:         0 kB
FilePmdMapped:         0 kB
Unaccepted:            0 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB
Hugetlb:               0 kB
DirectMap4k:      595876 kB
DirectMap2M:    15441920 kB
DirectMap1G:    34603008 kB
`);function E(o){return o.split(`
`).reduce((n,m)=>{const[e,x]=m.split(":").map(w=>w.trim());if(!e)return n;try{if(n[e]=parseFloat(x),isNaN(n[e]))throw new Error("Not a number");if(n[e].toString()!=x)throw new Error("Does not look like a number")}catch{n[e]=x}return n},{})}function q(o){const n=o.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),m=n[0].split(/\s+/);return n.slice(1).map(e=>{const x=e.split(/\s+/);return m.reduce((w,Z,Q)=>(w[Z]=x[Q],w),{})})}function z(o){let n=q(o),m={};return n.forEach(e=>{const x=e.VMID;delete e.VMID,e.MEM=parseFloat(e["MEM(MB)"])*1024*1024,delete e["MEM(MB)"],e.BOOTDISK=parseFloat(e["BOOTDISK(GB)"])*1024*1024*1024,delete e["BOOTDISK(GB)"],m[x]=e}),m}function X(o){const n=o.split("===").map(e=>e.trim()).filter(e=>e.length>0);let m={};return n.forEach(e=>{let x=E(e);const w=x.vmid;delete x.vmid,m[w]=x}),m}function tt(o){let n=E(o);for(const m in n){const e=n[m];typeof e=="string"?e.endsWith(" kB")?n[m]=parseInt(e.slice(0,-3))*1024:e.endsWith(" MB")?n[m]=parseInt(e.slice(0,-3))*1024*1024:n[m]=parseInt(e):n[m]=e}return n}function h(o){return(o/1024/1024/1024).toFixed(2)+" GB"}let A=f(),D=f(),y=f();function O(o){return o.reduce((n,m)=>n+m,0)}let R=f(),v=f(),k=f(),p=f(),V=f(),et=f();T(()=>t(I),()=>{g(A,z(t(I)))}),T(()=>t(u),()=>{g(D,X(t(u)))}),T(()=>t(c),()=>{g(y,tt(t(c)))}),T(()=>(t(D),t(A)),()=>{g(R,O(Object.values(t(D)).map(o=>o.mem))+O(Object.values(t(A)).map(o=>o.STATUS=="running"?o.MEM:0)))}),T(()=>(t(D),t(A)),()=>{g(v,O(Object.values(t(D)).map(o=>o.maxmem))+O(Object.values(t(A)).map(o=>o.MEM)))}),T(()=>t(y),()=>{g(k,t(y).MemTotal-t(y).MemAvailable)}),T(()=>(t(k),t(R)),()=>{g(p,t(k)-t(R))}),T(()=>(t(p),t(v)),()=>{g(V,t(p)+t(v))}),T(()=>(t(y),t(V)),()=>{g(et,t(y).MemTotal-t(V))}),Xt(),Rt(),re(i,ae(()=>F,ke,{children:(o,n)=>{var m=_e(),e=a(te(m),4);vt(e,{lang:"bash",code:"qm list"});var x=a(e,4);ht(x,{get value(){return t(I)},set value(b){g(I,b)},$$legacy:!0});var w=a(x,4);vt(w,{lang:"bash",code:"pct list | grep -v VMID | awk '{'{'} print $1 {'}'}' | xargs -I x sh -c 'pct status x -verbose && echo ==='"});var Z=a(w,4);ht(Z,{get value(){return t(u)},set value(b){g(u,b)},$$legacy:!0});var Q=a(Z,4);vt(Q,{lang:"bash",code:"cat /proc/meminfo"});var _t=a(Q,4);ht(_t,{get value(){return t(c)},set value(b){g(c,b)},$$legacy:!0});var at=a(_t,4),gt=a(r(at)),ft=r(gt);qt(ft,1,()=>Object.entries(t(D)),Ot,(b,U)=>{let L=()=>t(U)[0],_=()=>t(U)[1];var B=xe(),M=a(r(B)),N=r(M,!0);s(M);var S=a(M),mt=r(S,!0);s(S);var C=a(S),lt=r(C,!0);s(C);var H=a(C),ut=r(H,!0);s(H);var j=a(H),pt=r(j,!0);s(j);var Y=a(j),ct=r(Y,!0);s(Y),s(B),W((Wt,$t)=>{l(N,L()),l(mt,_().name),l(lt,_().type),l(ut,_().status),l(pt,Wt),l(ct,$t)},[()=>h(_().mem),()=>h(_().maxmem)],J),G(b,B)});var yt=a(ft);qt(yt,1,()=>Object.entries(t(A)),Ot,(b,U)=>{let L=()=>t(U)[0],_=()=>t(U)[1];var B=he(),M=a(r(B)),N=r(M,!0);s(M);var S=a(M),mt=r(S,!0);s(S);var C=a(S,2),lt=r(C,!0);s(C);var H=a(C),ut=r(H,!0);s(H);var j=a(H),pt=r(j,!0);s(j),s(B),W((Y,ct)=>{l(N,L()),l(mt,_().NAME),l(lt,_().STATUS),l(ut,Y),l(pt,ct)},[()=>_().STATUS=="running"?h(_().MEM):0,()=>h(_().MEM)],J),G(b,B)});var bt=a(yt),rt=a(r(bt),5),wt=r(rt),Vt=r(wt,!0);s(wt),s(rt);var Bt=a(rt),Mt=r(Bt),jt=r(Mt,!0);s(Mt),s(Bt),s(bt),s(gt),s(at);var St=a(at,2),Tt=r(St),st=r(Tt),Pt=a(r(st)),Kt=r(Pt,!0);s(Pt),s(st);var it=a(st),It=a(r(it)),zt=r(It,!0);s(It),s(it);var nt=a(it),At=a(r(nt)),Lt=r(At,!0);s(At),s(nt);var ot=a(nt),Dt=a(r(ot)),Nt=r(Dt,!0);s(Dt),s(ot);var Et=a(ot),dt=a(r(Et)),Gt=r(dt,!0);s(dt),s(Et),s(Tt),s(St),W((b,U,L,_,B,M,N,S)=>{l(Vt,b),l(jt,U),l(Kt,L),l(zt,_),l(Lt,B),l(Nt,M),K(dt,"style",N),l(Gt,S)},[()=>h(t(R)),()=>h(t(v)),()=>h(t(k)),()=>h(t(p)),()=>h(t(V)),()=>h(t(y).MemTotal),()=>Ft({color:t(et)>0?"green":"hotpink"}),()=>h(t(et))],J),G(o,m)},$$slots:{default:!0}})),Ht()}export{Oe as component};
