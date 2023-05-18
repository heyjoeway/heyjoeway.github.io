---
layout: post
title:  "Graphic Design: \"Anime was a Mistake\" Shirt"
date: 2019-01-21
categories: design ui
last_modified_at: 2022-11-07
comments: true
---
A not-so-serious venture into 3D graphic design.

{% capture fig_contents %}
    {% include img.html src="final.png" %}
{% endcapture %}
{%
    include figure.html
    contents=fig_contents
%}

This design was published as a shirt design on RedBubble back in December of 2017. ~~You can view the design on RedBubble here.~~ Unfortunately, Nintendo themselves DMCA'd it because they felt like being petty.

## Making Of

The first thing that was done was obtaining the Super Mario 256 font. This was then used to type the words onto an SVG using Inkscape. A second SVG was used to make the borders for the letters.

{% capture fig_contents %}
    {% include img.html src="letters.svg" %}
    {% include img.html src="border.svg" %}
{% endcapture %}
{%
    include figure.html
    contents=fig_contents
    class="fig-bg-light"
%}

These were then imported into Blender and extruded to make them 3D. Although the letters seem shallow in the final render, they are actually quite long. The letters were then given materials with appropriate colors.

{% capture fig_contents %}
    {% include img.html src="import.png" %}
    {% include img.html src="top.png" %}
{% endcapture %}
{%
    include figure.html
    contents=fig_contents
%}

The raw render out of Blender is as follows:

{% capture fig_contents %}
    {% include img.html src="raw.png" %}
{% endcapture %}
{%
    include figure.html
    contents=fig_contents
%}

It's lacking a lot of little details though. The letters have no gradients or sparkles, and the foreground graphic of Cappy is straight up missing. The final details were added in GIMP:

{% capture fig_contents %}
    {% include img.html src="final.png" %}
{% endcapture %}
{%
    include figure.html
    contents=fig_contents
%}

For comparison, here's the original logo:

{% capture fig_contents %}
    {% include img.html src="odyssey.png" %}
{% endcapture %}
{%
    include figure.html
    contents=fig_contents
%}

## Thoughts

There's definitely a lot of things that could be improved here. The planet from the "O" in the original logo is completely missing. A lot of materials don't look metallic enough. The borders don't come down at the right angle and have gaps. Colors are a bit desaturated. The middle letters aren't stretched enough and the top letters are too big. The Cappy graphic appears to be out of date (?). However, for something that was honestly just intended as a joke, I think it came out alright.

## Download

If you'd like to download the original project file, you're in luck! Here it is:

{% 
    include asset-link.html
    href="anime.blend"
    text="Blender Project"
%}

If you want the render itself, you should be able to just right click and "Save As". Same goes for the SVGs.

[This project is licensed under CC BY 4.0.](https://creativecommons.org/licenses/by/4.0/)