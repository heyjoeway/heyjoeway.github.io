import{a as m,t as p}from"../chunks/disclose-version.COfjB1Z8.js";import"../chunks/legacy.CO0tqMOo.js";import{s as e,f as c,n as h}from"../chunks/runtime.CB7vMNxi.js";import{l as f,s as g}from"../chunks/props.CWm5ceOU.js";import{M as u}from"../chunks/MdsvexLayout.BpAqaaRH.js";import{C as t}from"../chunks/Code.ltmLbEse.js";const w={title:"Notes: Windows",categories:"software windows",comments:!0};var v=p('<p>Random notes for Windows. Primarily for my own reference. At some point I’ll talk about <a href="https://github.com/heyjoeway/joeydebloat" rel="nofollow">JoeyDebloat</a>.</p> <h1>Commands</h1> <!> <h1>Personal Utilities</h1> <p>(This assumes you ran JoeyDebloat first as it relies on some of the tools installed there.)</p> <!> <h1>Scripting</h1> <h2>Batch</h2> <!> <h1>Software</h1> <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://sysprogs.com/legacy/tools/srvman/" rel="nofollow">SrvMan</a></td><td>Create services, manage hidden services</td></tr><tr><td><a href="https://github.com/lostindark/DriverStoreExplorer" rel="nofollow">DriverStoreExplorer (Rapr)</a></td><td>Clean driverstore packages, reclaim space</td></tr><tr><td><a href="https://www.homedev.com.au/Free/PatchCleaner" rel="nofollow">PatchCleaner</a></td><td>Cleans up old/redundant installers, reclaim space</td></tr><tr><td><a href="https://geeks3d.com/furmark/" rel="nofollow">FurMark</a></td><td>GPU stress test</td></tr><tr><td><a href="https://www.mersenne.org/download/" rel="nofollow">Prime95</a></td><td>CPU/RAM stress test</td></tr><tr><td><a href="https://rufus.ie/en/" rel="nofollow">Rufus</a></td><td>Create USB install media</td></tr></tbody></table>',1);function R(n,i){const s=f(i,["children","$$slots","$$events","$$legacy"]);u(n,g(()=>s,w,{children:(d,y)=>{var a=v(),o=e(c(a),4);t(o,{lang:"powershell",code:`# VSCode Remote Tunneling
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
Add-PermanentPathUser $(Resolve-Path ~\\bin)
cd bin
Invoke-WebRequest https://github.com/zyedidia/eget/releases/download/v1.3.4/eget-1.3.4-windows_amd64.zip -OutFile eget.zip
Expand-Archive eget.zip
mv .\\eget\\eget-1.3.4-windows_amd64\\eget.exe .
Remove-Item -Recurse eget
Remove-Item eget.zip
.\\eget zyedidia/eget
.\\eget sigoden/aichat
.\\eget zyedidia/micro
cd ~
if (!(Test-Path $profile)) {
    New-Item -Path $profile -ItemType File -Force    
}
Add-Content $profile @"
function ai { aichat -e "$args" }
function l { ls $args }
function e { micro $args }
\`$ENV:EDITOR = "$(Resolve-Path ~\\bin\\micro.exe)"
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
echo "You may need to restart your terminal for the changes to take effect."`});var l=e(r,6);t(l,{lang:"batch",code:`:: Change directory to script location in batch
cd /D "%~dp0"`}),h(4),m(d,a)},$$slots:{default:!0}}))}export{R as component};
