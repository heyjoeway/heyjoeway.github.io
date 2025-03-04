import{a as p,t as h}from"../chunks/disclose-version.B-guDTDr.js";import"../chunks/legacy.DkBb36tQ.js";import{s as a,f as m,c as i,r}from"../chunks/runtime.BVU0rH9e.js";import{h as n}from"../chunks/html.BOQzYzLL.js";var c=h('<p>These are old notes from like 2022, but the process is probably still mostly the same. Let me know if there are any issues.</p> <ol><li><a href="https://techdocs.akamai.com/cloud-computing/docs/copy-a-disk-over-ssh" rel="nofollow">Download your Linode’s disk image.</a></li> <li><a href="https://pve.proxmox.com/wiki/Migrate_to_Proxmox_VE#Import_Disk" rel="nofollow">Import the disk image to an existing VM in Proxmox.</a> Make sure the VM is configured for BIOS boot, not UEFI.</li></ol> <p>Our Linode image only contains the system partition, that is to say what is normally <code>/dev/sda1</code> is instead the entire disk, <code>/dev/sda</code>. We’ll need to copy the entire disk’s data to a partition on a new disk so that we can fit a partition layout and therefore a bootloader.</p> <ol start="3"><li>Create another disk of the same size and attach it to the VM.</li> <li>Download, attach, and boot <a href="https://gparted.org/download.php" rel="nofollow">GParted Live</a>.</li> <li>Initialize partition table of other disk using MBR format.</li> <li>Create a partition filling the entire disk and apply the changes.</li> <li>Time for the terminal!</li></ol> <pre class="language-undefined"><!></pre> <ol start="8"><li>Remove the assigned ISO and original system disk image, then boot. You should be able to get to your normal shell.</li> <li>More terminal!</li></ol> <pre class="language-undefined"><!></pre>',1);function w(s){var o=c(),e=a(m(o),8),l=i(e);n(l,()=>`<code class="language-undefined"># Get root shell
sudo su
# Copy the data!
dd if=/dev/sda of=/dev/sdb1 status=progress
# Time to do some config editing...
mount /dev/sdb1 /mnt
# In fstab, comment out the line pointing to the swap partition.
nano /mnt/etc/fstab
# Remove the command line parameters from the GRUB config.
nano /mnt/etc/default/grub
# Install the GRUB bootloader
grub install --boot-directory=/mnt/boot /dev/sdb
# The output it provides is gonna be a bit screwed up for now.
# Edit the file below to replace all &#96;root=/dev/sda&#96; with &#96;root=/dev/sda1&#96;
nano /mnt/boot/grub/grub.cfg

poweroff</code>`),r(e);var t=a(e,4),d=i(t);n(d,()=>`<code class="language-undefined"># Get root again...
sudo su
# Fix the bootloader for real this time
update-grub
# Fix your network interfaces (https://wiki.debian.org/NetworkConfiguration)
nano /etc/network/interfaces
# Fix your APT sources by replacing all instances of &#96;mirrors.linode.com&#96; with &#96;deb.debian.org&#96;
nano /etc/apt/sources.list
# Empty this file and fix your DNS nameservers. You should probably point it to your router if you don&#39;t know what you want to put here.
nano /etc/resolv.conf
# Off to the races!
apt update
apt upgrade</code>`),r(t),p(s,o)}export{w as component};
