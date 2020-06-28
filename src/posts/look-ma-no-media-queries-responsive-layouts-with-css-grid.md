---
title: 'Look Ma, No Media Queries! Responsive Layouts with CSS Grid'
metaDesc: 'In this article, we’ll start dipping our toes into the power of CSS Grid by building a couple of common responsive navigation layouts. It’s easier than what you may think, and since CSS Grid was built with responsiveness in mind, it’ll take less code than writing media queries all over the place.'
date: '2019-02-26'
publishedOn: 'CSS-Tricks'
tags: ['css', 'responsive', 'css grid', 'media queries']
url: 'https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/'
---

Not only has CSS Grid reshaped the way we think and build layouts for the web, but it has also contributed to writing more resilient code, replacing “hacky” techniques we’ve used before, and in some cases, killing the need to rely on code for specific resolutions and viewports. What’s so cool about this era in web development is that **we’re capable of doing more and more with fewer lines of code.**

In this article, we’ll start dipping our toes into the power of CSS Grid by building a couple of common responsive navigation layouts. It’s easier than what you may think, and since CSS Grid was built with responsiveness in mind, it’ll take less code than writing media queries all over the place. Let’s do this!

### Layout #1: Hero content and list of articles

<iframe height="450" style="width: 100%;" scrolling="no" title="Hero Content and List of Articles" src="https://codepen.io/imjuangarcia/embed/preview/pGgmbe?height=450&theme-id=39186&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/pGgmbe'>Hero Content and List of Articles</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

We’ll kick off this set of examples by creating a common website layout: A full-width hero section, with a grid of cards below.

Both elements will respond to window resizing and adapt accordingly. Though this might seem like a lot of code at first glance, the responsive behavior is done **with only six lines of CSS Grid code, and without writing a single @media rule**. Let’s break down the code to see what’s going on:

#### The hero section

Let’s take a look at the code for the `.hero` element:

```html
<section class="hero">
  <h1>You thirsty?</h1>
  <article>
    <p>Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
    <a href="#breweries">Browse Breweries</a>
  </article>
</section>
```

