---
layout: "src/layouts/BlogLayout.astro"
title: "Hello galaxy of possibilities!"
description: "consectetur adipiscing elit. Etiam nec vulputate massa."
publishDate: "14 Jul 2022"
heroImage:
  src: "/assets/blog/introducing-astro.jpg"
  alt: "Space shuttle leaving curved trail in the sky"
---

## Lorem ipsum dolor sit amet

consectetur adipiscing elit. Etiam nec `vulputate` massa. Aliquam euismod vulputate elementum. Curabitur bibendum non enim non aliquam. Vivamus tempor, ligula eget elementum fermentum, erat ex aliquam tortor, at `porttitor` felis ante finibus massa. Vivamus nunc dui, pharetra a posuere vel, **faucibus posuere** lectus.

<img width="1024" height="600" loading="lazy" src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Rocket" title='Rocket' class='rounded' />

```typescript
// Oh, and get Shiki syntax highlighting out-of-the-box!
// See our docs for customization options:
// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
function getDistance(amount: number) {
  if (amount === Infinity) {
    return "and beyond!";
  } else {
    return "and the normal distance!";
  }
}
```
