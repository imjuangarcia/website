---
title: '5 things you can do with CSS instead of JavaScript'
date: '2019-10-29'
publishedOn: 'Logrocket'
tags: ['css', 'javascript']
url: 'https://blog.logrocket.com/5-things-you-can-do-with-css-instead-of-javascript/'
---

I’m <a href="https://davidwalsh.name/css-facts" target="_blank" rel="noopener noreferrer">not the first one</a> to state that the lines between CSS and JavaScript are becoming blurry as both languages evolve.

From custom properties (a.k.a variables) to filters, animations, or math operations, CSS has taken a lot of what we used to do in JavaScript (or in popular CSS preprocessors) and made it available to us, natively.

Both languages serve different purposes. With each browser release, feature release, and increase in properties, CSS is becoming an incredibly powerful language, capable of handling functionality that we previously relied on JavaScript for.

In this post, we’ll learn about some CSS golden nuggets you might not have heard about, that will natively (and gracefully!) handle things like **smooth scrolling, dark mode, form validation,** and more features that previously required multiple lines of JS trickery to work.


### Smooth scrolling

There was a time when we had to rely on JavaScript (or even jQuery) implementations to do this, with `window.scrollY` to replicate this behavior. Those days are gone now, thanks to the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior" target="_blank" rel="noopener noreferrer">scroll-behavior</a> property. We can now handle smooth scrolling on our website with, wait for it, one line of CSS code!

```css
html {
  scroll-behavior: smooth;
}
```

Browser support is <a href="https://caniuse.com/#feat=css-scroll-behavior" target="_blank" rel="noopener noreferrer">around 75%</a>. Check out how it works in the Codepen below:

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS-Only Smooth Scrolling" src="https://codepen.io/imjuangarcia/embed/preview/RwbQLPe?height=450&theme-id=39186&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/RwbQLPe'>CSS-Only Smooth Scrolling</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Dark mode

Dark mode has been the hot trend lately after <a href="https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/" target="_blank" rel="noopener noreferrer">macOS released its dark mode functionality</a> and Safari implemented the `prefers-color-scheme` media feature, which allows us to detect if the user has dark mode enabled by default.

You might think of dark mode as a complex feature to implement, involving CSS variables, different colors for each scheme, and some JavaScript to hook up the necessary click event to target the changes on the website. And while that’s partially true, and it’s currently <a href="https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8" target="_blank" rel="noopener noreferrer">the standard way to implement it</a> it doesn’t need to be this complicated.

Wei Gao <a href="https://dev.wgao19.cc/sun-moon-blending-mode/" target="_blank" rel="noopener noreferrer">showed us on her blog</a> a clever way to achieve a similar result (more of a `reversed mode`) using `mix-blend-mode: difference`, one of the blending modes supported on CSS. If you’ve ever played around with <a href="https://helpx.adobe.com/photoshop/using/blending-modes.html" target="_blank" rel="noopener noreferrer">Photoshop Blending Modes</a>, this is the same thing but directly on the browser.

Some of its advantages include not having to specify the inverted colors (the blend mode will do that for you), and you can isolate the elements you don’t want to change. Some of its limitations are that you don’t have a full range of colors, and performance can be a concern.

Currently, <a href="https://caniuse.com/#search=mix-blend-mode" target="_blank" rel="noopener noreferrer">native browser support is at 90%</a>, with only IE (R.I.P) not supporting it.

For a more in-depth explanation of how this blending mode works, make sure you check <a href="https://dev.wgao19.cc/sun-moon-blending-mode/" target="_blank" rel="noopener noreferrer">Wei’s awesome article</a> on it. For a fun experiment with it, check this Codepen:

<iframe height="450" style="width: 100%;" scrolling="no" title="Dark Mode with mix-blend-mode: difference" src="https://codepen.io/imjuangarcia/embed/preview/xxKLMEN?height=450&theme-id=39186&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/xxKLMEN'>Dark Mode with mix-blend-mode: difference</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Truncate text

This is one of my personal favorites because it’s a common problem I run into when developing websites that rely on a CMS to populate content. Variable length on the copywriting might make your lovely-designed cards look inconsistent across different sizes or resolutions. Dave Rupert <a href="https://daverupert.com/2018/04/pitfalls-of-card-uis/" target="_blank" rel="noopener noreferrer">has a great article</a> on that matter.