```css
.hero {
  /* Photo by mnm.all on Unsplash */
  background: url('https://images.unsplash.com/photo-1518176258769-f227c798150e') center;
  background-size: cover;
  padding: 4rem 2rem;

  /* Grid styles */
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

We have a bunch of background styles to enable the beer background, a bit of padding to separate the content from the edge of the screen, and then three lines of grid styles:

1. The first line (`display: grid;`) is changing the behavior of the `.hero` element to be a grid container. That means the elements inside `.hero` are now grid items.
1. The second line (`align-items: center;`) is going to vertically center the columns on our grid. But these two lines don’t do anything on their own until we set the columns of our grid.
1. And that’s where the third line comes in. A lot of stuff is going on in that single property, so let’s go one step at a time.

#### The repeat() function

Generally speaking, what we usually do to define our columns and rows on a CSS Grid is to add the value for each track after defining the property, like this:

```css
.element {
  /* This will result on four columns, each one of 1fr */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* This will result on two rows, each one of 300px */
  grid-template-rows: 300px 300px;
}
```

Now, that’s quite dull. We can use the `repeat()` function to make that less verbose and easier to follow. The function takes two parameters:

1. The number of times to repeat the value.
1. The value itself.

After refactoring our code to use `repeat()`, we should expect the same results from these lines of code:

```css/2,4
.element {
  /* this is the same as grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(4, 1fr);
  /* this is the same as grid-template-rows: 300px 300px; */
  grid-template-rows: repeat(2, 300px);
}
```

Much cleaner, yeah?

#### The minmax() function

Now, the above examples are explicitly defining sizes for the tracks (`1fr` and `300px`). That might work for some scenarios, but for our beer example here, we need to be able to automatically calculate the size of the track, based on the width of the viewport, and automatically adjust the number of columns shown. To be able to do that, we’ll define a range of values using the `minmax()` function. What will we be defining? You’ve probably guessed by now: The *minimum* and *maximum* values we want these columns to be able to resize to.

In the hero for our beer example above, we set our `minmax()` property to be `240px` at its minimum size, and `1fr` at its maximum size. `fr` units, if you’ve never heard of them, stand for fractional units. Nobody can explain them better than Jen Simmons on <a href="https://www.youtube.com/watch?v=ZPtpzuRajzM" target="_blank" rel="noopener noreferrer">this video</a> and Robin Rendle <a href="https://css-tricks.com/introduction-fr-css-unit/" target="_blank" rel="noopener noreferrer">in this post</a>.

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/m-FzPS4A.gif"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/m-FzPS4A.gif 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/m-FzPS4A.gif 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_650,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/m-FzPS4A.gif 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="Using the Firefox Grid Inspector to check the change on the track’s size when resizing"
  />
  <figcaption>
    Using the Firefox Grid Inspector to check the change on the track’s size when resizing
  </figcaption>
</figure>

That results in our tracks being `1fr` when there's plenty of space on our viewport (<abbr title="also known as">aka</abbr> desktop resolutions), and `240px` when there's not enough space for both columns (like on mobile devices). That's why they nicely grow when we make our browser wider, since they're taking the remaining space and equally dividing it across the existing columns. Now, moving to the last piece of the puzzle!

#### The auto-fit keyword

The `auto-fit` keyword allows us to wrap our columns into rows when there’s not enough space in our viewport to fit the 240px minimum value without overflowing the content. Sara Soueidan <a href="https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/" target="_blank" rel="noopener noreferrer">wrote an excellent article</a> about auto-sizing columns using the `auto-fill` and `auto-fit` keywords, in case you want to dive a little deeper into what’s going on under the hood. Now, with that last bit of code in place, we should be able to achieve this result:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/TWWn1jrg.gif"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/TWWn1jrg.gif 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/TWWn1jrg.gif 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_580,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/TWWn1jrg.gif 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="The column is automatically wrapping when there’s not enough space in the viewport"
  />
  <figcaption>
    The column is automatically wrapping when there’s not enough space in the viewport
  </figcaption>
</figure>

#### The article list

Now that we’ve thoroughly reviewed the behavior of the elements inside our hero element, it’s likely that the first two lines of CSS code for the breweries list below it might already seem familiar to you:

```css
.breweries > ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
}
```

That’s right! We’re using the exact same approach: On the first line we define our grid, on the second one we size our tracks using the same magic one-liner, and on the third line we set a gap for these columns. Nothing new under the sun, and what’s really neat about this, is that our code is resilient enough to adjust the number of tracks and their sizes, according to the number of items we have inside our unordered list:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/0_CktP52.gif"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/0_CktP52.gif 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/0_CktP52.gif 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_550,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/0_CktP52.gif 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="The grid responds to the change in the number of tracks, and adapts the layout"
  />
  <figcaption>
    The grid responds to the change in the number of tracks, and adapts the layout
  </figcaption>
</figure>

That’s all, folks! A fully responsive website layout, using just six lines of CSS code. Not bad, huh? Make sure you check the source code and play around with this example on <a href="https://codepen.io/imjuangarcia/pen/pGgmbe" target="_blank" rel="noopener noreferrer">CodePen</a>.

### Layout #2: Full-width image gallery

<iframe height="450" style="width: 100%;" scrolling="no" title="Full Width Image Gallery" src="https://codepen.io/imjuangarcia/embed/preview/bzpYyj?height=450&theme-id=39186&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/bzpYyj'>Full Width Image Gallery</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

On this next example, we’ll embrace the power of our newly learned combination of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/repeat" target="_blank" rel="noopener noreferrer">repeat()</a>, <a href="https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/" target="_blank" rel="noopener noreferrer">auto-fit</a> and <a href="https://developer.mozilla.org/es/docs/Web/CSS/minmax" target="_blank" rel="noopener noreferrer">minmax()</a> to create this responsive image gallery. We’ll also be sizing our tracks using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column" target="_blank" rel="noopener noreferrer">grid-column</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row" target="_blank" rel="noopener noreferrer">grid-row</a>, and learning about the handy property:value combination of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow" target="_blank" rel="noopener noreferrer">grid-auto-flow: dense;</a> that allows us to change the default behavior of the elements that can’t fit on our explicit tracks: Instead of wrapping themselves in new rows or columns, we’ll make them fit into the unused spots on our grid. Let’s get into the coding!

#### The grid setup

The grid is created using our familiar `display: grid;` property, where columns are defined using `repeat()`, `auto-fit` and `minmax()`. We also added a bunch rows with a `repeat()` function and defined a gap to our images, using `grid-gap`. But the new player here is the `grid-auto-flow: dense;`. We’ll get to it in a second.

```css
.gallery > .gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
}
```

We also created a repetition pattern using the <a href="https://css-tricks.com/almanac/selectors/n/nth-child/" target="_blank" rel="noopener noreferrer">nth-child()</a> pseudo-selector to set different sizes for our tracks using `grid-column` and `grid-row`. Notice here that we’re using the `span` keyword to allow the selected item to occupy more than one column or row.

```css
/* This will create 2x images every 4 elements */
.gallery > .gallery__list > li:nth-child(4n) {
  grid-column: span 2; /* Spans two columns */
  grid-row: span 2; /* Spans two rows */
}

