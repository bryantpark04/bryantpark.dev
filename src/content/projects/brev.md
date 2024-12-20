---
title: brev
github: https://github.com/evanmwilliams/brev
img: /assets/projects/brev.jpg
img_alt: A terminal text editor
description: |
  brev is a barebones text editor built on top of the ncurses API and the piece table data structure. 
tags:
  - Linux
  - C++
abstraction_level: 1
group_size: 2
---
This project was actually my first non-trivial program written in C++! I worked on this with a high school/college friend over a winter break, and I found out that this, like most C/C++ projects, involved reading a lot of semi-obscure documentation scattered across the internet. 

The most interesting part of this project was probably learning the various different approaches that industry-standard text editors use for keeping track of the text being edited. They're a lot more elaborate than one might assume! We read a lot of blog posts discussing data structures for text editors, but eventually settled on piece tables since they seemed to be the easiest to implement.

Once we figured out the piece table implementation, we just had to use the `ncurses` library to manage our terminal interface and integrate our piece table into the main program.