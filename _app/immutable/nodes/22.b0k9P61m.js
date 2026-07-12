import{a as V,t as K}from"../chunks/disclose-version.DidpbTBK.js";import"../chunks/legacy.D9-Keihw.js";import{p as Ut,t as j,d as Z,a as Ct,c as r,s as a,r as s,ad as S,ae as Wt,f as Zt,g as t,ac as x,af as h}from"../chunks/runtime.CcA7rh7T.js";import{s as m}from"../chunks/render.Cvzv5ILG.js";import{e as Dt,i as Ot}from"../chunks/each.B8E5_NzR.js";import{s as F}from"../chunks/attributes.CgViyKLs.js";import{i as Ht}from"../chunks/lifecycle.Cp-uQiP7.js";import{p as _,l as Qt,s as Jt}from"../chunks/props.CpHforMc.js";import{M as Xt}from"../chunks/MdsvexLayout.Ck_Pvbw2.js";import{s as Ft}from"../chunks/Utils.WwW4-Fab.js";import{i as Yt}from"../chunks/if.BymG2SI7.js";import{b as $t,e as Et,c as te}from"../chunks/events.2rOnDWX3.js";import{b as ee}from"../chunks/input.CielHd4O.js";/* empty css                                                       */import{C as vt}from"../chunks/Code.CyU95F3t.js";var ae=K('<label class="svelte-16b6hx2"> </label>'),re=K('<div class="svelte-16b6hx2"><!> <textarea class="svelte-16b6hx2"></textarea></div>');function kt(Q,o){Ut(o,!1);let J=_(o,"value",12,""),I=_(o,"label",8,""),A=_(o,"name",8,""),T=_(o,"width",8,"100%"),L=_(o,"height",8,"300px"),X=_(o,"rows",8,10),Y=_(o,"placeholder",8,""),$=_(o,"autofocus",8,!1),tt=_(o,"onInput",8,()=>{}),v=_(o,"onKeydown",8,()=>{}),P=_(o,"wrap",8,!0);Ht();var f=re(),w=r(f);{var U=p=>{var l=ae(),C=r(l,!0);s(l),j(()=>{F(l,"for",A()),m(C,I())}),V(p,l)};Yt(w,p=>{I()&&p(U)})}var u=a(w,2);te(u),$t(u,$()),s(f),j(p=>{F(u,"name",A()),F(u,"placeholder",Y()),F(u,"rows",X()),F(u,"style",p)},[()=>Ft({width:T(),height:L(),"min-width":T(),"max-width":T(),"text-wrap":P()?"wrap":"nowrap"})],Z),ee(u,J),Et("input",u,function(...p){var l;(l=tt())==null||l.apply(this,p)}),Et("keydown",u,function(...p){var l;(l=v())==null||l.apply(this,p)}),V(Q,f),Ct()}const se={title:"Tools: Proxmox Memory Info",comments:!0,categories:"tools proxmox software"};var ie=K('<tr><td></td><td> </td><td> </td><td> </td><td> </td><td style="text-align:right"> </td><td style="text-align:right"> </td></tr>'),ne=K('<tr><td></td><td> </td><td> </td><td>qemu</td><td> </td><td style="text-align:right"> </td><td style="text-align:right"> </td></tr>'),de=K('<p>Proxmox doesn’t have a built-in way to check if you’re overcommitting memory on your host. (That I know of?) This is a simple tool that gives you a summary of your memory usage using some shell commands and copypasta.</p> <h2 class="h2-1">Paste the output of…</h2> <!> <p>down here:</p> <!> <h2 class="h2-2">Paste the output of…</h2> <!> <p>down here:</p> <!> <h2 class="h2-3">Paste the output of…</h2> <!> <p>down here:</p> <!> <h2 class="h2-4">Results</h2> <table><thead><tr><th></th><th>VM ID</th><th>Name</th><th>Type</th><th>Status</th><th style="text-align:right">Current Mem.</th><th style="text-align:right">Max Mem.</th></tr></thead><tbody><!><!><tr><td><b>Totals</b></td><td></td><td></td><td></td><td></td><td style="text-align:right"><b> </b></td><td style="text-align:right"><b> </b></td></tr></tbody></table> <table><tbody><tr><th>Current System Memory Usage</th><td> </td></tr><tr><th>Memory Used by Host</th><td> </td></tr><tr><th>Max Potential Memory Use</th><td> </td></tr><tr><th>Total Host Memory</th><td> </td></tr><tr><th>Available for Provisioning</th><td> </td></tr></tbody></table>',1);function be(Q,o){const J=Qt(o,["children","$$slots","$$events","$$legacy"]);Ut(o,!1);let I=h(`      VMID NAME                 STATUS     MEM(MB)    BOOTDISK(GB) PID       
       100 fdsa                 running    4608              32.00 2826770   
       101 asdf                 running    8192              24.00 2828068   
       103 vcxz                 running    6144             170.00 4083340   
       106 zxcv                 running    512                0.00 2829680   
       107 rewq                 running    512                8.00 2828256   
       108 qwer                 running    10240            280.00 2828390   
       116 poiu                 stopped    1024              16.00 0         
       119 uiop                 running    2048              16.00 2828601   
`),A=h(`cpus: 4
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
`),T=h(`MemTotal:       48588200 kB
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
`);function L(n){return n.split(`
`).reduce((i,d)=>{const[e,c]=d.split(":").map(y=>y.trim());if(!e)return i;try{if(i[e]=parseFloat(c),isNaN(i[e]))throw new Error("Not a number");if(i[e].toString()!=c)throw new Error("Does not look like a number")}catch{i[e]=c}return i},{})}function X(n){const i=n.split(`
`).map(e=>e.trim()).filter(e=>e.length>0),d=i[0].split(/\s+/);return i.slice(1).map(e=>{const c=e.split(/\s+/);return d.reduce((y,z,G)=>(y[z]=c[G],y),{})})}function Y(n){let i=X(n),d={};return i.forEach(e=>{const c=e.VMID;delete e.VMID,e.MEM=parseFloat(e["MEM(MB)"])*1024*1024,delete e["MEM(MB)"],e.BOOTDISK=parseFloat(e["BOOTDISK(GB)"])*1024*1024*1024,delete e["BOOTDISK(GB)"],d[c]=e}),d}function $(n){const i=n.split("===").map(e=>e.trim()).filter(e=>e.length>0);let d={};return i.forEach(e=>{let c=L(e);const y=c.vmid;delete c.vmid,d[y]=c}),d}function tt(n){let i=L(n);for(const d in i){const e=i[d];typeof e=="string"?e.endsWith(" kB")?i[d]=parseInt(e.slice(0,-3))*1024:e.endsWith(" MB")?i[d]=parseInt(e.slice(0,-3))*1024*1024:i[d]=parseInt(e):i[d]=e}return i}function v(n){return(n/1024/1024/1024).toFixed(2)+" GB"}let P=h(),f=h(),w=h();function U(n){return n.reduce((i,d)=>i+d,0)}let u=h(),p=h(),l=h(),C=h(),N=h(),et=h();S(()=>t(I),()=>{x(P,Y(t(I)))}),S(()=>t(A),()=>{x(f,$(t(A)))}),S(()=>t(T),()=>{x(w,tt(t(T)))}),S(()=>(t(f),t(P)),()=>{x(u,U(Object.values(t(f)).map(n=>n.mem))+U(Object.values(t(P)).map(n=>n.STATUS=="running"?n.MEM:0)))}),S(()=>(t(f),t(P)),()=>{x(p,U(Object.values(t(f)).map(n=>n.maxmem))+U(Object.values(t(P)).map(n=>n.MEM)))}),S(()=>t(w),()=>{x(l,t(w).MemTotal-t(w).MemAvailable)}),S(()=>(t(l),t(u)),()=>{x(C,t(l)-t(u))}),S(()=>(t(C),t(p)),()=>{x(N,t(C)+t(p))}),S(()=>(t(w),t(N)),()=>{x(et,t(w).MemTotal-t(N))}),Wt(),Ht(),Xt(Q,Jt(()=>J,se,{children:(n,i)=>{var d=de(),e=a(Zt(d),4);vt(e,{lang:"bash",code:"qm list"});var c=a(e,4);kt(c,{wrap:!1,get value(){return t(I)},set value(g){x(I,g)},$$legacy:!0});var y=a(c,4);vt(y,{lang:"bash",code:"pct list | grep -v VMID | awk '{'{'} print $1 {'}'}' | xargs -I x sh -c 'pct status x -verbose && echo ==='"});var z=a(y,4);kt(z,{wrap:!1,get value(){return t(A)},set value(g){x(A,g)},$$legacy:!0});var G=a(z,4);vt(G,{lang:"bash",code:"cat /proc/meminfo"});var xt=a(G,4);kt(xt,{wrap:!1,get value(){return t(T)},set value(g){x(T,g)},$$legacy:!0});var at=a(xt,4),ht=a(r(at)),gt=r(ht);Dt(gt,1,()=>Object.entries(t(f)),Ot,(g,D)=>{let R=()=>t(D)[0],k=()=>t(D)[1];var b=ie(),B=a(r(b)),q=r(B,!0);s(B);var M=a(B),ot=r(M,!0);s(M);var O=a(M),lt=r(O,!0);s(O);var E=a(O),ut=r(E,!0);s(E);var H=a(E),pt=r(H,!0);s(H);var W=a(H),ct=r(W,!0);s(W),s(b),j((zt,Gt)=>{m(q,R()),m(ot,k().name),m(lt,k().type),m(ut,k().status),m(pt,zt),m(ct,Gt)},[()=>v(k().mem),()=>v(k().maxmem)],Z),V(g,b)});var _t=a(gt);Dt(_t,1,()=>Object.entries(t(P)),Ot,(g,D)=>{let R=()=>t(D)[0],k=()=>t(D)[1];var b=ne(),B=a(r(b)),q=r(B,!0);s(B);var M=a(B),ot=r(M,!0);s(M);var O=a(M,2),lt=r(O,!0);s(O);var E=a(O),ut=r(E,!0);s(E);var H=a(E),pt=r(H,!0);s(H),s(b),j((W,ct)=>{m(q,R()),m(ot,k().NAME),m(lt,k().STATUS),m(ut,W),m(pt,ct)},[()=>k().STATUS=="running"?v(k().MEM):0,()=>v(k().MEM)],Z),V(g,b)});var ft=a(_t),rt=a(r(ft),5),wt=r(rt),Rt=r(wt,!0);s(wt),s(rt);var yt=a(rt),bt=r(yt),qt=r(bt,!0);s(bt),s(yt),s(ft),s(ht),s(at);var Bt=a(at,2),Mt=r(Bt),st=r(Mt),St=a(r(st)),Vt=r(St,!0);s(St),s(st);var it=a(st),Tt=a(r(it)),jt=r(Tt,!0);s(Tt),s(it);var nt=a(it),Pt=a(r(nt)),Kt=r(Pt,!0);s(Pt),s(nt);var dt=a(nt),It=a(r(dt)),Lt=r(It,!0);s(It),s(dt);var At=a(dt),mt=a(r(At)),Nt=r(mt,!0);s(mt),s(At),s(Mt),s(Bt),j((g,D,R,k,b,B,q,M)=>{m(Rt,g),m(qt,D),m(Vt,R),m(jt,k),m(Kt,b),m(Lt,B),F(mt,"style",q),m(Nt,M)},[()=>v(t(u)),()=>v(t(p)),()=>v(t(l)),()=>v(t(C)),()=>v(t(N)),()=>v(t(w).MemTotal),()=>Ft({color:t(et)>0?"green":"hotpink"}),()=>v(t(et))],Z),V(n,d)},$$slots:{default:!0}})),Ct()}export{be as component};
