import{a as i,t as p}from"../chunks/disclose-version.CBUs_B8x.js";import"../chunks/legacy.CXk2T6ua.js";import{s as o,f as h,n as c}from"../chunks/runtime.4owrh3Pb.js";import{l as m,s as f}from"../chunks/props.BA171H9w.js";import{M as w}from"../chunks/MdsvexLayout.Ca2AZKMl.js";import{C as r}from"../chunks/Code.BWfT3Zwj.js";const u={title:"Notes: Windows",categories:"software windows",comments:!0};var g=p('<p>Random notes for Windows. Primarily for my own reference. At some point I’ll talk about <a href="https://github.com/heyjoeway/joeydebloat" rel="nofollow">JoeyDebloat</a>.</p> <h1 class="h1-1">Commands</h1> <!> <h1 class="h1-2">Scripting</h1> <h2 class="h2-1">Batch</h2> <!> <h1 class="h1-3">Software</h1> <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://sysprogs.com/legacy/tools/srvman/" rel="nofollow">SrvMan</a></td><td>Create services, manage hidden services</td></tr><tr><td><a href="https://github.com/lostindark/DriverStoreExplorer" rel="nofollow">DriverStoreExplorer (Rapr)</a></td><td>Clean driverstore packages, reclaim space</td></tr><tr><td><a href="https://www.homedev.com.au/Free/PatchCleaner" rel="nofollow">PatchCleaner</a></td><td>Cleans up old/redundant installers, reclaim space</td></tr><tr><td><a href="https://geeks3d.com/furmark/" rel="nofollow">FurMark</a></td><td>GPU stress test</td></tr><tr><td><a href="https://www.mersenne.org/download/" rel="nofollow">Prime95</a></td><td>CPU/RAM stress test</td></tr><tr><td><a href="https://rufus.ie/en/" rel="nofollow">Rufus</a></td><td>Create USB install media</td></tr></tbody></table>',1);function x(a,s){const l=m(s,["children","$$slots","$$events","$$legacy"]);w(a,f(()=>l,u,{children:(n,v)=>{var e=g(),t=o(h(e),4);r(t,{lang:"powershell",code:`# VSCode Remote Tunneling
code tunnel

# WinSxS Cleanup
Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase
# [Source](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/clean-up-the-winsxs-folder?view=windows-11)

# System Volume Information Cleanup
wmic shadowcopy delete /nointeractive

# Edit Powershell profile (.bashrc equivalent)
notepad $profile`});var d=o(t,6);r(d,{lang:"batch",code:`:: Change directory to script location in batch
cd /D "%~dp0"`}),c(4),i(n,e)},$$slots:{default:!0}}))}export{x as component};
