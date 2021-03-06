---
title: 'Fancy Numbering with CSS Counters'
metaDesc: 'As a front-end developer, it’s likely that you had faced the challenge of styling lists of numbers before: Whether you were building a to-do list, a recipe website or a pagination component, chances are you ended up resorting on JavaScript to do the counting for you. Today, I want to show you a nifty CSS trick that will save up some of your bundle size, by doing all of that with good ol’ CSS. Embrace CSS Counters and the :before pseudo-element!'
date: '2021-01-29'
publishedOn: ''
tags: ['css', 'javascript', 'tips']
url: ''
---

<h3 id="introduction">
  Introduction

  <a href="#introduction" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

As a front-end developer, it’s likely that you had faced the challenge of styling lists of numbers before: Whether you were building a to-do list, a recipe website or a pagination component, chances are you ended up resorting on JavaScript to do the counting for you. Today, I want to show you a nifty CSS trick that will save up some of your bundle size, by doing all of that with good ol’ CSS. Embrace CSS Counters and the `:before` pseudo-element!

<h3 id="the-problem">
  The Problem

  <a href="#the-problem" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

Whenever we need to add a list of numbers in our code, we can leverage the beloved `<ol>` HTML tag:

```html
<h2>Ingredients for hand-made bread 🍞</h2>
<ol>
  <li>Bread Flour</li>
  <li>Instant Yeast</li>
  <li>Salt</li>
  <li>Water</li>
  <li>Cornmeal <span>(Optional)</span></li>
</ol>
```

This will render a fully-functional numbered list of ingredients:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_512,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_256,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png 256w, https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_512,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png 512w, https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_650,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="A Screenshot of an unstyled native ordered list"
  />
  <figcaption>
    A Screenshot of an unstyled native ordered list
  </figcaption>
</figure>

However, you might not like the default styling for them, or you want to change the content to be something different than numbers. And that’s where we hit our roadblock: We can’t fully style the default numbers a `<ol>` tag provides, we need to create a custom counter instead.

So, does that mean we need to use JavaScript for a task like this? The answer is **no**. Let me introduce you to CSS Counters!

