import{a as m,t as u}from"../chunks/disclose-version.D_1LDZzU.js";import"../chunks/legacy.C2vTGYZR.js";import{s as e,f as g}from"../chunks/runtime.IuhaTYL2.js";import{l as b,s as _}from"../chunks/props.wXQSvOuq.js";import{M as $}from"../chunks/MdsvexLayout.D5nZddVV.js";import{C as a}from"../chunks/Code.CRmZZ-LJ.js";const f={title:"Notes: Linux",categories:"software linux",comments:!0};var x=u('<p>Random notes for Linux. Primarily for my own reference.</p> <h1 class="h1-1">Scripting</h1> <!> <h1 class="h1-2">Personal Utilities</h1> <!> <h1 class="h1-3">(My) Ideal Debian VM Setup</h1> <h2 class="h2-1">Serial Access</h2> <!> <h2 class="h2-2">General</h2> <!> <h3 class="h3-1">With Docker</h3> <!> <h3 class="h3-2">With SMB Share</h3> <!>',1);function R(c,d){const l=b(d,["children","$$slots","$$events","$$legacy"]);$(c,_(()=>l,f,{children:(p,k)=>{var s=x(),r=e(g(s),4);a(r,{lang:"bash",code:`# Change Dir to Script Dir
cd "$(dirname "$0")"`});var t=e(r,4);a(t,{lang:"bash",code:`echo "Deepseek API Key:"
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
fixperms() {
  dir="$1"
  user="$2"
  group="$3"

  [ -d "$dir" ] || {
    echo "usage: fixperms <dir> <user> <group>" >&2
    return 1
  }

  chown -R "$user" "$dir" &&
  chgrp -R "$group" "$dir" &&
  chmod -R u+rwx,g+rwx,o-rwx "$dir"
}
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
exec bash`});var o=e(t,6);a(o,{lang:"bash",code:`# Enable serial console
systemctl enable serial-getty@ttyS0.service`});var i=e(o,4);a(i,{lang:"bash",code:`timedatectl set-timezone America/New_York
apt update
apt upgrade -y
# Enable automatic upgrades
apt install unattended-upgrades apt-listchanges sudo curl git -y
echo "Unattended-Upgrade::Automatic-Reboot-WithUsers "true";" > /etc/apt/apt.conf.d/52unattended-upgrades-local`});var n=e(i,4);a(n,{lang:"bash",code:`curl -fsSL https://get.docker.com | sh
docker run --detach --name watchtower --restart unless-stopped --volume /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower`});var h=e(n,4);a(h,{lang:"bash",code:`#!/bin/bash
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
mount -a`}),m(p,s)},$$slots:{default:!0}}))}export{R as component};
