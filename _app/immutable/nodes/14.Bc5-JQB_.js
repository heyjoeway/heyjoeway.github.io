import{a as f,t as v}from"../chunks/disclose-version.B-guDTDr.js";import"../chunks/legacy.DkBb36tQ.js";import{s as a,f as _,c as s,r as n}from"../chunks/runtime.BVU0rH9e.js";import{h as e}from"../chunks/html.BOQzYzLL.js";var y=v('<p>Random notes for Linux. Primarily for my own reference.</p> <h1>Scripting</h1> <pre class="language-bash"><!></pre> <h1>Personal Utilities</h1> <pre class="language-bash"><!></pre> <h1>(My) Ideal Debian VM Setup</h1> <h2>Serial Access</h2> <pre class="language-bash"><!></pre> <h2>General</h2> <pre class="language-bash"><!></pre> <h3>With Docker</h3> <pre class="language-bash"><!></pre> <h3>With SMB Share</h3> <pre class="language-bash"><!></pre>',1);function D(k){var r=y(),t=a(_(r),4),u=s(t);e(u,()=>`<code class="language-bash"><span class="token comment"># Change Dir to Script Dir</span>
<span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">"<span class="token variable">$0</span>"</span><span class="token variable">)</span></span>"</span></code>`),n(t);var p=a(t,4),m=s(p);e(m,()=>`<code class="language-bash"><span class="token builtin class-name">echo</span> <span class="token string">"Deepseek API Key:"</span>
<span class="token builtin class-name">read</span> key_deepseek

<span class="token builtin class-name">cd</span> ~
<span class="token function">mkdir</span> bin
<span class="token builtin class-name">cd</span> bin

<span class="token function">curl</span> https://zyedidia.github.io/eget.sh <span class="token operator">|</span> <span class="token function">sh</span>
<span class="token builtin class-name">echo</span> <span class="token string">"1"</span> <span class="token operator">|</span> ./eget <span class="token parameter variable">-a</span> static.tar.gz zyedidia/micro
./eget sigoden/aichat

<span class="token builtin class-name">cd</span> ~

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">>></span> .bashrc</span>
export PATH=<span class="token environment constant">$PATH</span>:~/bin
export EDITOR=micro
alias s="aichat -e"
alias l="ls -la"
alias e="micro"
EOF</span>

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.config/aichat/
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">></span> ~/.config/aichat/config.yaml</span>
# see https://github.com/sigoden/aichat/blob/main/config.example.yaml

model: deepseek:deepseek-chat
clients:
- type: openai-compatible
  name: deepseek
  api_base: https://api.deepseek.com
  api_key: <span class="token variable">$key_deepseek</span>
EOF</span>

<span class="token builtin class-name">exec</span> <span class="token function">bash</span></code>`),n(p);var o=a(p,6),d=s(o);e(d,()=>`<code class="language-bash"><span class="token comment"># Enable serial console</span>
systemctl <span class="token builtin class-name">enable</span> serial-getty@ttyS0.service</code>`),n(o);var c=a(o,4),b=s(c);e(b,()=>`<code class="language-bash">timedatectl set-timezone America/New_York
<span class="token function">apt</span> update
<span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>
<span class="token comment"># Enable automatic upgrades</span>
<span class="token function">apt</span> <span class="token function">install</span> unattended-upgrades apt-listchanges <span class="token function">sudo</span> <span class="token function">curl</span> <span class="token function">git</span> <span class="token parameter variable">-y</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Unattended-Upgrade::Automatic-Reboot-WithUsers <span class="token entity" title="&quot;">"</span>true<span class="token entity" title="&quot;">"</span>;"</span> <span class="token operator">></span> /etc/apt/apt.conf.d/52unattended-upgrades-local</code>`),n(c);var l=a(c,4),h=s(l);e(h,()=>`<code class="language-bash"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">sh</span>
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">docker-compose</span>
<span class="token function">docker</span> run <span class="token parameter variable">--detach</span> <span class="token parameter variable">--name</span> watchtower <span class="token parameter variable">--restart</span> unless-stopped <span class="token parameter variable">--volume</span> /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower</code>`),n(l);var i=a(l,4),g=s(i);e(g,()=>`<code class="language-bash"><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DEBIAN_FRONTEND</span><span class="token operator">=</span>noninteractive
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NEEDRESTART_MODE</span><span class="token operator">=</span>l
<span class="token function">apt</span> <span class="token function">install</span> cifs-utils <span class="token parameter variable">-y</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Linux username: "</span>
<span class="token builtin class-name">read</span> linux_username
<span class="token builtin class-name">echo</span> <span class="token string">"SMB Username: "</span>
<span class="token builtin class-name">read</span> smb_username
<span class="token builtin class-name">echo</span> <span class="token string">"SMB Password: "</span>
<span class="token builtin class-name">read</span> smb_password
<span class="token function">mkdir</span> /media/share
<span class="token builtin class-name">printf</span> <span class="token string">"username=<span class="token variable">$smb_username</span><span class="token entity" title="&#92;n">&#92;n</span>password=<span class="token variable">$smb_password</span>"</span> <span class="token operator">></span> /root/sharecreds.txt
<span class="token builtin class-name">printf</span> <span class="token string">"<span class="token entity" title="&#92;n">&#92;n</span>//10.10.10.4/home /media/share cifs credentials=/root/sharecreds.txt,uid=<span class="token variable">$linux_username</span>,gid=<span class="token variable">$linux_username</span>,file_mode=0770,dir_mode=0770,noperm 0 0<span class="token entity" title="&#92;n">&#92;n</span>"</span> <span class="token operator">>></span> /etc/fstab
systemctl daemon-reload
adduser <span class="token variable">$linux_username</span>
<span class="token builtin class-name">echo</span> <span class="token string">"*/1 *  * * *  mount -a"</span> <span class="token operator">|</span> <span class="token function">crontab</span> - <span class="token comment"># Hack</span>
<span class="token function">mount</span> <span class="token parameter variable">-a</span></code>`),n(i),f(k,r)}export{D as component};
