import{a as h,t as u}from"../chunks/disclose-version.XqPykM76.js";import"../chunks/legacy.CRkFLlqN.js";import{s,f as d,c as m,r as f,n as w}from"../chunks/runtime.Dfx-lVnK.js";import{h as g}from"../chunks/html.DDLw55KY.js";import{I as n}from"../chunks/Image.BJQ05B4_.js";import{F as i}from"../chunks/Figure.BsANe76D.js";const y={avif:""+new URL("../assets/SCR-20230214-ext.C0wn6CjP.avif",import.meta.url).href+" 480w, "+new URL("../assets/SCR-20230214-ext.Ite8IPB8.avif",import.meta.url).href+" 1024w, "+new URL("../assets/SCR-20230214-ext.MrEKARlh.avif",import.meta.url).href+" 1920w",webp:""+new URL("../assets/SCR-20230214-ext.BKU7w6rP.webp",import.meta.url).href+" 480w, "+new URL("../assets/SCR-20230214-ext.BRYP795-.webp",import.meta.url).href+" 1024w, "+new URL("../assets/SCR-20230214-ext.DFUred-R.webp",import.meta.url).href+" 1920w",jpeg:""+new URL("../assets/SCR-20230214-ext.CUlPDHoJ.jpg",import.meta.url).href+" 480w, "+new URL("../assets/SCR-20230214-ext.Be1V5vGf.jpg",import.meta.url).href+" 1024w, "+new URL("../assets/SCR-20230214-ext.B1GPbZuw.jpg",import.meta.url).href+" 1920w"},b={src:""+new URL("../assets/SCR-20230214-ext.B1GPbZuw.jpg",import.meta.url).href,w:1920,h:973},R={sources:y,img:b},k={avif:""+new URL("../assets/SCR-20230214-f3i.BS0qAbIk.avif",import.meta.url).href+" 480w, "+new URL("../assets/SCR-20230214-f3i.BgjiWOw-.avif",import.meta.url).href+" 1024w, "+new URL("../assets/SCR-20230214-f3i.CijXcScL.avif",import.meta.url).href+" 1606w",webp:""+new URL("../assets/SCR-20230214-f3i.9AuXqX4r.webp",import.meta.url).href+" 480w, "+new URL("../assets/SCR-20230214-f3i.ln05aeHw.webp",import.meta.url).href+" 1024w, "+new URL("../assets/SCR-20230214-f3i.CjZk6hBb.webp",import.meta.url).href+" 1606w",jpeg:""+new URL("../assets/SCR-20230214-f3i.C_8ewBE6.jpg",import.meta.url).href+" 480w, "+new URL("../assets/SCR-20230214-f3i.DUbq_N-O.jpg",import.meta.url).href+" 1024w, "+new URL("../assets/SCR-20230214-f3i.XygfSR8P.jpg",import.meta.url).href+" 1606w"},S={src:""+new URL("../assets/SCR-20230214-f3i.XygfSR8P.jpg",import.meta.url).href,w:1606,h:840},v={sources:k,img:S};var C=u('<p>Happy Valentines Day. I’ve been trying to migrate from Forklift back to Finder since I’m not super happy with their progress and the issues that come with a non-native file manager, including but not limited to:</p> <ul><li>Getting nagged every boot</li> <li>Favorites not syncing when using a file picker</li> <li>Mediocre UI</li> <li>Remote integration not carrying over to other apps</li> <li>Needing to have two file managers in my dock at all times</li> <li>Window resizing being poor</li> <li>No support for per-folder view options (I think?)</li></ul> <p>One thing I did miss was having a toolbar button for showing hidden files.</p> <h1>The Keyboard Shortcut</h1> <p><code>CMD + SHIFT + .</code></p> <p>I’m going to be honest with you, I use this so infrequently that I don’t think there’s a chance in hell I’ll go 6 months without Googling this a couple times. And it’s different on Every. Single. OS. <code>Alt + .</code>, <code>Ctrl + H</code>, hell, why not <code>Ctrl + Shift + Alt + Super + F12 + 2</code> next?</p> <h1>The “Automatic” Method</h1> <p>Does having all your Finder windows killed every time you want to toggle hidden files sound fun? No? Well apparently Stack Overflow thinks so because it’s the only other suggestion I’ve seen. I’m not even going to bother reposting it here because I think it’s that fucking awful. That is not a solution.</p> <h1>Why Did They Name The App “Shortcuts”</h1> <p>Oh yeah, Apple added that “Shortcuts” app huh? Too bad nobody really seems to care or talk about it, because it’s actually pretty decent. It’s also really hard to find anything relating to it online because the name is absolutely horrible.</p> <blockquote><p>Did you mean?: Keyboard shortcuts</p></blockquote> <p>Unfortunately, it ALSO has no ability to toggle hidden files. Or does it? We DO have the ability to run AppleScript, and combining a little bit of every approach, we get the following:</p> <pre class="language-applescript"><!></pre> <!> <p>You’ll need to give both Shortcuts and <code>siriactionsd</code> Accessibility permissions. I think there might also be something you need to enable to use AppleScript. <a href="https://www.icloud.com/shortcuts/2d73e23025fd4a0e8f78c55600e92a04" rel="nofollow">Here’s a pre-made shortcut if you’d like.</a></p> <h1>“But you said you wanted a toolbar button!”</h1> <p>Here’s a secret: you can turn any shortcut into a <code>.app</code> by right clicking on it and selecting “Add to Dock”. You’ll likely want to remove it from the dock after, and you’ll be able to find it in <code>~/Applications</code>. I moved mine into a subfolder I named “Finder Toolbar”.</p> <p>Here’s ANOTHER secret: you can add any <code>.app</code> to your Finder toolbar. Simply enter customization mode and drag the app in.</p> <!> <p>Apple sure does love to include useful features and never explain them, huh?</p>',1);function F(r){var o=C(),e=s(d(o),24),p=m(e);g(p,()=>`<code class="language-applescript"><span class="token keyword">on</span> run <span class="token punctuation">&#123;</span>input<span class="token punctuation">,</span> parameters<span class="token punctuation">&#125;</span>
	activate <span class="token class-name">application</span> <span class="token string">"Finder"</span>
	<span class="token keyword">tell</span> <span class="token class-name">application</span> <span class="token string">"System Events"</span> <span class="token keyword">to</span> keystroke <span class="token string">"."</span> using <span class="token punctuation">&#123;</span>command down<span class="token punctuation">,</span> shift down<span class="token punctuation">&#125;</span>
	<span class="token keyword">return</span> input
<span class="token keyword">end</span> run</code>`),f(e);var a=s(e,2);i(a,{children:(t,c)=>{n(t,{src:R})},$$slots:{default:!0}});var l=s(a,10);i(l,{children:(t,c)=>{n(t,{src:v})},$$slots:{default:!0}}),w(2),h(r,o)}export{F as component};