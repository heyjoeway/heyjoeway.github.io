import{a as c,t as p}from"../chunks/disclose-version.pcXP8nla.js";import"../chunks/legacy.DLBMJjTQ.js";import{s as e,f as h,n as m}from"../chunks/runtime.CL55K65K.js";import{l as f,s as u}from"../chunks/props.BF2gUOm6.js";import{M as w}from"../chunks/MdsvexLayout.CZcMrbXw.js";import{C as t}from"../chunks/Code.Esccxh9n.js";const g={title:"Notes: Windows",categories:"software windows",comments:!0};var $=p('<p>Random notes for Windows. Primarily for my own reference. At some point I’ll talk about <a href="https://github.com/heyjoeway/joeydebloat" rel="nofollow">JoeyDebloat</a>.</p> <h1>Commands</h1> <!> <h1>Personal Utilities</h1> <p>(This assumes you ran JoeyDebloat first as it relies on some of the tools installed there.)</p> <!> <h1>Scripting</h1> <h2>Batch</h2> <!> <h1>Software</h1> <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://sysprogs.com/legacy/tools/srvman/" rel="nofollow">SrvMan</a></td><td>Create services, manage hidden services</td></tr><tr><td><a href="https://github.com/lostindark/DriverStoreExplorer" rel="nofollow">DriverStoreExplorer (Rapr)</a></td><td>Clean driverstore packages, reclaim space</td></tr><tr><td><a href="https://www.homedev.com.au/Free/PatchCleaner" rel="nofollow">PatchCleaner</a></td><td>Cleans up old/redundant installers, reclaim space</td></tr><tr><td><a href="https://geeks3d.com/furmark/" rel="nofollow">FurMark</a></td><td>GPU stress test</td></tr><tr><td><a href="https://www.mersenne.org/download/" rel="nofollow">Prime95</a></td><td>CPU/RAM stress test</td></tr><tr><td><a href="https://rufus.ie/en/" rel="nofollow">Rufus</a></td><td>Create USB install media</td></tr></tbody></table>',1);function S(n,s){const i=f(s,["children","$$slots","$$events","$$legacy"]);w(n,u(()=>i,g,{children:(l,y)=>{var a=$(),o=e(h(a),4);t(o,{lang:"powershell",code:`# VSCode Remote Tunneling
code tunnel

# WinSxS Cleanup
Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase
# [Source](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/clean-up-the-winsxs-folder?view=windows-11)

# System Volume Information Cleanup
wmic shadowcopy delete /nointeractive

# Edit Powershell profile (.bashrc equivalent)
notepad $profile`});var r=e(o,6);t(r,{lang:"powershell",code:`function Add-PermanentPathUser {
    param(
        [string]$Path
    )
    [Environment]::SetEnvironmentVariable(
        "Path",
        [Environment]::GetEnvironmentVariable(
            "Path",
            [EnvironmentVariableTarget]::USER
        ) + ";$Path",
        [EnvironmentVariableTarget]::USER
    )
}
$original_dir = Get-Location
$key_deepseek = Read-Host "Deepseek API Key"
cd ~
New-Item -Path .\bin -ItemType Directory -Force
Add-PermanentPathUser $(Resolve-Path ~\bin)
cd bin
eget sigoden/aichat
cd ~
if (!(Test-Path $profile)) {
    New-Item -Path $profile -ItemType File -Force    
}
Add-Content $profile @"
function s { aichat -e $args }
function l { ls $args }
function e { micro $args }
\`$ENV:EDITOR = $((Get-Command micro).Source)
"@
$aichat_dir = $($env:APPDATA) + "aichat"
New-Item -Path $aichat_dir -ItemType Directory -Force
cd $aichat_dir
Set-Content config.yaml @"
# see https://github.com/sigoden/aichat/blob/main/config.example.yaml
model: deepseek:deepseek-chat
clients:
- type: openai-compatible
  name: deepseek
  api_base: https://api.deepseek.com
  api_key: $key_deepseek
"@
cd $original_dir
. $profile
refreshenv
echo "You may need to restart your terminal for the changes to take effect."`});var d=e(r,6);t(d,{lang:"batch",code:`:: Change directory to script location in batch
cd /D "%~dp0"`}),m(4),c(l,a)},$$slots:{default:!0}}))}export{S as component};
