---
hideHome: true
---
In February of 2021, I began my Master's project: a refresh of Clarkson University's MaxFlight VR2004 motion simulator, dubbed the Virtual Reality Coaster (VRC)! This machine was purchased from a local arcade sometime in the mid-2000s, and it shows. The software is quite dated, so I produced several resources to bring it up towards modern standards:

- **pyMaxFlight:** Exposes all capabilities of the MaxFlight Motion Client programmatically through Python on a the Control PC. This module only allows for local operation. MaxFlight did not provide their own public API for interfacing with the simulator, so this module works by directly accessing the Motion Client window using the Win32 API, simulating button presses and slider movements. ([GitHub](https://github.com/Clarkson-IMPETUS/pyMaxFlight), [Docs](https://pymaxflight.readthedocs.io/en/latest/src/pyMaxFlight/))

- **pyWSConsole:** Provides network communication via WebSockets, with a focus on stability and persistent connections. Uses a console-like interface and provides automatic help documentation. ([GitHub](https://github.com/heyjoeway/pyWSConsole))

- **VRC-Apps:** A collection of Python applications to extend the functionality of the VRC using the aforementioned libraries. ([GitHub](https://github.com/Clarkson-IMPETUS/VRC-Apps))