/* This will create 3x images every 8 elements */
.gallery > .gallery__list > li:nth-child(8n) {
  grid-column: span 3;
  grid-row: span 3;
}
```

And finally, we’ll make sure our images cover the entire area of its container, regardless if it’s 1x, 2x or 3x, using `object-fit: cover;`. If you have never heard of `object-fit`, it works fairly similar to how `background-image` does, but with HTML `<img>` tags:

```css
.gallery > .gallery__list > li > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Now, the real deal here is `grid-auto-flow: dense;`. Check what happens when we take that out from our code:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/NycWPUUA.gif"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/NycWPUUA.gif 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/NycWPUUA.gif 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_620,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/NycWPUUA.gif 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="Removing grid-auto-flow: dense; leads to inconsistent placement of the elements on the grid"
  />
  <figcaption>
    Removing grid-auto-flow: dense; leads to inconsistent placement of the elements on the grid
  </figcaption>
</figure>

See those holes on our beautifully crafted grid? That’s because some of the elements on it are taking 2x or 3x spots, and when there isn’t enough space on our tracks to fit them, they’ll wrap into a new row, since that’s the default behavior. By changing it from `row` to `dense`, we’re telling the grid to fill any gaps we might have with elements that could fit them, regardless of their source order on the DOM.

That’s why this technique might come especially handy for things like image galleries, but might not be suitable for other use cases where you might need to preserve the order of the markup. Feel free to play around with the <a href="https://codepen.io/imjuangarcia/pen/bzpYyj" target="_blank" rel="noopener noreferrer">CodePen demo</a> to check the differences between where items are placed.

### Layout #3: Trello-style card layout

<iframe height="450" style="width: 100%;" scrolling="no" title="Trello-Style Card Layout" src="https://codepen.io/imjuangarcia/embed/preview/MLyQPO?height=450&theme-id=39186&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/MLyQPO'>Trello-Style Card Layout</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Now, on to the last demo, where we’ll take advantage of the ability to nest grids to recreate this <a href="https://trello.com/b/1Jz6SorC/the-dev-board" target="_blank" rel="noopener noreferrer">Trello Board</a>. We’ll be creating a grid to hold our four different columns, and inside of those, we’ll create a child grid for our cards. Even though this example won’t explore new properties or revolutionary methods, it’ll help us to get a grasp on how easy it is to build complex layouts with a few lines of CSS code. This demo has a lot of extra code to achieve the styling of the Trello layout, so we’ll focus solely on the grid styles.

#### The columns

