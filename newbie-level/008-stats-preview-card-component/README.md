# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![image](./images/s1.png)
![image](./images/s2.png)

### Links

- Solution URL: [Click Me](https://www.frontendmentor.io/solutions/008-stats-preview-card-component-1Kfc1og2nR)
- Live Site URL: [Click Me](https://suchit-shah.github.io/frontend-mentor/newbie-level/008-stats-preview-card-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox

### What I learned

You can't divide 2 flex-items using **flex : 1** with equal width if one of them has padding, to achive equal width if one of them has padding you have to use **flex-basis : 50%**

```css
.text, .pic{
    flex: 0 0 50%;
}
```

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - Documentation

## Author

- Frontend Mentor - [@Suchit-Shah](https://www.frontendmentor.io/profile/Suchit-Shah)
- Twitter - [@Suchit_Shah_](https://x.com/Suchit_Shah_)