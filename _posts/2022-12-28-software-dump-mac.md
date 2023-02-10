---
layout: post
title:  "The Software Dump Part 1: macOS"
date:   2022-12-28
categories: software life macos
last_modified_at: 2023-02-28
comments: true
---
You know those shitty tabloid articles you find on Google when you try to find software recommendations, all of them having the same 10 programs over and over? Yeah, this isn't another one of those. These are all programs I've spent a good deal of time with and will be giving genuine opinions on. Let's get to it.

# Window Management

For all the polish macOS has, its window management has been complete and utter *shit* for its entire life. These make it a little bit better.

## Rectangle

- **Price:** Free, with pro version upgrade
- **OSS:** Yes, except pro (<https://github.com/rxhanson/Rectangle>)
- **Download:** <https://rectangleapp.com/>

Aero Snap for macOS, plus some extra snapping areas. That's about it to me. It has some other features that I've never really messed with or cared about. Just install it already.

## Swish

- **Price:** $16, trial available
- **OSS:** No
- **Download:** <https://highlyopinionated.co/swish/>

Lets you move/tile windows using trackpad gestures. Honestly so vital to window management when not docked that I wish Apple would buy them up and include it by default. Absolutely worth the asking price.

# Filesystem

## Disk Inventory X

- **Price:** Free
- **OSS:** Yes (<https://gitlab.com/tderlien/disk-inventory-x>)
- **Download:** <https://www.derlien.com/>

Ever used WinDirStat? It's that. Basically, let's you locate what's taking up disk space more easily.

## ForkLift

- **Price:** Free, with pro version upgrade
- **OSS:** No
- **Download:** <https://binarynights.com/>

Better file manager. Dual panes, remote connections (including SFTP, FTP, GDrive, etc.), better view modes, "auto clean-up" (aka just listing files like a normal file manager does, yes I am still mad at Finder for this) and some other smaller features. The free version is supposedly a trial but I think it's just nagware like WinRAR. I have this as my default file manager.

## OpenMTP

- **Price:** Free
- **OSS:** Yes (<https://github.com/ganeshrvel/openmtp>)
- **Download:** <https://openmtp.ganeshrvel.com/>

Lets you access MTP devices (Android) under macOS. I sure do love meaningless segmentation of stuff that doesn't need to be segmented.

# Internet

## Canary Mail

- **Price:** Free, with pro version upgrade
- **OSS:** No
- **Download:** <https://canarymail.io/>

The built-mail app with a few more features and a bit more customization. Honestly, if the default mail app does what you want it to, just stick with it.

## NetNewsWire

- **Price:** Free
- **OSS:** Yes (<https://github.com/Ranchero-Software/NetNewsWire>)
- **Download:** <https://netnewswire.com/>

Native RSS reader.

# Media

## IINA

- **Price:** Free
- **OSS:** Yes (<https://github.com/iina/iina>)
- **Download:** <https://iina.io/>

A media player that gets out of the way of the content. Much better than QuickTime or even VLC.

## Logic Pro

- **Price:** $200
- **OSS:** ...no.
- **Download:** <https://www.apple.com/logic-pro/>

The Mac DAW. After trying other DAWs (mostly FL Studio) this one just clicked. The UI is great in the realm of audio work and gets shit done. Now I will plug my SoundCloud because I can use it as an example of how I've been using it: <https://soundcloud.com/heyjoeway>

If you're not ready to pay the price or sail the seas, give GarageBand a shot. It's basically the trial version of Logic and has a very similar UI.

# Images

## Pixea

- **Price:** Free, with pro version upgrade
- **OSS:** No
- **Download:** <https://www.imagetasks.com/pixea/>

Nice image viewer with an "invisible" header bar. Really nice for quickly previewing images. Preview is still king for PDFs and image conversion though. Pairs very nicely with IINA.

## ColorSlurp

- **Price:** Free, with pro version upgrade
- **OSS:** No
- **Download:** <https://colorslurp.com/>

Quick universal color picker.

# System

## Keka

- **Price:** Free
- **OSS:** Yes (<https://github.com/aonez/Keka>)
- **Download:** <https://www.keka.io/ >

A swiss army archival tool.

## iTerm2

- **Price:** Free
- **OSS:** Yes (<https://github.com/gnachman/iTerm2>)
- **Download:** <https://iterm2.com/>

A better terminal. More customization, more features.

## UTM

- **Price:** Free
- **OSS:** Yes (<https://github.com/utmapp/UTM>)
- **Download:** <https://mac.getutm.app/>

Virtualization/emulation of other computers. This is one way to run Windows ARM on macOS. I only need to use this every once in a while and it gets the job done. If you're looking for something a little more advanced, try Parallels (paid).

## KeyboardCleanTool

- **Price:** Free
- **OSS:** No (...why?)
- **Download:** <https://folivora.ai/keyboardcleantool>

Temporarily disables the keyboard to let you clean it. It sounds stupid, but you'll end up using it every once in a while anyway, trust me.

## Karabiner-Elements

- **Price:** Free
- **OSS:** Yes (<https://github.com/pqrs-org/Karabiner-Elements>)
- **Download:** <https://karabiner-elements.pqrs.org/>

General purpose key-rebinding tool. Can rebind a lot of things that the built-in settings can't. Perfect for muscle memory diehards, especially if coming from another platform. Here's my config:

- Simple Modifications
    - All Devices
        - caps_lock -> mission_control
        - right_shift -> left_shift
            - **NOTE:** Fixes AnyDesk bug.
    - Internal Keyboard
        - fn -> left_command
        - left_command -> left_option
        - left_control -> fn
        - left_option -> left_control
            - **NOTE:** On a PC keyboard, this layout would look like this: Ctrl, Fn, Win, Alt. I have custom key labels printed to make this less confusing.
    - External Keyboard (PC)
        - left_command -> left_control
        - left_control -> left_command
- Function Keys
    - Internal Keyboard
        - f1 -> display_brightness_decrement
        - f2 -> display_brightness_increment
        - f3 -> print_screen
        - f4 -> mute
        - f5 -> volume_decrement
        - f6 -> volume_increment
        - f7 -> rewind
        - f8 -> play_or_pause
        - f9 -> fast_forward
        - f10 -> home
        - f11 -> end
        - f12 -> delete_forward
            - **NOTE:** Those last 3 keys are the reason everything else got moved around.
- Complex Modifications
    - AnyDesk Left CTRL <=> CMD
        - **NOTE:** Many remote desktop tools will try to swap left command and left control on their own to match the PC layout. Since we're already doing this, we need to swap AGAIN to counter AnyDesk. Seriously, please add an option to disable this. This is stupid.
    - Spotlight on CMD
        - **NOTE:** Kinda simulates searching in the Start Menu with the Windows key.

The complex modifications are custom. You can find them in my repo: <https://github.com/heyjoeway/KE-complex_modifications>

## LinearMouse

- **Price:** Free
- **OSS:** Yes (<https://github.com/linearmouse/linearmouse>)
- **Download:** <https://linearmouse.app/>

Lets you fine-tune individual pointing devices (yes, you can change the touchpad and mouse independently). I use this for reverse scrolling on mice and speed/acceleration tweaks.

## Hidden Bar

- **Price:** Free
- **OSS:** Yes (<https://github.com/dwarvesf/hidden>)
- **Download:** <https://itunes.apple.com/app/hidden-bar/id1452453066>

Hides system tray icons. Why the HELL is this not built in? Windows has had it since, what, XP?

## BetterDisplay (formerly BetterDummy)

- **Price:** Free, with pro version upgrade
- **OSS:** No (previously was, grrrr)
- **Download:** <https://github.com/waydabber/BetterDisplay>

Lets you create fake displays and enable HiDPI on unsupported screens. Essential for people with 1440p+ monitors. Again, more functionality that should be there by default and just... isn't.

## MonitorControl

- **Price:** Free, with pro version upgrade
- **OSS:** Yes
- **Download:** <https://github.com/MonitorControl/MonitorControl>

Lets you control the brightness of external displays from your Mac. No, I don't mean applying a dimming filter over the image (though it can do that too on unsupported displays), I mean **actually changing the settings of the monitor directly to lower the brightness.** I'm going to be totally honest, I didn't even know this was possible until I found this app. [Apparently it's been a standard since 1998](https://en.wikipedia.org/wiki/Display_Data_Channel#DDC/CI) and to my knowledge not a single OS has included support for it out of the box. What the fuck? WHY?

# Other Notes

You might notice I don't have a screenshot utility. I'd recommend Monosnap if it wasn't buggy as shit, though that may have changed since I last used it. Right now, I'm just using some Shortcuts (as in the Shortcuts app ala Monterey):

- [Selection Screenshot](https://www.icloud.com/shortcuts/1c3f40fb719f4b6f9ab8564f429778e9)
- [Full Screen Screenshot](https://www.icloud.com/shortcuts/0958cf10202a48f8929ca0567510037d)
- [Window Screenshot](https://www.icloud.com/shortcuts/8dc40861f6f341d98abf8092d3ceaf39)

You may need to edit these to set the save paths properly. I've added these to my menu bar and they work okay-ish. I want to find a better solution in the long term. For screen recording I just open up QuickTime.

I think that's it for now? I'll update this post if I find any big stuff in the future or if there's anything I missed. In the next part, I'll be covering multiplatform software.