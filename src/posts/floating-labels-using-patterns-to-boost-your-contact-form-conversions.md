---
title: 'Floating labels: Using patterns to boost your contact form conversions'
date: '2018-01-29'
metaDesc: 'A post explaining the floating label pattern for contact forms, and how to implement it on a Cross-Browser, Cross-Compatible, CSS-only way.'
publishedOn: 'Medium'
tags: ['user experience', 'labels', 'contact forms']
url: "https://medium.com/@imjuangarcia/floating-labels-using-patterns-to-boost-your-contact-form-conversions-3f7a040e7efb"
---

> <u>Edit</u>: Since this post was written, I redesigned my website twice 😅. So the pattern is not being used anymore (since I don't have a contact form on the website anymore). I believe the content on the post is still relevant and shows a nifty way to implement it, though. Hope it helps you!

I’ve launched [my website](https://www.juangarcia.design) about two weeks ago and was surprised by the number of inquiries I had received from the contact form at the bottom of my index page.

As a UX Designer, I’m always seeking for patterns and standards to improve mine and my client’s conversion rates, and when I first saw Matt D Smith’s <a href="https://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction" target="_blank" rel="noopener noreferrer">floating label pattern</a>, I knew I wanted to test it on my website.

The thing is that [my website](https://www.juangarcia.design) took almost three years to release its beta version (because, you know, there’s always something more important to do rather than personal stuff 🙈), and after two weeks live, my mailbox had received more emails than ever before, and even though I don’t think that’s only because of the pattern, I’ve decided to create a post showing the code behind it. Here’s the pen:

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS-Only floating label" src="https://codepen.io/imjuangarcia/embed/preview/LeoeGw?height=450&theme-id=39186&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/imjuangarcia/pen/LeoeGw'>CSS-Only floating label</a> by Juan Martín García
  (<a href='https://codepen.io/imjuangarcia'>@imjuangarcia</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### A bit of background

Floating labels <a href="http://mds.is/float-label-pattern/" target="_blank" rel="noopener noreferrer">were born in 2013</a>. Matt D Smith first introduced them on <a href="https://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction" target="_blank" rel="noopener noreferrer">this shot</a>, and since then, it had become in one of the most discussed design patterns so far.

To be truly fair, I think both supporters and detractors have exposed valid arguments for and against the use of floating labels. Here’s <a href="https://css-tricks.com/float-labels-css/" target="_blank" rel="noopener noreferrer">Chris Coyier’s opinion</a> on the matter, Brad Frost’s <a href="https://bradfrost.com/blog/post/float-label-pattern/" target="_blank" rel="noopener noreferrer">pros and cons</a>, one of the <a href="https://medium.com/simple-human/floating-labels-are-a-bad-idea-82edb64220f6" target="_blank" rel="noopener noreferrer">most bitter critics</a>, and <a href="https://medium.com/bymds/are-float-labels-really-that-problematic-after-all-da7ffe7d5417" target="_blank" rel="noopener noreferrer">Matt Smith’s reply</a> to it. They’ve all made good points on their assumptions, so I’ll leave them all the theoretical stuff and focus on the practical side. Let’s dive into it!

#### How’s my approach built:

I relied on two awesome CSS features to create <a href="https://codepen.io/imjuangarcia/pen/LeoeGw" target="_blank" rel="noopener noreferrer">this pen</a>: Sibling selectors and pseudo-classes. The mix of this underrated yet powerful techniques had created this result:

<figure>
  <img
    src="https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/floating-labels-using-patterns-to-boost-your-contact-form-conversions/1_y1bNRHZxF6uljPK7H1zvaA.gif"
    srcset="https://res.cloudinary.com/jmg-cursos/image/upload/w_256,f_auto,q_auto:good/blog/floating-labels-using-patterns-to-boost-your-contact-form-conversions/1_y1bNRHZxF6uljPK7H1zvaA.gif 256w, https://res.cloudinary.com/jmg-cursos/image/upload/w_512,f_auto,q_auto:good/blog/floating-labels-using-patterns-to-boost-your-contact-form-conversions/1_y1bNRHZxF6uljPK7H1zvaA.gif 512w, https://res.cloudinary.com/jmg-cursos/image/upload/w_650,f_auto,q_auto:good/blog/floating-labels-using-patterns-to-boost-your-contact-form-conversions/1_y1bNRHZxF6uljPK7H1zvaA.gif 650w"
    sizes="(min-width: 650px) 650px, 100vw"
    width="650"
    loading="lazy"
    alt="The pattern being used on my former contact page."
  />
  <figcaption>
    The pattern being used on my former contact page.
  </figcaption>
</figure>

One of the most common concerns about floating label patterns is that the placeholder becomes the label. That’s a <a href="https://www.456bereastreet.com/archive/201204/the_html5_placeholder_attribute_is_not_a_substitute_for_the_label_element/" target="_blank" rel="noopener noreferrer">huge usability mistake</a>. The trick here is that the label <em>is not displaced:</em> It’s visually hidden (using `opacity: 0;` which still makes it readable for screen readers) until you type something on the input: When the placeholder disappears, the label becomes visible. How’s that possible by using only CSS? Thanks to the <a href="https://css-tricks.com/almanac/selectors/v/valid/" target="_blank" rel="noopener noreferrer">:valid</a> pseudo-class.

The `:valid` pseudo-class ensures that the label (sibling of the input field) becomes visible <em>only</em> when the input has at least one character, and the placeholder had disappeared. We do so by using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator" target="_blank" rel="noopener noreferrer">sibling selectors</a> (learn about them in an easy and fun way in <a href="https://thoughtbot.com/blog/basic-css-selectors-explained-with-cats" target="_blank" rel="noopener noreferrer">this post</a> which explains CSS selectors using cats).

There’s only one thing to consider, and it’s validating the input content: the `:valid` pseudo-class is used to check if there’s content inside the input, but it’s not helpful to determine if what the user had inputted is a valid email, for example. So, the `:valid` pseudo-class should be used with the help of any frontend validation library (in my case, <a href="http://parsleyjs.org/" target="_blank" rel="noopener noreferrer">Parsley</a>, but you’re free to use whatever you like) to throw an error if the user had inputted invalid content.

#### Wrapping Up

So, that’s all folks! With less than 50 lines of code, you can implement one of the most extended design patterns on your website, and boost your contact form conversions. Dependency-Free, Cross-Browser compatible, no need to use Javascript, and fully WCAG compliant. Don’t forget to <a href="https://codepen.io/imjuangarcia/pen/LeoeGw" target="_blank" rel="noopener noreferrer">fork</a> and use the snippet wherever you want, share this post if you like it, follow me for more tips & tricks, and let me know how it goes!