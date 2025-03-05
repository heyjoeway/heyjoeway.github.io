import{a as h,t as g}from"../chunks/disclose-version.B-guDTDr.js";import"../chunks/legacy.DkBb36tQ.js";import{s as e,f,c as a,r}from"../chunks/runtime.BVU0rH9e.js";import{h as t}from"../chunks/html.BOQzYzLL.js";var _=g('<p>Random notes for Windows. Primarily for my own reference.</p> <h1>Scripting</h1> <ul><li>Change Dir to Script Dir <ul><li><code>cd "$(dirname "$0")"</code></li></ul></li></ul> <h1>(My) Ideal Debian VM Setup</h1> <h2>Serial Access</h2> <pre class="language-undefined"><!></pre> <h2>General</h2> <pre class="language-undefined"><!></pre> <h3>With Docker</h3> <pre class="language-undefined"><!></pre> <h3>With SMB Share</h3> <pre class="language-undefined"><!></pre>',1);function k(c){var d=_(),o=e(f(d),10),i=a(o);t(i,()=>`<code class="language-undefined"># Enable serial console
systemctl enable serial-getty@ttyS0.service</code>`),r(o);var s=e(o,4),l=a(s);t(l,()=>`<code class="language-undefined">timedatectl set-timezone America/New_York
apt update
apt upgrade -y
# Enable automatic upgrades
apt install unattended-upgrades apt-listchanges sudo curl git -y
echo &quot;Unattended-Upgrade::Automatic-Reboot-WithUsers &quot;true&quot;;&quot; &gt; /etc/apt/apt.conf.d/52unattended-upgrades-local</code>`),r(s);var n=e(s,4),p=a(n);t(p,()=>`<code class="language-undefined">apt install -y curl
curl -fsSL https://get.docker.com | sh
apt install -y docker-compose
docker run --detach --name watchtower --restart unless-stopped --volume /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower</code>`),r(n);var u=e(n,4),m=a(u);t(m,()=>`<code class="language-undefined">#!/bin/bash
echo &quot;Linux username: &quot;
read linux_username
echo &quot;SMB Username: &quot;
read smb_username
echo &quot;SMB Password: &quot;
read smb_password
mkdir /media/share
apt install cifs-utils -y
printf &quot;username=$smb_username&#92;npassword=$smb_password&quot; &gt; /root/sharecreds.txt
printf &quot;&#92;n//10.10.10.4/home /media/share cifs credentials=/root/sharecreds.txt,uid=$linux_username,gid=$linux_username,file_mode=0770,dir_mode=0770,noperm 0 0&#92;n&quot; &gt;&gt; /etc/fstab
systemctl daemon-reload
adduser linux_username
echo &quot;*/1 *  * * *  mount -a&quot; | crontab - # Hack
mount -a</code>`),r(u),h(c,d)}export{k as component};
