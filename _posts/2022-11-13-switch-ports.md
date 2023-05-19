---
layout: post
title:  "My Switch Ports, and the Journey"
date:   2022-11-13
categories: games programming life
last_modified_at: 2022-11-13
comments: true
---
I was considering making this intro a lot more long winded, but instead I'll just say this: my motivation for porting these games to the Switch mostly came from wanting to play them there myself. At the time I ported these games, the Switch was the best option to play these games on for several reasons:

- Easy to homebrew (if you have a vulnerable unit)
- Dockable (obvious)
- Powerful enough to run ports without extensive optimization
- Good UI
- Good controllers
- Lightweight
- Decent battery

Obviously, I could've just put these games on a laptop and played them there, or used an Android phone and a controller, or whatever else, but it just doesn't fit the bill of having a console-like experience. The Switch is in my top 3 consoles with the GameCube. So, what did I want on there?

## Sonic Robo Blast 2

<figure><div>
    {% include img.html src="20221114185059_1.jpg" %}
    {% include img.html src="20221114185137_1.jpg" %}
</div></figure>

To people out of the know, this fangame has been in development for roughly 24 years. Twenty. Four. It's based on Doom of all things (can't recall which source port off the top of my head) and is unexpectedly super fun to play. I've followed the game since I was probably like 7 or 8 and wanted a portable version ever since. At the time I ported it, the best options were to play it on something like a GPD Win, OpenPandora, or a PSP, all pretty lacking consoles for the modern age. This was also before an Android or iOS port.

carstene1ns was responsible for the original port. They released a proof-of-concept port that ran at a pretty terrible framerate. I decided to attempt building their port myself, and found that the poor framerate wasn't their fault at all. In the time between our builds, the Switch port of SDL2 had been updated to where it just... worked. So, I picked up maintenance of the port and added some more quality of life things:

- Internet connectivity
    - Fixed on accident while adding nxlink support!
- On-screen keyboard support
- Ability to run in background (to avoid people essentially lag-switching servers)

In addition to C programming, these ports required knowledge of SDL2, libnx, and GNU Make. At the time, I had limited knowledge of each. By the time I was done, I became fairly affluent in each. Learning to read through git history to pick out breaking changes was an essential skill needed to accomplish this as well. All in all, it was a great learning experience and the gateway to all my other ports.

My only big regret was that I never got GL working. I made a few attempts, but the sheer size of the codebase, uncertainty of the state of the DevkitPro ports, and layers of complexity involved made it a time sink I wasn't ready to take on.


## Sonic Robo Blast 2 Kart

<figure><div>
    {% include img.html src="20221114191553_1.jpg" %}
    {% include img.html src="20221114191630_1.jpg" %}
</div></figure>

I could try and explain how a mod of a mod of Doom turned into a kart racer, but instead I'll just say that it was a fairly simple ordeal to port changes from SRB2 here. Not much else to say honestly. Play SRB2Kart.

## Sonic 1, 2, and CD Decompilations

<figure class="figure-2col"><div>
    {% include img.html src="20221114185830_1.jpg" %}
    {% include img.html src="20221114185444_1.jpg" %}
    {% include img.html src="20221114185608_1.jpg" %}
    {% include img.html src="20221114185539_1.jpg" %}
</div></figure>

Sonic CD got a remake from the ground up in 2011, and Sonic 1 and 2 followed suit in 2013. These were all done with Christian Whitehead's (taxman's) Retro Engine. I don't know the full details of how, but they all got decompiled in 2021 by RubberDuckyCooly and RMGRich (and probably a few others, sorry if I didn't list you guys here). At this point, the DevkitPro Switch portlibs had matured to the point where I could mostly just create a Makefile for them and they were good to go. A few fixes to input were needed here and there, along with some cflag changes. These ports were feature-complete, as far as I'm aware.

## Sonic 3 AIR

<figure><div>
    {% include img.html src="20221114185702_1.jpg" %}
    {% include img.html src="20221114185646_1.jpg" %}
</div></figure>

Sonic 3 AIR is a fan-done translation of the original Sonic 3 and Knuckles source code into a custom engine and scripting language, done by the legendary Eukaryot. I reached out to them before the source code for this recreation was public, and they agreed to give me access for the production of a Switch port. I got it up and running, feature-complete in about a week, including hardware rendering.

# Why I Left, and an Apology

This year has been filled with a lot of grief, anxiety, and pain. I had to make a lot of changes to find happiness. I'll probably write more about this towards the end of the year. One of those change included dropping maintenance of my Switch port to make time for things that mattered more to me: friends, family, my studies, and my career goals.

On top of that, the whole motivation for wanting these ports had been torn to shreds... remember how I mentioned that the Switch and the GameCube were two of my favorite consoles? You may have also noticed all these screenshots are 16:10. Well, I've got something else sitting at number one now...

<figure><div>
    {% include img.html src="IMG_2002.jpg" %}
</div></figure>

Yup. As soon as I got the thing in my hands, my motivation for Switch development honestly went out the window.

- Similar form factor to the Switch
- Better feeling controls
- Easier to "homebrew" (I mean, it's just Arch underneath)
- Don't have to develop dedicated ports
- Plays literally everything else I want to play minus (online) Switch games

Having grown up on homebrew and fan projects, I know how much it sucks to see something you like go unmaintained. Being on the other side of the fence now, I can see why so many people go ghost mode. I feel a bit guilty for dropping everything, but I need to change focus until I am happy.