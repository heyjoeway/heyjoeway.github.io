import{a as h,t as u}from"../chunks/disclose-version.pcXP8nla.js";import"../chunks/legacy.DLBMJjTQ.js";import{s as e,f as g}from"../chunks/runtime.CL55K65K.js";import{l as b,s as _}from"../chunks/props.BF2gUOm6.js";import{M as f}from"../chunks/MdsvexLayout.CZcMrbXw.js";import{C as a}from"../chunks/Code.Esccxh9n.js";const k={title:"Notes: Linux",categories:"software linux",comments:!0};var y=u("<p>Random notes for Linux. Primarily for my own reference.</p> <h1>Scripting</h1> <!> <h1>Personal Utilities</h1> <!> <h1>(My) Ideal Debian VM Setup</h1> <h2>Serial Access</h2> <!> <h2>General</h2> <!> <h3>With Docker</h3> <!> <h3>With SMB Share</h3> <!>",1);function A(c,d){const l=b(d,["children","$$slots","$$events","$$legacy"]);f(c,_(()=>l,k,{children:(p,$)=>{var t=y(),s=e(g(t),4);a(s,{lang:"bash",code:`# Change Dir to Script Dir
cd "$(dirname "$0")"`});var r=e(s,4);a(r,{lang:"bash",code:`echo "Deepseek API Key:"
read key_deepseek
cd ~
mkdir bin
cd bin
curl https://zyedidia.github.io/eget.sh | sh
echo "1" | ./eget -a static.tar.gz zyedidia/micro
./eget sigoden/aichat
cd ~
cat << EOF >> .bashrc
export PATH=$PATH:~/bin
export EDITOR=micro
alias ai="aichat -e"
alias l="ls -la"
alias e="micro"
EOF
mkdir -p ~/.config/aichat/
cat << EOF > ~/.config/aichat/config.yaml
# see https://github.com/sigoden/aichat/blob/main/config.example.yaml
model: deepseek:deepseek-chat
clients:
- type: openai-compatible
  name: deepseek
  api_base: https://api.deepseek.com
  api_key: $key_deepseek
EOF
exec bash`});var o=e(r,6);a(o,{lang:"bash",code:`# Enable serial console
systemctl enable serial-getty@ttyS0.service`});var i=e(o,4);a(i,{lang:"bash",code:`timedatectl set-timezone America/New_York
apt update
apt upgrade -y
# Enable automatic upgrades
apt install unattended-upgrades apt-listchanges sudo curl git -y
echo "Unattended-Upgrade::Automatic-Reboot-WithUsers "true";" > /etc/apt/apt.conf.d/52unattended-upgrades-local`});var n=e(i,4);a(n,{lang:"bash",code:`curl -fsSL https://get.docker.com | sh
apt install -y docker-compose
docker run --detach --name watchtower --restart unless-stopped --volume /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower`});var m=e(n,4);a(m,{lang:"bash",code:`#!/bin/bash
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
printf "username=$smb_username
password=$smb_password" > /root/sharecreds.txt
printf "
//10.10.10.4/home /media/share cifs credentials=/root/sharecreds.txt,uid=$linux_username,gid=$linux_username,file_mode=0770,dir_mode=0770,noperm 0 0
" >> /etc/fstab
systemctl daemon-reload
adduser $linux_username
echo "*/1 *  * * *  mount -a" | crontab - # Hack
mount -a`}),h(p,t)},$$slots:{default:!0}}))}export{A as component};
