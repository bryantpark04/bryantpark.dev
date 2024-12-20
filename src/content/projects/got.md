---
title: got
github: https://github.com/ryanisho/got
img: /assets/projects/got.jpg
img_alt: A source control tree
description: |
  got is a simple source control tool with support for adding changes, committing, branching, and restoring old versions.
tags:
  - Version Control
  - OCaml
abstraction_level: 3
group_size: 4
---
This was our CS 3110 (Data Structures and Functional Programming) final project, and remains to date the only project I've done in OCaml.

We chose to do this project because throughout the semester, we were taught that a functional programming language like OCaml lends itself quite naturally to recursive data structures like trees and linked lists. Git seemed like a very cool application of trees that we were all quite familiar with, so we quickly decided to implement a rudimentary form of source control!

Below are logs of a quick demo: 

```
bryant@Bryants-MacBook-Pro got % make
dune build
bryant@Bryants-MacBook-Pro got % ./got init
Initialized empty repository in /Users/bryant/dev/got.
bryant@Bryants-MacBook-Pro got % ./got add foo.txt
Added foo.txt 
bryant@Bryants-MacBook-Pro got % ./got commit -m "Add first file"
Committed 1734671487 :: Add first file
create mode   foo.txt
bryant@Bryants-MacBook-Pro got % ./got log
[1734671487] Add first file           
[1734671443] Initial commit
bryant@Bryants-MacBook-Pro got % ./got add fizz.txt

Added fizz.txt                        
bryant@Bryants-MacBook-Pro got % ./got commit -m "A
dd second file"
Committed 1734671517 :: Add second file
create mode   fizz.txt
bryant@Bryants-MacBook-Pro got % ./got status
Untracked files:                      
        foo2.txt
bryant@Bryants-MacBook-Pro got % ./got add foo2.txt

Added foo2.txt                        
bryant@Bryants-MacBook-Pro got % ./got rm foo.txt
rm foo.txt                            
bryant@Bryants-MacBook-Pro got % ./got status
Changes to be committed:              
        foo2.txt
        foo.txt
bryant@Bryants-MacBook-Pro got % ./got commit -m "A
dd third file and remove first file"
Committed 1734671562 :: Add third file and remove first file
create mode   foo2.txt
delete mode  foo.txt
bryant@Bryants-MacBook-Pro got % ./got log
[1734671562] Add third file and remove first file
[1734671517] Add second file
[1734671487] Add first file
[1734671443] Initial commit
bryant@Bryants-MacBook-Pro got % 
```