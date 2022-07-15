---
layout: "src/layouts/BlogLayout.astro"
title: "Hello galaxy of possibilities!"
description: "consectetur adipiscing elit. Etiam nec vulputate massa."
publishDate: "14 Jul 2022"
heroImage:
  src: "/assets/blog/introducing-astro.jpg"
  alt: "Space shuttle leaving curved trail in the sky"
setup: import { Image } from '@astrojs/image'
---

## Lorem ipsum dolor sit amet

consectetur adipiscing elit. Etiam nec `vulputate` massa. Aliquam euismod vulputate elementum. Curabitur bibendum non enim non aliquam. Vivamus tempor, ligula eget elementum fermentum, erat ex aliquam tortor, at `porttitor` felis ante finibus massa. Vivamus nunc dui, pharetra a posuere vel, **faucibus posuere** lectus.

<Image src="https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width={1024} aspectRatio="16:9" format="avif" alt="Rocket" title='Rocket' class='bg-gray-300 rounded' />

```typescript
function getDistance(amount: number) {
  if (amount === Infinity) {
    return "and beyond!";
  } else {
    return "and the normal distance!";
  }
}
```