In the past, I’ve always reached out to JavaScript-based solutions without even thinking about it because <a href="https://css-tricks.com/line-clampin/" target="_blank" rel="noopener noreferrer">most CSS techniques for achieving this result were quite “hacky”</a>. But as I worked on including a blog to my website, I discovered a couple of CSS properties that, coupled together, might be able to provide a native, easy-to-implement solution. Meet `text-overflow` and `line-clamp`!

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS-Only Text Truncation" src="https://codepen.io/imjuangarcia/embed/preview/dybdYbB?height=450&theme-id=39186&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/dybdYbB'>CSS-Only Text Truncation</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Text-overflow

This is a widely adopted, <a href="https://caniuse.com/#search=text-overflow" target="_blank" rel="noopener noreferrer">fully supported</a> native CSS-only solution to control how text behaves when it overflows its containing element. You can set its value to be `ellipsis` and that’ll give you the Unicode `…` character. So far so good, but its main limitation is that you’ll always get one line of truncated text, regardless of your text’s length. So this might be a perfect fit for titles, but not so useful for excerpts, reviews or long passages of text.

That’s where `line-clamp` comes into play.

#### Line-clamp

The `line-clamp` property isn't new either. <a href="https://twitter.com/desandro" target="_blank" rel="noopener noreferrer">Dave DeSandro</a> showed us this technique <a href="https://dropshado.ws/post/1015351370/webkit-line-clamp" target="_blank" rel="noopener noreferrer">a decade ago</a> (hence the need for the old flexbox implementation with `display: -webkit-box` and `-webkit-box-orient: vertical`).

Then what's new here? The fact that Firefox <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=WebKit-line-clamp" target="_blank" rel="noopener noreferrer">implemented it on version 68</a> and, wait for it... with the `-webkit` prefix! And now that Edge is Chromium-based, we can also use the `-webkit` prefix to boost <a href="https://caniuse.com/#search=line-clamp" target="_blank" rel="noopener noreferrer">browser support up to 95%</a>.

That means we can now use a combination of three CSS lines to truncate multiple lines of text, <a href="https://codepen.io/imjuangarcia/pen/dybdYbB" target="_blank" rel="noopener noreferrer">like so</a>. The only gotcha here is that the specification for line clamps are part of the <a href="https://drafts.csswg.org/css-overflow-3/#propdef--webkit-line-clamp" target="_blank" rel="noopener noreferrer">CSS Overflow Module Level 3</a> which is currently in Editor's Draft, which might imply there could be some changes to the spec. Another thing to consider is that you can't control the number of characters to show, which might lead to some <a href="https://twitter.com/search?f=tweets&vertical=default&q=karenmcgrane%20truncation%20is%20not&src=typd" target="_blank" rel="noopener noreferrer">not so convenient (yet funny) truncation scenarios</a>. But other than that, happy CSS clamping!

### Scroll snapping

CSS scroll snapping is another handy functionality Chrome users have had for a while and we can now enjoy on Firefox with its 68 release. We also got it on version 76 of Edge, bumping up <a href="https://caniuse.com/#feat=css-snappoints" target="_blank" rel="noopener noreferrer">overall browser support to all major browsers</a>.

Have you ever noticed how some fancy websites will create fullscreen sections, and lock the viewport on specific locations as you scroll? <a href="https://www.artandscience.jp" target="_blank" rel="noopener noreferrer">Here’s an example</a> of that behavior.

Getting this to work properly a while back was tricky, with lots of math calculations and JavaScript involved. But now, CSS is capable of creating interactions like <a href="https://codepen.io/imjuangarcia/pen/zYORdMK" target="_blank" rel="noopener noreferrer">this one</a> natively.

It works similarly to Flexbox or CSS Grid in the sense that you need a container element on which you’ll set the `scroll-snap-type` and multiple children with `scroll-snap-align` set to them, like so:

```html
<main class=”parent”>
  <section class=”child”></section>
  <section class=”child”></section>
  <section class=”child”></section>
</main>
```

```css
.parent {
  scroll-snap-type: x mandatory;
}

.child {
  scroll-snap-align: start;
}
```