To create the four columns, we’ll use `display: grid;` on the container and use our magical one-liner for our `grid-template-columns`. We’ll also be defining a gap between them, and use `align-items: flex-start;` to ensure that our columns don’t stretch to the bottom of the screen.

```css
.column__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: .5rem;
  align-items: flex-start;
}
```

Now, the original Trello is not responsive by default: If you resize your browser on a Trello Board, you’ll notice that you’ll end up having a horizontal scroll on your columns, rather than wrapping them on a new row. We’re not following that behavior here since we want to build responsive layouts, but in case you’re curious, and want to emulate Trello’s functionality, you can achieve that by adding two more lines of CSS code:

```css
.column__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: .5rem;
  align-items: flex-start;
  /* Uncomment these lines if you want to have the standard Trello behavior instead of the column wrapping */
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 1fr);
}
```

We learned about <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow" target="_blank" rel="noopener noreferrer">grid-auto-flow</a> in our previous demo and discovered that it let us control how the auto-placement algorithm work, and how implicit elements should be added in the flow of the grid. The default behavior is `row`, meaning that any extra element that won’t fit on our grid will wrap into a new line. We changed that to be `dense` on our previous demo, and we’ll change it to be `column` on this one: That way, any new column added here will end up in an implicit column, and have a horizontal scroll. We’ll also define a width for those auto-generated columns with the `grid-auto-columns` property.

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/lSdHuDVw.gif"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/lSdHuDVw.gif 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/lSdHuDVw.gif 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_650,f_auto,q_auto:good/blog/look-ma-no-media-queries-responsive-layouts-with-css-grid/lSdHuDVw.gif 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    height="420"
    loading="lazy"
    alt="Modifying the grid-auto-flow property will make this demo behave like the real-world Trello"
  />
  <figcaption>
    Modifying the grid-auto-flow property will make this demo behave like the real-world Trello
  </figcaption>
</figure>

#### The cards

For the cards grid, we’ll use a similar approach. We’ll `display: grid;` on the container. We won’t define any columns here, since we don’t want to have any, and we’ll put `grid-template-rows: auto;` to use to avoid all cards having the same height — we want some of them to be bigger and some of them smaller, based on the type of content being added to them.

```css
.card__list {
  display: grid;
  grid-template-rows: auto;
  grid-gap: .5rem;
  margin: .5rem 0;
}
```

And, again, that’s all folks! Two more lines to set a gap and a margin to the cards, and we’re done! Everything else in the <a href="https://codepen.io/imjuangarcia/pen/MLyQPO" target="_blank" rel="noopener noreferrer">Pen</a> is standard CSS to achieve the Trello look and feel.

#### So then... are media queries dead?

Back in the day, when we were building layouts using `display: inline-block` or floats, media queries made a lot of sense in order to change the size of our elements as the viewport got smaller. But now, with the incredibly powerful layouts that we’re able to create with a couple of CSS lines, you might feel tempted to think that media queries are doomed. I strongly disagree with that: I believe that we should change the way we think about them, and therefore use them differently.

As <a href="https://www.smashingmagazine.com/2018/02/media-queries-responsive-design-2018/" target="_blank" rel="noopener noreferrer">Rachel Andrew stated</a>, we should use media queries to fix our layout when it breaks, rather than targeting devices: There are so many out there! With the advent of Media Queries <a href="https://drafts.csswg.org/mediaqueries-4/" target="_blank" rel="noopener noreferrer">Level 4</a> and <a href="https://drafts.csswg.org/mediaqueries-5/" target="_blank" rel="noopener noreferrer">5</a>, we’re not only able to detect screen sizes now, but pointer types as well. As a result, we can dig into a user’s system preferences and adapt our code for those who prefer reduced motion or whether we should use inverted colors. That means media queries are not dead; on the flipside, I’d say it’s an exciting time for using media queries, but we need to learn to use them right. In the meantime, building robust layouts using modern techniques such as Flexbox or CSS Grid, will save you a bunch of time, code, and headaches.