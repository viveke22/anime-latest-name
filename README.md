# anime-latest-name

A simple Node.js package to fetch the latest anime names.

## Installation

```bash
npm install anime-latest-name
```
## Usage
To get Random Anime Names
```
const  anilatest  =  require("anime-latest-name")

console.log(anilatest());
```
To get entire list
```
const  anilatest  =  require("anime-latest-name")

console.log(anilatest("fullanimedetails"));
```
## Description
This module provides a function `anilatest()` that returns a random anime name. Calling `anilatest()` with the string `"fullanimedetails"` returns the complete list of anime titles and their associated details (genres, etc.) as an array of objects.


