# Vue composables
This repo contains composables I use sometimes in my private Projects in Vue.

## useScramble
A composable that creates several types of scramble effects in vue.
Currently in development.

## useScroll
A composable that watches scroll behaviour. Currently only covers a couple of basic states.

## useTodo
A composable that can be called with a string, containing a todo, that will then place that string into a TODO.md in the root dir. Removes the todo if the call is removed in the code.
Currently in development.

## useMarquee
Reads in a directory containing svg's, set their sizes and add animations all in a render function in vue for ease of use and consistent reproducability.

## Planned 
###  useScramble
- Will contain all sorts of scrambles, and will be completely modular (no other packages necessary).
- Will be easily extendable by adding your own scrambles, leveraging Typescripts typesafety.
- Will have animations according to the type of scramble. 

### useTodo
- TBC

All of these are currently in development and not safe and/or ready for production. Use at your own risk.