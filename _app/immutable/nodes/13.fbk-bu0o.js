import{a as c,t as d}from"../chunks/disclose-version.B-guDTDr.js";import"../chunks/legacy.DkBb36tQ.js";import{s as n,f as m,c as t,r as e}from"../chunks/runtime.BVU0rH9e.js";import{h as i}from"../chunks/html.BOQzYzLL.js";var f=d('<p>These are old notes from like 2022, but the process is probably still mostly the same. Let me know if there are any issues.</p> <ol><li><a href="https://techdocs.akamai.com/cloud-computing/docs/copy-a-disk-over-ssh" rel="nofollow">Download your Linode’s disk image.</a></li> <li><a href="https://pve.proxmox.com/wiki/Migrate_to_Proxmox_VE#Import_Disk" rel="nofollow">Import the disk image to an existing VM in Proxmox.</a> Make sure the VM is configured for BIOS boot, not UEFI.</li></ol> <p>Our Linode image only contains the system partition, that is to say what is normally <code>/dev/sda1</code> is instead the entire disk, <code>/dev/sda</code>. We’ll need to copy the entire disk’s data to a partition on a new disk so that we can fit a partition layout and therefore a bootloader.</p> <ol start="3"><li>Create another disk of the same size and attach it to the VM.</li> <li>Download, attach, and boot <a href="https://gparted.org/download.php" rel="nofollow">GParted Live</a>.</li> <li>Initialize partition table of other disk using MBR format.</li> <li>Create a partition filling the entire disk and apply the changes.</li> <li>Time for the terminal!</li></ol> <pre class="language-bash"><!></pre> <ol start="8"><li>Remove the assigned ISO and original system disk image, then boot. You should be able to get to your normal shell.</li> <li>More terminal!</li></ol> <pre class="language-bash"><!></pre>',1);function b(l){var o=f(),a=n(m(o),8),p=t(a);i(p,()=>`<code class="language-bash"><span class="token comment"># Get root shell</span>
<span class="token function">sudo</span> <span class="token function">su</span>
<span class="token comment"># Copy the data!</span>
<span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/sda <span class="token assign-left variable">of</span><span class="token operator">=</span>/dev/sdb1 <span class="token assign-left variable">status</span><span class="token operator">=</span>progress
<span class="token comment"># Time to do some config editing...</span>
<span class="token function">mount</span> /dev/sdb1 /mnt
<span class="token comment"># In fstab, comment out the line pointing to the swap partition.</span>
<span class="token function">nano</span> /mnt/etc/fstab
<span class="token comment"># Remove the command line parameters from the GRUB config.</span>
<span class="token function">nano</span> /mnt/etc/default/grub
<span class="token comment"># Install the GRUB bootloader</span>
grub <span class="token function">install</span> --boot-directory<span class="token operator">=</span>/mnt/boot /dev/sdb
<span class="token comment"># The output it provides is gonna be a bit screwed up for now.</span>
<span class="token comment"># Edit the file below to replace all &#96;root=/dev/sda&#96; with &#96;root=/dev/sda1&#96;</span>
<span class="token function">nano</span> /mnt/boot/grub/grub.cfg

poweroff</code>`),e(a);var s=n(a,4),r=t(s);i(r,()=>`<code class="language-bash"><span class="token comment"># Get root again...</span>
<span class="token function">sudo</span> <span class="token function">su</span>
<span class="token comment"># Fix the bootloader for real this time</span>
<span class="token function">update-grub</span>
<span class="token comment"># Fix your network interfaces (https://wiki.debian.org/NetworkConfiguration)</span>
<span class="token function">nano</span> /etc/network/interfaces
<span class="token comment"># Fix your APT sources by replacing all instances of &#96;mirrors.linode.com&#96; with &#96;deb.debian.org&#96;</span>
<span class="token function">nano</span> /etc/apt/sources.list
<span class="token comment"># Empty this file and fix your DNS nameservers. You should probably point it to your router if you don't know what you want to put here.</span>
<span class="token function">nano</span> /etc/resolv.conf
<span class="token comment"># Off to the races!</span>
<span class="token function">apt</span> update
<span class="token function">apt</span> upgrade</code>`),e(s),c(l,o)}export{b as component};
