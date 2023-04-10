---
layout: post
title:  "The Portfolio Post"
date:   2023-04-10
categories: life work portfolio
---
Welcome to the site! If you're on this post, you're probably wondering who I am and what I do! In about a month, I'll be graduating from Clarkson University with a Master's in Computer Science. However, I'd like to use this post to show what I am outside of just this degree!

# Philosophy
I've spent a lot of time programming in a lot of different languages, working with many different technologies, and aiming for several different goals. It's easy to get lost in programming as an art in-and-of-itself, but as a goal-oriented individual, I see programming as a tool I use to accomplish said goals. That being said, I personally recognize it as one of the most important tools in modern society, and thus I have spent a lot of time refining it as a craft.

I try to think about the long-term viability of projects when considering all possible approaches. There are many great ideas for products, but without a efficient plan many of them will lay on the table or the cutting-room floor. In these case, I often look to automation, even for tasks in my personal life. I always consider all available options and tools: sometimes the answer is to deploy pre-existing services, or to use an already deployed service in a different way. Very often, however, an idea will come along that is too specific to execute with anything other than my own code.

(Side note: As AI becomes more adept, I am constantly searching for ways to use it in optimizing my workflow. However, I am more interested in using AI tools than developing them, as I do not currently have a great interest in Data Science. I have experimented with tools including OpenAI Playground and GitHub Copilot and, while not perfect, I am very impressed with their results.)

When I do use my own code to reach a goal, I make sure that it is readable, modular, and generally reusable. Sometimes this may be as simple as providing reasoning through comments. Other times it may be more complex, such as producing documentation (generally using a pre-existing documentation system like mkdocs), segmenting code into more readable chunks, or even developing libraries to use in multiple projects. One priority when writing is the code's compatibility with IntelliSense, which makes programming significantly more efficient. This is generally accomplished through documentation standards, such as type annotations (ala Python 3) or JSDoc.

My goal is to write software and produce products that will stand the test of time, that I'll be able to look on years down the line and be proud of. Below are some of the projects I am proud of so far!

# Professional Projects

## Clarkson University Virtual Reality Coaster (VRC)
In February of 2021, I began a refresh of Clarkson University's MaxFlight VR2004 motion simulator! This machine was purchased from a local arcade sometime in the mid-2000s, and it shows. The software is quite dated, and so I've produced several resources to bring it up towards 2023 standards:

### pyMaxFlight
**GitHub:** <https://github.com/Clarkson-IMPETUS/pyMaxFlight>

**Documentation:** <https://pymaxflight.readthedocs.io/en/latest/src/pyMaxFlight/>

Exposes all capabilities of the MaxFlight Motion Client programmatically through Python on a the Control PC. This module only allows for local operation. MaxFlight did not provide their own public API for interfacing with the simulator, so this module works by directly accessing the Motion Client window using the Win32 API, simulating button presses and slider movements.

### pyWSConsole
**GitHub:** <https://github.com/heyjoeway/pyWSConsole>

Provides network communication via WebSockets, with a focus on stability and persistent connections. Uses a console-like interface and provides automatic help documentation.

### VRC-Apps
A collection of applets which add behaviors to the simulator using the above components.

#### VRC-Apps.Server
**GitHub:** <https://github.com/Clarkson-IMPETUS/VRC-Apps/tree/main/src/VRC-Apps/Server>

A WebSockets server that allows for remote operation of the pyMaxFlight library.

#### VRC-Apps.LightsClient
**GitHub:** <https://github.com/Clarkson-IMPETUS/VRC-Apps/tree/main/src/VRC-Apps/LightsClient>

Controls the internal lights by communicating with an Arduino-controlled relay over serial and with VRC-Apps.Server.

#### VRC-Apps.NL2Bridge
**GitHub:** <https://github.com/Clarkson-IMPETUS/VRC-Apps/tree/main/src/VRC-Apps/NL2Bridge>

Communicates with a machine-local NoLimits 2 instance and VRC-Apps.Server to send motion to the simulator only when a coaster is running. Will automatically connect to the running NoLimits 2 instance and VRC- Apps.Server instance, and thus can be kept in the background indefinitely. This can also be used as an example to develop future integrations.

## Whiteface Tour
**Link:** <https://whitefacetour.app>

In the summer of 2018, I had the opportunity to work as an intern at the Whiteface Mountain Atmospheric Sciences Research Center (ASRC). During my time there, I worked on several projects related to outreach. The most substantial of these is the Whiteface Tour: a 360-degree virtual tour of the mountain summit. This uses the library three.js for rendering, and a custom JSON-based system for scene management. This does not use a pre-existing game engine. All resources are packaged using webpack, deployed through GitHub Actions, and hosted using GitHub Pages. 

# Personal Projects

## Switch Ports
**Page:** [Switch Ports](/switch-ports)

The Nintendo Switch has a thriving homebrew scene that I took part in between 2019 and 2022. I developed ports of several games and maintained them through the 3 years that I was active. These ports were generally maintained as forks so as to not pollute the upstream repositories with platform specific material. This required working with upstream maintainers to merge in changes to these fork and produce installable packages, which was eventually automated using GitHub Actions.

## ICBINS1
**Link:** <http://jojudge.com/ICBINS1/>

As a test to learn the ins-and-outs of Unity, I tried recreating the original Sonic the Hedgehog from observation! This was a great learning experience and taught me a lot about the game engine and C#. I later moved away from this project due to it being superseded in its goal by the decompilation of the 2013 remake, the exploration of other approaches, and shifting priorities in my personal life.