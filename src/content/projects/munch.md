---
title: Munch
github: https://github.com/CornellDataScience/Munch
img: /assets/projects/munch.jpg
img_alt: Food
description: |
  Munch is an iOS app for estimating macronutrient content of your meals based on photos you take of your food. I served as tech lead for this project in Cornell Data Science.
tags:
  - Computer Vision
  - Python
  - Swift
  - CDS
abstraction_level: 5
group_size: 10
---
The key idea behind this project was to encode information about nutrition for various foods in a graph database, so we wouldn't have to figure out the macronutrient breakdown of every single dish we supported. Then, we could do a top-down traversal of the graph database and follow each breakdown of a dish into its component ingredients, and then follow the breakdown of those component ingredients into macronutrients. This lets us scale up better to more foods using less storage space and in the future, we could automate adding foods to our database by scraping recipes online, since we already have data for component ingredients.

Below are our end-of-semester showcase slides:
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTfzOevNcpUKkt4cEeWtR0By8dcTGIQraVFuXcE7m9f9zgtNAyzwhMT7EpznuwHzqe3uyjRsvn362_Y/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>