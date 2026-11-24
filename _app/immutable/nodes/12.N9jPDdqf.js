import{a as p,t as h}from"../chunks/disclose-version.BHkXeLHK.js";import"../chunks/legacy.qqXksNzz.js";import{s as e,f as u}from"../chunks/runtime.BEdS-Pg2.js";import{l as _,s as g}from"../chunks/props.BcLRfbJK.js";import{M as f}from"../chunks/MdsvexLayout.Cs0GRQMy.js";import{C as a}from"../chunks/Code.BnsfDqX4.js";const b={title:"Notes: Linux",categories:"software linux",comments:!0};var $=h('<p>Random notes for Linux. Primarily for my own reference.</p> <h1 class="h1-1">Scripting</h1> <!> <h1 class="h1-2">(My) Ideal Debian VM Setup</h1> <h2 class="h2-1">Serial Access</h2> <!> <h2 class="h2-2">General</h2> <!> <h3 class="h3-1">With Docker</h3> <!> <h3 class="h3-2">With SMB Share</h3> <!>',1);function w(i,d){const c=_(d,["children","$$slots","$$events","$$legacy"]);f(i,g(()=>c,b,{children:(l,x)=>{var s=$(),t=e(u(s),4);a(t,{lang:"bash",code:`# Change Dir to Script Dir
cd "$(dirname "$0")"`});var r=e(t,6);a(r,{lang:"bash",code:`# Enable serial console
systemctl enable serial-getty@ttyS0.service`});var o=e(r,4);a(o,{lang:"bash",code:`timedatectl set-timezone America/New_York
apt update
apt upgrade -y
# Enable automatic upgrades
apt install unattended-upgrades apt-listchanges sudo curl git -y
echo "Unattended-Upgrade::Automatic-Reboot-WithUsers \\"true\\";" > /etc/apt/apt.conf.d/52unattended-upgrades-local`});var n=e(o,4);a(n,{lang:"bash",code:"curl -fsSL https://get.docker.com | sh"});var m=e(n,4);a(m,{lang:"bash",code:`#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
export NEEDRESTART_MODE=l
apt install cifs-utils -y
echo "Linux username: "
read linux_username
echo "SMB Username: "
read smb_username
echo "SMB Password: "
read smb_password
mkdir /media/share
printf "username=$smb_username\\npassword=$smb_password" > /root/sharecreds.txt
printf "\\n//10.10.10.4/home /media/share cifs credentials=/root/sharecreds.txt,uid=$linux_username,gid=$linux_username,file_mode=0770,dir_mode=0770,noperm 0 0\\n" >> /etc/fstab
systemctl daemon-reload
adduser $linux_username
echo "*/1 *  * * *  mount -a" | crontab - # Hack
mount -a`}),p(l,s)},$$slots:{default:!0}}))}export{w as component};