The `scroll-snap-type` accepts two different values: `mandatory`, which will force the snap to either the top or bottom of the element, or `proximity`, which will do the math for you and snap when the content is close enough to the snap point.

Another property we can set on the parent container is `scroll-padding`, which might be handy if you have fixed elements on the layout (like a fixed header or, why not, a cookie policy notification 😅) that might otherwise hide some of the content.

For the children, we only have `scroll-snap-align` for now, which will tell the container which points to snap to (top, center or bottom).

While it might feel tempting to go willy-nilly with adding scroll snapping on your entire website now that you know this technique can achieve that result with just a couple of CSS lines and no math involved, remember the <a href="https://www.robinrendle.com/notes/scrolljacking" target="_blank" rel="noopener noreferrer">one and only law of web design</a>, according to Robin Rendle: **Don’t mess with the scroll**. This technique might be useful for things like sliders, image galleries or some specific sections on your page, but use it sparingly since it can affect performance and the user’s experience overall.

You can check out the Codepen here:

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS-Only Horizontal Fullscreen Gallery with Scroll Snapping" src="https://codepen.io/imjuangarcia/embed/preview/zYORdMK?height=450&theme-id=39186&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/zYORdMK'>CSS-Only Horizontal Fullscreen Gallery with Scroll Snapping</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Sticky navigation

Following up on features that previously required a lot of JavaScript math and were pretty expensive to implement performance-wise, we have sticky positioning. Where we previously needed `offsetTop` and `window.scrollY` we now have `position: sticky` to do all the wizardry for us! An element with sticky positioning will behave as a relatively-positioned element until a given point on the viewport is reached to then become a fixed-positioned element. Browser support is <a href="https://caniuse.com/#feat=css-sticky" target="_blank" rel="noopener noreferrer">up to almost 92%</a>, with minor implementation details.

So, while it might sound as easy as doing something like:

```css
header {
  position: sticky;
  top: 0;
}
```

To nicely set your header to be sticky, it’s important to know that the structure of your HTML matters! So for example, if your HTML structure looks like this:

```html
<main>
  <header>
    <h1>This is my sticky header!</h1>
  </header>
  <section>This is my content</section>
</main>
```

The header will only be able to stick on the area that its parent (in this case, the `<main>` tag) covers. This “sticky parent” determines the scope on which the “sticky item” can act. This gotcha is better explained by Elad Shechter in <a href="https://medium.com/@elad/css-position-sticky-how-it-really-works-54cd01dc2d46" target="_blank" rel="noopener noreferrer">this article</a>, and <a href="https://codepen.io/imjuangarcia/pen/QWLQjqQ" target="_blank" rel="noopener noreferrer">here’s a fun little experiment</a> using this technique.

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS Race using Sticky Positioning" src="https://codepen.io/imjuangarcia/embed/preview/QWLQjqQ?height=450&theme-id=39186&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/QWLQjqQ'>CSS Race using Sticky Positioning</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Bonus to wrap up: @supports media-rule

Even though these CSS features are widely adopted and supported, as discussed above, you might still want to check if they <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">are available on the browser</a> before adding them. If that’s the case, you can use the `@supports` feature query, which is <a href="https://caniuse.com/#feat=css-featurequeries" target="_blank" rel="noopener noreferrer">widely adopted by browsers</a> and allows you to test if the browser supports a specific `property: value` pair before applying a set of styles. The syntax looks as follow:

```css
@supports (initial-letter: 4) {
  p::first-letter {
    initial-letter: 4;
  }
}
```

With this handy feature query, you can apply a set of styles just on those browsers that support them. The syntax might sound familiar since it’s exactly how we write media queries and is a great way to do what’s called progressive enhancement, using these top-notch features right now on browsers that have them, while preventing inconsistent behavior on browsers that don’t have them. Jen Simmons explains this better on her <a href="https://youtu.be/T8uxmUQZsck" target="_blank" rel="noopener noreferrer">Resilient CSS</a> videos.

So that’s it! Hopefully, these state-of-the-art CSS features will help you ship a smaller JavaScript bundle, while still creating interesting and compelling UIs. Also, feel free to check out these <a href="https://codepen.io/collection/DrGkMr" target="_blank" rel="noopener noreferrer">Codepens</a> again as well.