> 💡 The technique we will explore is more of a workaround than a best practice. Alternatively, you could use the more semantic `::marker` [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker to style the default marker box for list items, but at the time I’m writing this, [support is limited in Safari](https://bugs.webkit.org/show_bug.cgi?id=204163) to just `font-size` and `color`,  which means you can’t change the content on the counter.

<h3 id="css-counters">
  CSS Counters

  <a href="#css-counters" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

CSS Counters are a built-in mechanism that had been around forever to deal with this scenario. Given our previous HTML:

```html
<h2>Ingredients for hand-made bread 🍞</h2>
<ol>
  <li>Bread Flour</li>
  <li>Instant Yeast</li>
  <li>Salt</li>
  <li>Water</li>
  <li>Cornmeal <span>(Optional)</span></li>
</ol>
```

We could set up our counter using the following CSS:

```css
ol {
  list-style: none;
  counter-reset: ingredients;
}

ol li {
  counter-increment: ingredients;
}

ol li:before {
  content: counter(ingredients) ". ";
}
```

The output for the custom counter example looks exactly the same:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_512,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_256,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png 256w, https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_512,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png 512w, https://res.cloudinary.com/jmg-cursos/image/upload/f_auto,w_650,q_auto:good/blog/fancy-numbering-with-css-counters/ol-rendered-output.png 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="A Screenshot of an unstyled ordered list using CSS Counters"
  />
  <figcaption>
    A Screenshot of an unstyled ordered list using CSS Counters
  </figcaption>
</figure>

There are no major styling differences (for now) between the two, but we now have a custom counter we can edit to our liking. Before we do that though, let’s explain what’s happening above:

* In the `<ol>` tag, we first remove the default styling using `list-style: none;` and we then initialize our custom counter with `counter-reset`. For the value on `counter-reset`, I used the name of the list we’re creating, in this case, `ingredients`. When you start a custom counter, its initial value is `0`.
* In the `<li>` tag for the `<ol>`, we use the `counter-increment` property. So every time we add a new `<li>` to the list, we’ll be incrementing the `ingredients` counter. It defaults to `1`, but [you can define any increment (or decrement!) that you want](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment#syntax).
* Finally, we use the `:before` pseudo-element on the `<li>` tag to modify the content for the item. Inside the `content` property, we use the `counter()` CSS function to display the current value of the counter, followed by a dot.

<h3 id="styling">
  Styling

  <a href="#styling" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

Now that we have the functionality for the counter, we can start to play around with the styles for it, using the `:before` pseudo-element we created above:

```css
ol li:before {
  /* this defines the content for the list item */
  content: counter(ingredients) ".";
  /* these are the custom styles I'm applying to them */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(77, 171, 247, 0.16);
  color: #4DABF7;
  padding: 1rem;
  border-radius: 42px;
  height: 42px;
  width: 42px;
  font-size: 2rem;
  font-weight: 700;
  margin-right: .75rem;
}
```

Something along these lines will render a counter like this one:

<iframe height="465" style="width: 100%;" scrolling="no" title="Custom number styling with CSS Counters" src="https://codepen.io/imjuangarcia/embed/preview/gOwNrbW?height=465&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/gOwNrbW'>Custom number styling with CSS Counters</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

But possibilities are endless! Feel free to play around with the styles for it, or even check [these cool examples](https://css-tricks.com/custom-list-number-styling/) that build on top of the same principles.

<h3 id="browser-support">
  Browser Support

  <a href="#browser-support" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

Even tough they feel as a rather advanced functionality, CSS Counters had been around forever (the first browser to implement it was Firefox 2 back in 2006), so support for them is great:

<picture>
  <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/css-counters.webp">
  <source type="image/png" srcset="https://caniuse.bitsofco.de/image/css-counters.png">
  <img src="https://caniuse.bitsofco.de/image/css-counters.jpg" alt="Data on support for the css-counters feature across the major browsers from caniuse.com">
</picture>

<h3 id="accessibility">
  Accessibility

  <a href="#accessibility" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h3>

An important aspect to consider is that the content for these counters is held inside the `:before` pseudo-element, which some screen readers might have trouble rendering. If the content you are representing is critical, I'd rather use the native `<ol>` numbers, and style them using the `::marker` pseudo-element. It might be [a bit more limited on the styling options](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker#allowable_properties), but you'll ensure your content is accessible to everyone.

<h4 id="conclusion">
  Conclusion

  <a href="#conclusion" aria-label="Permalink">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9326 17.7227C16.0811 15.5742 16.0811 12.0078 13.9326 9.81641C13.374 9.30078 12.7725 8.91406 12.1279 8.61328C11.8701 8.52734 11.5264 8.65625 11.4404 8.95703C11.3975 9.12891 11.3545 9.42969 11.3115 9.60156C11.3115 9.81641 11.4404 10.0312 11.6553 10.1172C12.085 10.2891 12.4717 10.5898 12.8154 10.9336C14.4053 12.4805 14.4053 15.0586 12.8584 16.6055L12.8154 16.6484L9.4209 20.043C7.83105 21.6328 5.2959 21.6328 3.70605 20.043C2.11621 18.4531 2.11621 15.918 3.70605 14.3281C3.70605 14.3281 6.24121 11.793 6.92871 11.1055C7.05762 10.9766 7.10059 10.8047 7.10059 10.6758C7.05762 10.4609 7.05762 10.2461 7.05762 10.0312C7.01465 9.60156 6.49902 9.38672 6.15527 9.6875C6.1123 9.73047 6.06934 9.77344 6.02637 9.81641L2.63184 13.2539C0.44043 15.4023 0.44043 18.9688 2.63184 21.1172C4.78027 23.3086 8.34668 23.3086 10.4951 21.1172L13.9326 17.7227ZM10.0225 13.7266C10.5811 14.2422 11.1826 14.6289 11.8271 14.9297C12.085 15.0156 12.4287 14.8867 12.5146 14.5859C12.5576 14.4141 12.6006 14.1133 12.6436 13.9414C12.6436 13.7266 12.5146 13.5117 12.2998 13.4258C11.8701 13.2539 11.4834 12.9531 11.1396 12.6094C9.5498 11.0625 9.5498 8.48438 11.0967 6.9375L11.1396 6.89453L14.5342 3.5C16.124 1.91016 18.6592 1.91016 20.249 3.5C21.8389 5.08984 21.8389 7.625 20.249 9.21484C20.249 9.21484 17.7139 11.75 17.0264 12.4375C16.8975 12.5664 16.8545 12.7383 16.8545 12.8672C16.8975 13.0391 16.8975 13.3398 16.8975 13.5117C16.9404 13.9414 17.4561 14.1562 17.7998 13.8555C17.8428 13.8125 17.8857 13.7695 17.9287 13.7266L21.3232 10.2891C23.5146 8.14062 23.5146 4.57422 21.3232 2.42578C19.1748 0.234375 15.6084 0.234375 13.46 2.42578L10.0225 5.82031C7.87402 7.96875 7.87402 11.5352 10.0225 13.7266Z" fill="#767676"/></svg>
  </a>
</h4>

That’s about it for this nifty CSS trick! Hope you learned a thing or two, and start using this when faced with the opportunity. Remember, this isn’t useful only for styling lists: People created [pagination components](https://codersblock.com/blog/fun-times-with-css-counters/), [to-do lists](https://codepen.io/rpsthecoder/pen/qpaoGq), [timelines](https://codepen.io/snookca/pen/qYoLaq), and [all sorts of fun things](https://css-tricks.com/custom-list-number-styling/). The sky’s the limit!