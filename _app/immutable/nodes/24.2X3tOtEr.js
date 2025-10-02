import{a as N,t as G}from"../chunks/disclose-version.D_FZJbBx.js";import"../chunks/legacy.CpgGiEmo.js";import{aw as Qt,j as Jt,U as Xt,T as Yt,p as Ht,t as z,d as X,a as Ft,c as r,s as a,r as s,ax as A,ay as $t,f as te,g as t,ab as _,ad as f}from"../chunks/runtime.RAT1rWNc.js";import{s as o}from"../chunks/render.CdTMVJmj.js";import{e as Ot,i as Ut}from"../chunks/each.D54gxcCT.js";import{s as q}from"../chunks/attributes.BB8B8stH.js";import{i as Rt}from"../chunks/lifecycle.Dp5kZ3lh.js";import{p as y,l as ee,s as ae}from"../chunks/props.12qCsNKj.js";import{M as re}from"../chunks/MdsvexLayout.CsLuBmZF.js";import{s as Vt}from"../chunks/Utils.WwW4-Fab.js";import{i as se}from"../chunks/if.D4MqHMYU.js";import{l as ie,b as ne,e as Ct,c as de}from"../chunks/events.B1WT2ooS.js";/* empty css                                                       */import{C as ct}from"../chunks/Code.C8_dnKzB.js";function me(i,m,C=m){var S=Qt();ie(i,"input",v=>{var u=v?i.defaultValue:i.value;if(u=kt(i)?xt(u):u,C(u),S&&u!==(u=m())){var H=i.selectionStart,F=i.selectionEnd;i.value=u??"",F!==null&&(i.selectionStart=H,i.selectionEnd=Math.min(F,i.value.length))}}),(Jt&&i.defaultValue!==i.value||Xt(m)==null&&i.value)&&C(kt(i)?xt(i.value):i.value),Yt(()=>{var v=m();kt(i)&&v===xt(i.value)||i.type==="date"&&!v&&!i.value||v!==i.value&&(i.value=v??"")})}function kt(i){var m=i.type;return m==="number"||m==="range"}function xt(i){return i===""?null:+i}var le=G('<label class="svelte-16b6hx2"> </label>'),oe=G('<div class="svelte-16b6hx2"><!> <textarea class="svelte-16b6hx2"></textarea></div>');function ht(i,m){Ht(m,!1);let C=y(m,"value",12,""),S=y(m,"label",8,""),v=y(m,"name",8,""),u=y(m,"width",8,"100%"),H=y(m,"height",8,"300px"),F=y(m,"rows",8,10),Y=y(m,"placeholder",8,""),$=y(m,"autofocus",8,!1),tt=y(m,"onInput",8,()=>{}),h=y(m,"onKeydown",8,()=>{}),D=y(m,"wrap",8,!0);Rt();var b=oe(),B=r(b);{var R=k=>{var p=le(),V=r(p,!0);s(p),z(()=>{q(p,"for",v()),o(V,S())}),N(k,p)};se(B,k=>{S()&&k(R)})}var c=a(B,2);de(c),ne(c,$()),s(b),z(k=>{q(c,"name",v()),q(c,"placeholder",Y()),q(c,"rows",F()),q(c,"style",k)},[()=>Vt({width:u(),height:H(),"min-width":u(),"max-width":u(),"text-wrap":D()?"wrap":"nowrap"})],X),me(c,C),Ct("input",c,function(...k){var p;(p=tt())==null||p.apply(this,k)}),Ct("keydown",c,function(...k){var p;(p=h())==null||p.apply(this,k)}),N(i,b),Ft()}const ue={title:"Tools: Proxmox Memory Info",comments:!0,categories:"tools proxmox software"};var pe=G('<tr><td></td><td> </td><td> </td><td> </td><td> </td><td style="text-align:right"> </td><td style="text-align:right"> </td></tr>'),ve=G('<tr><td></td><td> </td><td> </td><td>qemu</td><td> </td><td style="text-align:right"> </td><td style="text-align:right"> </td></tr>'),ce=G('<p>Proxmox doesn’t have a built-in way to check if you’re overcommitting memory on your host. (That I know of?) This is a simple tool that gives you a summary of your memory usage using some shell commands and copypasta.</p> <h2 class="h2-1">Paste the output of…</h2> <!> <p>down here:</p> <!> <h2 class="h2-2">Paste the output of…</h2> <!> <p>down here:</p> <!> <h2 class="h2-3">Paste the output of…</h2> <!> <p>down here:</p> <!> <h2 class="h2-4">Results</h2> <table><thead><tr><th></th><th>VM ID</th><th>Name</th><th>Type</th><th>Status</th><th style="text-align:right">Current Mem.</th><th style="text-align:right">Max Mem.</th></tr></thead><tbody><!><!><tr><td><b>Totals</b></td><td></td><td></td><td></td><td></td><td style="text-align:right"><b> </b></td><td style="text-align:right"><b> </b></td></tr></tbody></table> <table><tbody><tr><th>Current System Memory Usage</th><td> </td></tr><tr><th>Memory Used by Host</th><td> </td></tr><tr><th>Max Potential Memory Use</th><td> </td></tr><tr><th>Total Host Memory</th><td> </td></tr><tr><th>Available for Provisioning</th><td> </td></tr></tbody></table>',1);function Ie(i,m){const C=ee(m,["children","$$slots","$$events","$$legacy"]);Ht(m,!1);let S=f(`      VMID NAME                 STATUS     MEM(MB)    BOOTDISK(GB) PID       
       100 fdsa                 running    4608              32.00 2826770   
       101 asdf                 running    8192              24.00 2828068   
       103 vcxz                 running    6144             170.00 4083340   
       106 zxcv                 running    512                0.00 2829680   
       107 rewq                 running    512                8.00 2828256   
       108 qwer                 running    10240            280.00 2828390   
       116 poiu                 stopped    1024              16.00 0         
       119 uiop                 running    2048              16.00 2828601   
`),v=f(`cpus: 4
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
`),u=f(`MemTotal:       48588200 kB
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
`);function H(d){return d.split(`
`).reduce((n,l)=>{const[e,x]=l.split(":").map(M=>M.trim());if(!e)return n;try{if(n[e]=parseFloat(x),isNaN(n[e]))throw new Error("Not a number");if(n[e].toString()!=x)throw new Error("Does not look like a number")}catch{n[e]=x}return n},{})}function F(d){const n=d.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),l=n[0].split(/\s+/);return n.slice(1).map(e=>{const x=e.split(/\s+/);return l.reduce((M,Z,Q)=>(M[Z]=x[Q],M),{})})}function Y(d){let n=F(d),l={};return n.forEach(e=>{const x=e.VMID;delete e.VMID,e.MEM=parseFloat(e["MEM(MB)"])*1024*1024,delete e["MEM(MB)"],e.BOOTDISK=parseFloat(e["BOOTDISK(GB)"])*1024*1024*1024,delete e["BOOTDISK(GB)"],l[x]=e}),l}function $(d){const n=d.split("===").map(e=>e.trim()).filter(e=>e.length>0);let l={};return n.forEach(e=>{let x=H(e);const M=x.vmid;delete x.vmid,l[M]=x}),l}function tt(d){let n=H(d);for(const l in n){const e=n[l];typeof e=="string"?e.endsWith(" kB")?n[l]=parseInt(e.slice(0,-3))*1024:e.endsWith(" MB")?n[l]=parseInt(e.slice(0,-3))*1024*1024:n[l]=parseInt(e):n[l]=e}return n}function h(d){return(d/1024/1024/1024).toFixed(2)+" GB"}let D=f(),b=f(),B=f();function R(d){return d.reduce((n,l)=>n+l,0)}let c=f(),k=f(),p=f(),V=f(),W=f(),et=f();A(()=>t(S),()=>{_(D,Y(t(S)))}),A(()=>t(v),()=>{_(b,$(t(v)))}),A(()=>t(u),()=>{_(B,tt(t(u)))}),A(()=>(t(b),t(D)),()=>{_(c,R(Object.values(t(b)).map(d=>d.mem))+R(Object.values(t(D)).map(d=>d.STATUS=="running"?d.MEM:0)))}),A(()=>(t(b),t(D)),()=>{_(k,R(Object.values(t(b)).map(d=>d.maxmem))+R(Object.values(t(D)).map(d=>d.MEM)))}),A(()=>t(B),()=>{_(p,t(B).MemTotal-t(B).MemAvailable)}),A(()=>(t(p),t(c)),()=>{_(V,t(p)-t(c))}),A(()=>(t(V),t(k)),()=>{_(W,t(V)+t(k))}),A(()=>(t(B),t(W)),()=>{_(et,t(B).MemTotal-t(W))}),$t(),Rt(),re(i,ae(()=>C,ue,{children:(d,n)=>{var l=ce(),e=a(te(l),4);ct(e,{lang:"bash",code:"qm list"});var x=a(e,4);ht(x,{wrap:!1,get value(){return t(S)},set value(w){_(S,w)},$$legacy:!0});var M=a(x,4);ct(M,{lang:"bash",code:"pct list | grep -v VMID | awk '{'{'} print $1 {'}'}' | xargs -I x sh -c 'pct status x -verbose && echo ==='"});var Z=a(M,4);ht(Z,{wrap:!1,get value(){return t(v)},set value(w){_(v,w)},$$legacy:!0});var Q=a(Z,4);ct(Q,{lang:"bash",code:"cat /proc/meminfo"});var gt=a(Q,4);ht(gt,{wrap:!1,get value(){return t(u)},set value(w){_(u,w)},$$legacy:!0});var at=a(gt,4),_t=a(r(at)),ft=r(_t);Ot(ft,1,()=>Object.entries(t(b)),Ut,(w,E)=>{let K=()=>t(E)[0],g=()=>t(E)[1];var T=pe(),P=a(r(T)),L=r(P,!0);s(P);var I=a(P),lt=r(I,!0);s(I);var O=a(I),ot=r(O,!0);s(O);var U=a(O),ut=r(U,!0);s(U);var j=a(U),pt=r(j,!0);s(j);var J=a(j),vt=r(J,!0);s(J),s(T),z((Wt,Zt)=>{o(L,K()),o(lt,g().name),o(ot,g().type),o(ut,g().status),o(pt,Wt),o(vt,Zt)},[()=>h(g().mem),()=>h(g().maxmem)],X),N(w,T)});var wt=a(ft);Ot(wt,1,()=>Object.entries(t(D)),Ut,(w,E)=>{let K=()=>t(E)[0],g=()=>t(E)[1];var T=ve(),P=a(r(T)),L=r(P,!0);s(P);var I=a(P),lt=r(I,!0);s(I);var O=a(I,2),ot=r(O,!0);s(O);var U=a(O),ut=r(U,!0);s(U);var j=a(U),pt=r(j,!0);s(j),s(T),z((J,vt)=>{o(L,K()),o(lt,g().NAME),o(ot,g().STATUS),o(ut,J),o(pt,vt)},[()=>g().STATUS=="running"?h(g().MEM):0,()=>h(g().MEM)],X),N(w,T)});var yt=a(wt),rt=a(r(yt),5),bt=r(rt),jt=r(bt,!0);s(bt),s(rt);var Bt=a(rt),Mt=r(Bt),qt=r(Mt,!0);s(Mt),s(Bt),s(yt),s(_t),s(at);var St=a(at,2),Tt=r(St),st=r(Tt),Pt=a(r(st)),Kt=r(Pt,!0);s(Pt),s(st);var it=a(st),It=a(r(it)),Lt=r(It,!0);s(It),s(it);var nt=a(it),At=a(r(nt)),Nt=r(At,!0);s(At),s(nt);var dt=a(nt),Dt=a(r(dt)),zt=r(Dt,!0);s(Dt),s(dt);var Et=a(dt),mt=a(r(Et)),Gt=r(mt,!0);s(mt),s(Et),s(Tt),s(St),z((w,E,K,g,T,P,L,I)=>{o(jt,w),o(qt,E),o(Kt,K),o(Lt,g),o(Nt,T),o(zt,P),q(mt,"style",L),o(Gt,I)},[()=>h(t(c)),()=>h(t(k)),()=>h(t(p)),()=>h(t(V)),()=>h(t(W)),()=>h(t(B).MemTotal),()=>Vt({color:t(et)>0?"green":"hotpink"}),()=>h(t(et))],X),N(d,l)},$$slots:{default:!0}})),Ft()}export{Ie as component};
